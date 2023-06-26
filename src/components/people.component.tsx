import { Component } from "react";
import { Link } from "react-router-dom";
import SvgIcon from "./BUI/SvgIcon";
import AvatarGroup from "./BUI/AvatarGroup";
import PersonDataService from "../services/person.service";

type Props = {};

type State = {
    listPeople: Array<Person.Person>,
    loadingPeopleData: Boolean
};

export default class People extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.retrievePeople = this.retrievePeople.bind(this);

        this.state = {
            listPeople: [],
            loadingPeopleData: false
        };
    }

    componentDidMount = (): void => {
        this.retrievePeople();
    }

    retrievePeople = async (): Promise<void> => {
        this.setState({
            loadingPeopleData: true,
        });

        PersonDataService.getPeople()
            .then((response: any) => {
                this.setState({
                    listPeople: response.data.data.items,
                    loadingPeopleData: false
                });
            })
            .catch((e: Error) => {
                console.log(e);
                this.setState({
                    listPeople: [],
                    loadingPeopleData: false
                });
            });
    }

    render() {
        const { listPeople, loadingPeopleData } = this.state;

        return (
            <div className="block min-vh-100 mb-5">
                <div className="d-flex align-items-center mb-4">
                    <span className="title">People List</span>
                    <span className="detail ml-2"> {listPeople.length} people</span>
                    <Link to={"/add-person"} className="ml-auto">
                        <button className="btn btn-y btn-green" >
                            <span className="svg-icon svg-icon-2 mr-2">
                                <SvgIcon icon={"addCircleIcon"} />
                            </span>
                            Create New
                        </button>
                    </Link>
                </div>
                <div className="table-view table-responsive table-loading no-padding">
                    {loadingPeopleData ? (
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <table className="table-y table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Label</th>
                                    <th>Total Gifts</th>
                                    <th>Total Gifts This Year</th>
                                    <th>Campaigns</th>
                                </tr>
                            </thead>
                            <tbody className="accordion accordion-flush" id="accordionFlush">
                                {listPeople && listPeople.map((person: Person.Person) => (
                                    <tr key={person.id}>
                                        <td>{person.name}</td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                {person.label_name && (
                                                    <div
                                                        className="badge-y mr-2"
                                                        style={{ background: person.background_color }}>
                                                        <span className="value" style={{ color: person.text_color }}>
                                                            {person.label_name}
                                                        </span>
                                                    </div>
                                                )}
                                                <SvgIcon icon={"addLabel"} />
                                            </div>
                                        </td>
                                        <td >522</td>
                                        <td >25</td>
                                        <td>
                                            <AvatarGroup numberOfAvatars={Number(person.number_of_campaign)} icon={"campaignIcon"} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div >
        );
    }
}
