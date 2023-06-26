import SvgIcon from "./SvgIcon";

type Props = {
    icon: string,
    numberOfAvatars: number,
};

const AvatarGroup = (props: Props) => {
    return (
        <div className="avatar-group">
            {props.numberOfAvatars < 5 ? (
                <div>
                    <span className="d-flex align-items-center">
                        {Array.from({ length: props.numberOfAvatars }, (_, index) => (
                            <SvgIcon key={index} className="avatar-group__icon" icon={props.icon} />
                        ))}
                    </span>
                </div>
            ) : (
                <div v-else>
                    <span v-if="icon" className="d-flex align-items-center"
                    >
                        {Array.from({ length: 4 }, (_, index) => (
                            <SvgIcon key={index} className="avatar-group__icon" icon={props.icon} />
                        ))}
                        <span className="avatar-group__text d-flex align-items-center justify-content-center"
                        >+{props.numberOfAvatars - 4}</span></span>
                </div>
            )}
        </div>
    );
}
export default AvatarGroup;
