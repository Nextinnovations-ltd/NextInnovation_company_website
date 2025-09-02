import BottomShadow from "./BottomShadow"
import TopShadow from "./TopShadow"
const StepWebsite = () => {
    return (
        <div className="step-section grid grid-cols-2 md:grid-cols-3 mt-[88px] mb-[191px] gap-[24px]">
            <BottomShadow step = "01" title = "Create an Online Presence"/>
            <TopShadow step = "02" title = "Design Responsive"/>
            <BottomShadow step = "03" title = "Business growth"/>
            <TopShadow step = "04" title = "Increase Engagement"/>
            <BottomShadow step = "05" title = "Ensure Security"/>
            <TopShadow step = "06" title = "Optimize Performance"/>
        </div>
    )
}

export default StepWebsite