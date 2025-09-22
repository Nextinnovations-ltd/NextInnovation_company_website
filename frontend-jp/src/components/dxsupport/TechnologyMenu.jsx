import {PropTypes} from "prop-types"

const TechnologyMenu = ({image,title}) => {
    return (
        <div>
            <img src={image} alt="" className="w-[69px] lg:w-[113px] h-[69px] lg:h-[112px]" />
            <p className="roboto text-center text-[8px] lg:text-[14px] font-semibold leading-[100%] lg:leading-[120%] tracking-[0%] lg:tracking-[1%] text-[#859DB2] uppercase">{title}</p>
        </div>
    );
}

TechnologyMenu.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default TechnologyMenu;
