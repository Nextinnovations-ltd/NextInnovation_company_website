import BottomShadow from "./BottomShadow"
import TopShadow from "./TopShadow"
const StepSystem = () => {
    return (
        <div className="step-section grid grid-cols-2 md:grid-cols-3 mt-[88px] mb-[191px] gap-[24px]">
            <BottomShadow step = "01" title = "Automate Operations"/>
            <TopShadow step = "02" title = "Manage Data"/>
            <BottomShadow step = "03" title = "Improve Security"/>
            <TopShadow step = "04" title = "Optimize Efficiency"/>
            <BottomShadow  step = "05" title = "Scale Operations"/>
            <TopShadow step = "06" title = "Integrate Technologies"/>
        </div>
    )
}

export default StepSystem