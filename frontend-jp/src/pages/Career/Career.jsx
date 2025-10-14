import { useState, useEffect } from "react";
import {motion} from "framer-motion"
import Breadcrumb from '../../components/Breadcrumb';
import { useRef } from "react";
import rotateImg from '/images/Group 34121.svg'
import NewsText from "/images/svg/news.svg"
import BgImg from '/images/contact-bg.png'
import useCardAnimation from "../../hooks/useCardAnimation";
import LeftArrow from "/images/svg/pagination-arrow-left.svg"
import RightArrow from "/images/svg/pagination-arrow-right.svg"
import { API_BASE_URL } from "../../config";
import CareerCard from "../../components/CareerCard";
import { Link } from "react-router-dom";
import useHeroRotate from "../../hooks/useHeroRotate";

const Career = () => {

	let [url, setUrl] = useState(`${API_BASE_URL}/api/news?category=1`);
	let [news, setNews] = useState([]);
	let [currentPage, setCurrentPage] = useState('');
	let [lastPage, setLastPage] = useState('');
	let [prevPage, setPrevPage] = useState('');
	let [nextPage, setNextPage] = useState('');
	const containerRef = useRef(null)
	useCardAnimation(containerRef,".news-card",{start: "top 80%"})
	useHeroRotate()

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const res = await fetch(url);
				const data = await res.json();

				setNews(data);
				setCurrentPage(data.meta.current_page);
				setLastPage(data.meta.last_page);
				setPrevPage(data.links.prev);
				setNextPage(data.links.next);
			} catch (err) {
				console.error(err);
			}
		};
		fetchNews();
	}, [url]);

	let link = (page) => {
		setUrl(`${API_BASE_URL}/api/news?category=1&page=${page}`);
		pageTransition();
	}

	let pageTransition = () => {
		window.scrollTo({ top: 390, left: 0 });
	}

	return (
		<div className='bg-white rounded-[40px] lg:rounded-[80px] relative z-10 mt-[50px] lg:mt-0'>
			<div className="flex flex-col justify-between max-w-[1240px] mx-auto" style={{ backgroundImage: `url(${BgImg})`, backgroundSize: 'contain', backgroundPosition: 'top', width: '100%', backgroundRepeat: 'no-repeat', }} >
				<div className="max-w-[1240px] w-full mx-auto h-[300px] md:h-[80vh] flex flex-col justify-between items-start pt-[30px] lg:pt-[120px] px-[24px] lg:px-0">
					<motion.div className='opacity-0 md:opacity-1 flex justify-center items-center gap-2' initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }}>
						<Breadcrumb current="ニュース" />
					</motion.div>
					<div className="pl-[0px] lg:pl-[40px]">

						<motion.div className="" initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true }}>
							<p className='flex items-center gap-2 text-[#575757] text-[16px] font-[500] leading-[31px]'>(<svg className='animate-fade' xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
								<circle cx="4" cy="4" r="4" fill="#096FCA" />
							</svg>ニュース )</p>
						</motion.div>
						<motion.img src={NewsText} alt="" className='mt-[20px] w-[150px] lg:w-full' initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true }} />
					</div>
				</div>
				<div className="max-w-[1240px] mx-auto relative z-10 px-6 lg:px-0 lg:min-h-[1000px]">
					<div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-[60px] md:gap-x-3 mt-[100px]">
						{!!news.data && news.data.map(item => (
							<Link to={`/news/${item.id}`} key={item.id}>
								<CareerCard image={item.feature} date={item.created_at} title={item.title} />
							</Link>
						))}
					</div>
					<div className="flex justify-center mt-[117px] lg:mt-[153px]">
						<div className="flex items-center justify-center py-[9px] px-3 rounded-[45px] shadow-[0px_1px_3px_0px] shadow-[#00000021] space-x-2 text-[16px] leading-[15px] tracking-[0%] text-[#637381]">
							<button onClick={() => { setUrl(prevPage); pageTransition(); }} className={`${prevPage == null ? 'cursor-not-allowed' : ''} p-[10px] rounded-full border-[1px] border-[#DFE4EA]`}><img src={LeftArrow} alt="" className={`${prevPage == null ? 'opacity-40' : ''}`} /></button>
							{Array.from({ length: lastPage }).map((_, i) => (
								<button key={i+1} onClick={() => link(i + 1)} className={`${currentPage == i + 1 ? 'bg-[#1E2C44] text-white' : ''} w-[38px] h-[38px] text-center rounded-full border-[1px] border-[#DFE4EA]`}>{i + 1}</button>
							))}
							<button onClick={() => { setUrl(nextPage); pageTransition(); }} className={`${nextPage == null ? 'cursor-not-allowed' : ''} p-[10px] rounded-full border-[1px] border-[#DFE4EA]`}><img src={RightArrow} alt="" className={`${nextPage == null ? 'opacity-40' : ''}`} /></button>
						</div>
					</div>
				</div>
				<div className="flex justify-end items-end pb-[34px] lg:pb-[60px] mt-[-300px] lg:mt-[-700px]">
					<img src={rotateImg} alt="" className='lg:rotate-[20deg]' />
				</div>
			</div>
		</div>
	)
}

export default Career