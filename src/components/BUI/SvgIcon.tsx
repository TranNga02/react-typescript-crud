type Props = {
    icon?: string
    className?: string
};

const SvgIcon = (props: Props) => {
    const types = {
        addLabel: "addLabel",
        addCircleIcon: "addCircleIcon",
        campaignIcon: "campaignIcon",
    };

    const renderIcon = () => {
        let icon = <></>

        if (props.icon === types.addLabel) {
            icon = <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={props.className}
            >
                <circle cx="13" cy="13" r="13" fill="#E7E7E6" fillOpacity="0.5" />
                <path d="M9 13H17" stroke="#0E1209" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 17V9" stroke="#0E1209" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        } else if (props.icon === types.addCircleIcon) {
            icon = <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={props.className}
            >
                <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    stroke="#F5F5F5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="M8 12H16" stroke="#F5F5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 16V8" stroke="#F5F5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        } else if (props.icon === types.campaignIcon) {
            icon = <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={props.className}
            >
                <g clipPath="url(#clip0_101_8)">
                    <path
                        d="M45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45C34.9264 45 45 34.9264 45 22.5Z"
                        fill="#DDEEC3"
                    />
                    <path
                        d="M17.0576 31.8389L15.6872 26.5784M15.6872 26.5784L18.3175 25.8932L25.9208 28.1256L22.4949 14.9745L16.9471 20.6328L13.0018 21.6605C11.5491 22.039 10.6783 23.5233 11.0567 24.976C11.4351 26.4286 12.9195 27.2994 14.3721 26.921L15.6872 26.5784Z"
                        stroke="#91C83E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M27.7545 13.6039L29.6996 10.2885M31.1804 26.755L34.4959 28.7M32.0977 19.4942L34.7279 18.8091"
                        stroke="#FBAF40"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_101_8">
                        <rect width="45" height="45" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        }
        return icon;
    }
    return (
        renderIcon()
    );
}

export default SvgIcon;
