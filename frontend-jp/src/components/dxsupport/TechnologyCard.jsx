import {PropTypes} from "prop-types"
import TechnologyMenu from "./TechnologyMenu";

const TechnologyCard = ({title,menus}) => {
    return (
        <div className="technology-card h-full bg-white w-full lg:w-[595px] rounded-[9px] lg:rounded-[24px] px-6 lg:px-8 pt-[19px] lg:pt-8 pb-[35px] lg:pb-14">
            <h3 className="text-[24px] font-bold leading-[44px] tracking-[-2%] text-[#121212]">{title}</h3>
            <div className="flex flex-wrap gap-[10px] lg:gap-4 mt-[15px] lg:mt-6">
                {menus.map((menu,index) => (
                    <TechnologyMenu key={index} image={menu.image} title={menu.name} />
                ))}
            </div>
        </div>
    );
}

TechnologyCard.propTypes = {
    title: PropTypes.string.isRequired,
    menus: PropTypes.array.isRequired,
}

export default TechnologyCard;
