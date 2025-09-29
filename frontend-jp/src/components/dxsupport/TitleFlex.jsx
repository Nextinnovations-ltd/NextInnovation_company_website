import { useRef } from "react"
import useSectionTitleAnimation from "../../hooks/useSectionTitleAnimation"
import SectionTitle from "../SectionTitle"
import {PropTypes} from "prop-types"

const TitleFlex = ({jp,eng,text}) => {

    const titleRef = useRef(null)
    const textRef = useRef(null)
    useSectionTitleAnimation(titleRef,{start: "top 70%"})
    useSectionTitleAnimation(textRef,{start: "top 80%"},50)

    return (
        <div className="lg:flex lg:items-end lg:justify-between space-y-[28px] lg:space-y-0 overflow-hidden">
            <div ref={titleRef}>
                <SectionTitle jp={jp} eng={eng} />
            </div>
            <div className="w-[323px] lg:w-[477px] h-[68px] lg:h-auto text-[14px] lg:text-[17px] font-medium leading-[24px] lg:leading-[34px] tracking-[0%]">
                <p ref={textRef}>{text}</p>
            </div>
        </div>
    );
}

TitleFlex.propTypes = {
    jp: PropTypes.string.isRequired,
    eng: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default TitleFlex;
