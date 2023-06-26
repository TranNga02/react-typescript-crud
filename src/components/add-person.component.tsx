import { Component, ChangeEvent } from "react";
import LabelDataService from "../services/label.service";
import PersonDataService from "../services/person.service";
import { paymentMethods } from "../constants/person";
import { RegexEmail } from "../constants/regex";
import { validate } from "../ultils/validators";
import SwalPopup from "../ultils/swalPopup";

type Props = {};

type State = {
    listLabel: Array<Label.Label>,
    isSubmitting: Boolean,
    name: string,
    email: string,
    label: string,
    paymentMethod: string,

    errorName: string,
    errorEmail: string,
    errorPaymentMethod: string,
};

export default class AddPerson extends Component<Props, State>{
    constructor(props: Props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeLabel = this.onChangeLabel.bind(this);
        this.onChangePaymentMethod = this.onChangePaymentMethod.bind(this);
        this.retrieveLabels = this.retrieveLabels.bind(this);
        this.resetData = this.resetData.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validateName = this.validateName.bind(this);
        this.validatePaymentMethod = this.validatePaymentMethod.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.submitForm = this.submitForm.bind(this);


        this.state = {
            listLabel: [],
            isSubmitting: false,
            name: "",
            email: "",
            paymentMethod: "",
            label: "",
            errorName: "",
            errorEmail: "",
            errorPaymentMethod: ""
        };
    }

    componentDidMount = (): void => {
        this.retrieveLabels();
        this.resetData();
    }

    retrieveLabels = async (): Promise<void> => {
        LabelDataService.getAllLabels()
            .then((response: any) => {
                this.setState({
                    listLabel: response.data.data.items,
                    label: response.data.data.items[0].id,
                    paymentMethod: paymentMethods[0].value,
                });
            })
            .catch((e: Error) => {
                console.log(e);
                SwalPopup.swalResultPopup("Sorry, looks like there are some errors detected, please try again.", "error");
                this.setState({
                    listLabel: [],
                });
            });
    }

    resetData = (): void => {
        this.setState({
            name: "",
            email: "",
            paymentMethod: "",
            label: "",
            errorName: "",
            errorEmail: "",
            errorPaymentMethod: ""
        })
    };

    onChangeName = (e: ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            name: e.target.value
        });
    }

    onChangeEmail = (e: ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            email: e.target.value
        });
    }

    onChangeLabel = (e: ChangeEvent<HTMLSelectElement>): void => {
        this.setState({
            label: e.target.value
        });
    }

    onChangePaymentMethod = (e: ChangeEvent<HTMLSelectElement>): void => {
        this.setState({
            paymentMethod: e.target.value
        });
    }

    validateName = (): string => {
        const errorName = validate(this.state.name, {
            required: true,
            errorsMessage: { required: "This field is required." },
        });

        this.setState({ errorName });
        return errorName;
    };

    validateEmail = (): string => {
        const errorEmail = validate(this.state.email, {
            required: true,
            pattern: RegexEmail,
            errorsMessage: { required: "This field is required.", pattern: "Incorrect email format." },
        });

        this.setState({ errorEmail });
        return errorEmail;
    };

    validatePaymentMethod = (): string => {
        const errorPaymentMethod = validate(this.state.paymentMethod, {
            required: true,
            errorsMessage: { required: "This field is required." },
        });

        this.setState({ errorPaymentMethod });
        return errorPaymentMethod;
    };

    validateForm = (): boolean => {
        const arrRes = [];
        arrRes.push(this.validateName());
        arrRes.push(this.validateEmail());
        arrRes.push(this.validatePaymentMethod());

        return arrRes.findIndex((x) => x && x.length > 0) < 0;
    };

    submitForm = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        if (!this.validateForm()) return;

        const newPerson = {
            name: this.state.name,
            email: this.state.email,
            payment_method: this.state.paymentMethod,
            label_id: this.state.label,
        } as Person.CreatePerson;

        this.createPerson(newPerson);
    }

    createPerson = async (person: Person.CreatePerson): Promise<void> => {
        this.setState({
            isSubmitting: true,
        });

        PersonDataService.createPerson(person)
            .then((response: any) => {
                SwalPopup.swalResultPopup("Added.", "success");
                this.setState({
                    listLabel: response.data.data.items,
                    isSubmitting: false,
                });
                this.resetData();
            })
            .catch((e: Error) => {
                console.log(e);
                SwalPopup.swalResultPopup("Sorry, looks like there are some errors detected, please try again.", "error");
                this.setState({
                    listLabel: [],
                    isSubmitting: false,
                });
                this.resetData();
            });
    }

    render() {
        const {
            listLabel,
            isSubmitting,
            name,
            email,
            label,
            paymentMethod,
            errorName,
            errorEmail,
            errorPaymentMethod } = this.state

        return (
            <div className="block">
                <div className="mb-5">
                    <span className="title">Add New Person</span>
                </div>
                <hr />
                <form className="mt-4">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group form-group-y">
                                <label>Name</label>
                                <input value={name} onChange={this.onChangeName} className="form-control" placeholder="Please input" />
                                {errorName && (
                                    <p className="error-message mt-1">{errorName}</p>
                                )}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-y">
                                <label>Label</label>
                                <select value={label} onChange={this.onChangeLabel} className="form-control" placeholder="">
                                    {listLabel && listLabel.map((label: Label.Label) => (
                                        <option value={label.id} key={label.id}>{label.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group form-group-y">
                                <label>Email</label>
                                <input value={email} onChange={this.onChangeEmail} className="form-control" placeholder="Please input" />
                                {errorEmail && (
                                    <div className="error-message mt-1">{errorEmail}</div>
                                )}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-y">
                                <label>Payment Method</label>
                                <select value={paymentMethod} onChange={this.onChangePaymentMethod} className="form-control" placeholder="">
                                    {paymentMethods.map((method: Person.PaymentMethodsOption) => (
                                        <option value={method.value} key={method.value}>{method.key}</option>
                                    ))}
                                </select>
                                {errorPaymentMethod && (
                                    <div className="error-message mt-1">{errorPaymentMethod}</div>
                                )}
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-block btn-y btn-green mt-4" onClick={this.submitForm}>
                        {isSubmitting && (
                            <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true" />
                        )}
                        Add Person
                    </button>
                </form>
            </div>
        );
    }
}
