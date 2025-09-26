import {motion} from "framer-motion"
import Breadcrumb from '../../components/Breadcrumb';
import { useRef } from "react";
import rotateImg from '/images/Group 34121.svg'
import NewsText from "/images/svg/news.svg"
import BgImg from '/images/contact-bg.png'
import Img from "/images/eor-cs3.png"
import useCardAnimation from "../../hooks/useCardAnimation";
import LeftArrow from "/images/svg/pagination-arrow-left.svg"
import RightArrow from "/images/svg/pagination-arrow-right.svg"

const Career = () => {

	const containerRef = useRef(null)
	useCardAnimation(containerRef,".news-card",{start: "top 80%"})

	return (
		<div className='bg-white rounded-[40px] lg:rounded-[80px] relative z-10'>
			<div className="flex flex-col justify-between max-w-[1240px] mx-auto" style={{ backgroundImage: `url(${BgImg})`, backgroundSize: 'contain', backgroundPosition: 'top', width: '100%', backgroundRepeat: 'no-repeat', }} >
				<div className="max-w-[1240px] w-full mx-auto h-[50vh] md:h-[80vh] flex flex-col justify-between items-start pt-[100px] px-[24px] md:px-0">
					<motion.div className='opacity-0 md:opacity-1 flex justify-center items-center gap-2 ' initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }}>
						<Breadcrumb current="ニュース" />
					</motion.div>
					<div className="pl-[30px] md:pl-[40px]">

						<motion.div className="" initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true }}>
							<p className='flex items-center gap-2 text-[#575757] text-[16px] font-[500] leading-[31px]'>(<svg className='animate-fade' xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
								<circle cx="4" cy="4" r="4" fill="#096FCA" />
							</svg>ニュース )</p>
						</motion.div>
						<motion.img src={NewsText} alt="" className='mt-[20px]' initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true }} />
					</div>
				</div>
				<div className="max-w-[1240px] mx-auto relative z-10 px-6 md:px-0">
					<div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-[60px] md:gap-x-3 mt-[108px] md:mt-[100px]">
						{Array.from({ length: 6 }, (_, i) => (
							<div key={i} className="news-card text-[#444444]">
								<img src={Img} alt="" className="rounded-[12px]" />
								<p className="text-[12px] font-normal leading-[22px] tracking-[0%] mt-4">20/9/2024</p>
								<h3 className="roboto text-[20px] font-medium leading-[30px] tracking-[0%] uppercase">Talent Cloud beta version coming soon</h3>
							</div>
						))}
					</div>
					<div className="flex justify-center mt-[153px]">
						<div className="flex items-center justify-center py-[9px] px-3 rounded-[45px] shadow-[0px_1px_3px_0px] shadow-[#00000021] space-x-2 text-[16px] leading-[15px] tracking-[0%] text-[#637381]">
							<button className="p-[10px] rounded-full border-[1px] border-[#DFE4EA]"><img src={LeftArrow} alt="" /></button>
							<button className="w-[38px] h-[38px] text-center rounded-full border-[1px] border-[#DFE4EA]">1</button>
							<button className="w-[38px] h-[38px] text-center rounded-full border-[1px] border-[#DFE4EA]">2</button>
							<button className="w-[38px] h-[38px] text-center rounded-full border-[1px] border-[#DFE4EA]">3</button>
							<button className="w-[38px] h-[38px] text-center rounded-full border-[1px] border-[#DFE4EA] bg-[#1E2C44] text-white">4</button>
							<button className="w-[38px] h-[38px] text-center rounded-full border-[1px] border-[#DFE4EA]">5</button>
							<button className="p-[10px] rounded-full border-[1px] border-[#DFE4EA]"><img src={RightArrow} alt="" /></button>
						</div>
					</div>
				</div>
				<div className="flex justify-end items-end w-full pb-[20vh] relative right-[-10%] mt-[-20%]">
					<img src={rotateImg} alt="" className='rotate-[20deg]' />
				</div>
			</div>
		</div>
	)
}

export default Career