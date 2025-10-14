import {PropTypes} from "prop-types"
import TechnologyMenu from "./TechnologyMenu";

const TechnologyCard = ({title,menus}) => {
    return (
        <div className="technology-card h-full bg-white w-full rounded-[9px] lg:rounded-[24px] px-6 lg:px-[29px] pt-[19px] lg:pt-[29px] pb-[35px] lg:pb-[51px]">
            <h3 className="text-[21px] font-bold leading-[40px] tracking-[-2%] text-[#121212]">{title}</h3>
            <div className="grid grid-cols-4 gap-3 xl:gap-4 mt-[15px] lg:mt-[22px]">
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
