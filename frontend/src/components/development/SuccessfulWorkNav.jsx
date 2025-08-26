import { Link } from 'react-router-dom'
import {PropTypes} from "prop-types"

const SuccessfulWorkNav = ({category}) => {
    return (
        <div className="md:flex md:items-center md:justify-between mb-[48px]">
            <h2 className="text-[30px] md:text-[36px] lg:text-[46px] xl:text-[56px] font-semibold uppercase tracking-[-1.12px]">Successful Works</h2>
            <div className="flex mt-[10px] md:mt-0">
                <Link to={`/works?category=${category}`}>
                    <div className="group flex gap-[12px] hover:text-[#E84721] hover:border-[#E84721] items-center py-[12px] px-[20px] text-[14px] lg:text-[16px] font-semibold leading-[20px] tracking-[0.16px] uppercase border-[1.5px] rounded-[64px] border-[#1A1A1A]">
                        <p>see more</p>
                        <svg className="block group-hover:hidden" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 8.5H14L11.2 4.5" stroke="#1A1A1A" strokeWidth="1.5"/>
                        </svg>
                        <svg className="hidden group-hover:block" width="16" height="15" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 10H17.5L14 5" stroke="#E84721" strokeWidth="2"/>
                        </svg>
                    </div>
                </Link>
            </div>
        </div>
    )
}

SuccessfulWorkNav.propTypes = {
    category: PropTypes.string.isRequired
}

export default SuccessfulWorkNav