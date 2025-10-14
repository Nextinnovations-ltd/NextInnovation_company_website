import BgImg from '../../../public/images/contact-bg.png'
import caseStudyText from '../../../public/images/svg/Case study.svg'
import CaseStudyCard from '../../components/CaseStudyCard'
import gridImg1 from '../../../public/images/Rectangle 4704.png'
import gridImg2 from '../../../public/images/Rectangle 4703.png'
import gridImg3 from '../../../public/images/Rectangle 4703 (1).png'
import gridImg4 from '../../../public/images/Rectangle 4704 (1).png'
import gridImg5 from '../../../public/images/Rectangle 4703 (2).png'
import gridImg6 from '../../../public/images/Rectangle 4703 (3).png'
import gridImg7 from '../../../public/images/Rectangle 4704 (2).png'
import gridImg8 from '../../../public/images/Frame 37172.png'
import gridImg9 from '../../../public/images/Rectangle 4703 (4).png'
import rotateImg from '../../../public/images/Group 34121.svg'
import useCardAnimation from '../../hooks/useCardAnimation'
import { motion } from 'framer-motion';
import Breadcrumb from '../../components/Breadcrumb'
import { useState, useRef } from "react";



const CaseStudy = () => {
	const categories = ["全て", "EOR", "DX支援", "受託開発", "UI/UXデザイン"];

	const caseStudies = [
	  {
		image: gridImg1,
		title: "継続的なサイト更新",
		text1: "日本のEC企業",
		text2: "ラボ型EOR",
		categories: ["EOR"],
	  },
	  {
		image: gridImg2,
		title: "MVPを短期開発し、資金調達成功",
		text1: "スタートアップ",
		text2: "安心ラボ型と伴走型",
		categories: ["EOR"],
	  },
	  {
		image: gridImg3,
		title: "自社サイトの自社プロジェクト立ち上げ",
		text1: "AIコンサルタント会社",
		text2: "伴走型",
		categories: ["EOR"],
	  },
	  {
		image: gridImg4,
		title: "小規模web開発を短納期で構築実現",
		text1: "スタートアップ",
		text2: "DX支援、UI/UXデザイン、受託開発",
		categories: ["DX支援", "UI/UXデザイン", "受託開発"],
	  },
	  {
		image: gridImg5,
		title: "SaaSダッシュボードUI刷新で利用率向上",
		text1: "スタートアップ",
		text2: "DX支援、UI/UXデザイン",
		categories: ["DX支援", "UI/UXデザイン"],
	  },
	  {
		image: gridImg6,
		title: "伝統的なECサイトをSHOPIFYでリニュアル",
		text1: "小売",
		text2: "DX支援、UI/UXデザイン、受託開発",
		categories: ["DX支援", "UI/UXデザイン", "受託開発"],
	  },
	  {
		image: gridImg7,
		title: "ホームページ制作",
		text1: "スタートアップ",
		text2: "UI/UXデザイン、受託開発",
		categories: ["UI/UXデザイン", "受託開発"],
	  },
	  {
		image: gridImg8,
		title: "ホームページ制作",
		text1: "スタートアップ",
		text2: "UI/UXデザイン、受託開発",
		categories: ["UI/UXデザイン", "受託開発"],
	  },
	  {
		image: gridImg9,
		title: "ホームページ制作",
		text1: "小売",
		text2: "UI/UXデザイン、受託開発",
		categories: ["UI/UXデザイン","受託開発"],
	  },
	];

	const containerRef = useRef(null);
	useCardAnimation(containerRef, ".case-study-card", { start: "top 80%" });


	  const [activeCategory, setActiveCategory] = useState("全て");
	//  const containerRef = useRef(null);

	  const filteredCases =
		activeCategory === "全て"
		  ? caseStudies
		  : caseStudies.filter((c) => c.categories.includes(activeCategory));
	return (
		<div className='bg-white rounded-[40px] lg:rounded-[80px] relative z-10 overflow-hidden md:px-6 '>
			<div className="flex flex-col justify-between max-w-[1240px] mx-auto" style={{ backgroundImage: `url(${BgImg})`, backgroundSize: 'contain', backgroundPosition: 'top', width: '100%', backgroundRepeat: 'no-repeat', }} >
				<div className="max-w-[1240px] w-full mx-auto h-[50vh] md:h-[80vh] flex flex-col justify-between items-start pt-[100px] px-[24px] md:px-0">
					<motion.div className='opacity-0 md:opacity-1 flex justify-center items-center gap-2 ' initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }}>
						<Breadcrumb current="導入事例" />
					</motion.div>
					<div className="pl-[30px] md:pl-[40px]">

						<motion.div className="" initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true }}>
							<p className='flex items-center gap-2 text-[#575757] text-[16px] font-[500] leading-[31px]'>(<svg className='animate-fade' xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
								<circle cx="4" cy="4" r="4" fill="#096FCA" />
							</svg>導入事例 )</p>
						</motion.div>
						<motion.img src={caseStudyText} alt="" className='mt-[20px]' initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true }} />
						<motion.p initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true }} className='pl-12 md:pl-[276px] text-black text-[20px] md:text-[24px] font-[700] leading-[44px] tracking-[-0.48px] uppercase mt-[37px] md:mt-[56px]'>長く愛される 新しい ストーリー</motion.p>
					</div>
				</div>
				 <div className="w-full max-w-[1240px] mx-auto relative z-10 px-6 md:px-0">
				  {/* Category Filter */}
			<div className="w-[100%] overflow-x-auto "   style={{ msOverflowStyle: "none", scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}>
				  <motion.div
					className="mt-[67px] md:mt-[85px] flex gap-6 md:gap-12 cursor-pointer "
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: true }}
				  >
					{categories.map((cat) => (
					  <p
						key={cat}
						onClick={() => setActiveCategory(cat)}
						className={`text-nowrap text-[16px] md:text-[24px] font-[700] leading-[24px] md:leading-[44px] tracking-[-0.32px] md:tracking-[-0.48px] uppercase transition-colors duration-300 cursor-pointer ${
						  activeCategory === cat
							? "text-[#1E2C44] underline underline-offset-8 decoration-2 decoration-[#F15A29]"
							: "text-[#848484] hover:text-[#1E2C44]"
						}`}
					  >
						{cat}
					  </p>
					))}
				  </motion.div>
			</div>


				  {/* Cards */}
				  <div
					ref={containerRef}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-12 md:gap-x-4 mt-[108px] md:mt-[100px]"
				  >
					{filteredCases.map((item, i) => (
					  <CaseStudyCard
						key={i}
						image={item.image}
						title={item.title}
						text1={item.text1}
						text2={item.text2}
					  />
					))}
				  </div>
				</div>
				<div className="flex justify-end items-end w-full pb-[20vh] relative right-[-10%] mt-[-20%]">
					<img src={rotateImg} alt="" className=' rotate-[20deg] ' />
				</div>
			</div>
		</div>
	)
}

export default CaseStudy