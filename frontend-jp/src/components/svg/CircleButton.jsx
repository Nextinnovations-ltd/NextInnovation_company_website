import { Link } from "react-router-dom";

const CircleButton = () => {
    return (
        <Link to="">
            <div className="px-[21px] lg:px-[25px] py-[22px] lg:py-[26px] rounded-full bg-[#F15A29] hover:bg-[#D95125]">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 10.25H17.5L14 5.25" stroke="white" strokeWidth="1.875"/>
                </svg>
            </div>
        </Link>
    );
}

export default CircleButton;