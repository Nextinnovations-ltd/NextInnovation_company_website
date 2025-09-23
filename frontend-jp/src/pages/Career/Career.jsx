import { Link, useSearchParams } from "react-router-dom"
import CareerCard from "../../components/CareerCard"
import { useState, useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useVisiter from "../../hooks/useVisiter";
import { API_BASE_URL } from "../../config";

const Career = () => {
	useVisiter('news');

	let [url, setUrl] = useState(`${API_BASE_URL}/api/news`);
	let [news, setNews] = useState([]);
	let [category, setCategory] = useState('');
	let [currentPage, setCurrentPage] = useState('');
	let [lastPage, setLastPage] = useState('');
	let [prevPage, setPrevPage] = useState('');
	let [nextPage, setNextPage] = useState('');
	let [searchParams, setSearchParams] = useSearchParams();
	let [newsCategory, setNewsCategory] = useState([]);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const res = await fetch(`${API_BASE_URL}/api/news/category`);
				const data = await res.json();
				setNewsCategory(data.data);
			} catch (err) {
				console.error(err);
			}
		};

		fetchCategories();
	}, []);

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
		setUrl(`${API_BASE_URL}/api/news?category=${category}&page=${page}`);
		pageTransition();
	}

	let categoryFilter = (id, name) => {
		setCategory(id);
		setSearchParams({ category: name });
		setUrl(`${API_BASE_URL}/api/news?category=${id}`);
		pageTransition();
	};

	useEffect(() => {
		const name = searchParams.get("category");
		if (name && newsCategory.length > 0) {
			const found = newsCategory.find(cat => cat.name.toLowerCase() === name.toLowerCase());
			if (found) {
				setCategory(found.id);
				setUrl(`${API_BASE_URL}/api/news?category=${found.id}`);
			}
		}
	}, [searchParams, newsCategory]);

	let pageTransition = () => {
		window.scrollTo({ top: 390, left: 0 });
		gsap.to(".card-transition", {
			opacity: 0,
			duration: 0.4,
			ease: "sine.out",
			onComplete: () => {
				// After fade out is done, fade in
				gsap.to(".card-transition", {
					opacity: 1,
					duration: 0.8,
					ease: "sine.inOut"
				});
			}
		});
	}

	/* TEXT ANIMATION */
	const textRefs = useRef([]);
	const addToRefs = (el) => {
		if (el && !textRefs.current.includes(el)) {
			textRefs.current.push(el);
		}
	};

	useEffect(() => {
		// Create array to store all timelines for cleanup
		const allTimelines = [];

		// 1. TEXT ANIMATIONS (improved version)
		textRefs.current.forEach((textElement) => {
			if (!textElement) return;

			// Skip if already animated (in case this runs multiple times)
			if (textElement.classList.contains('has-animated')) return;
			textElement.classList.add('has-animated');

			// Preserve original HTML structure but wrap lines
			const lines = textElement.innerHTML.split('<br>');
			textElement.innerHTML = lines.map(line =>
				line.trim() ? `<div class="line-container"><div class="line">${line}</div></div>` : '<br>'
			).join('');

			const containers = textElement.querySelectorAll('.line-container');
			const lineElements = textElement.querySelectorAll('.line');

			// Set initial state
			gsap.set(containers, {
				height: 0,
				overflow: 'hidden'
			});

			gsap.set(lineElements, {
				y: '100%',
				opacity: 0
			});

			// Create timeline with more reliable ScrollTrigger
			const textTl = gsap.timeline({
				scrollTrigger: {
					trigger: textElement,
					start: "top 60%",

					toggleActions: "play none none none",
					markers: false,

					once: true
				}
			});

			containers.forEach((container, i) => {
				const line = container.querySelector('.line');
				if (!line.textContent.trim()) return; // Skip empty lines

				textTl.to(container, {
					height: 'auto',
					duration: 0.4,
					ease: "power2.out"
				}, i * 0.2)
					.to(line, {
						y: 0,
						opacity: 1,
						duration: 0.6,
						ease: "power2.out"
					}, i * 0.2); // Simplified stagger timing
			});

			allTimelines.push(textTl);
		});

		// Refresh ScrollTriggers after setup to ensure they detect properly
		setTimeout(() => {
			ScrollTrigger.refresh();
		}, 500);

	}, []);

	return (
		<div className="works-list max-w-[1240px] mx-auto text-[#121212] px-[24px] xl:px-0">
			<h1 ref={addToRefs} className="text-[80px] md:text-[100px] lg:text-[120px] xl:text-[135px] italic font-light leading-[100%] tracking-[-5px] mt-[60px] md:mt-[101px] mb-[88px]">Knowledge sharing and Blogs</h1>
			<div className="works-nav flex flex-wrap gap-[15px] md:gap-[28px] xl:gap-[32px] text-[18px] text-[#8D8D8D] font-semibold leading-[100%] tracking-[0.18px] uppercase mb-[50px] md:mb-[74px]">
				<div className={`category-link ${category === '' ? 'active' : ''}`} onClick={() => categoryFilter('', '')}>
					<span className="original">ALL</span>
					<span className="duplicate">ALL</span>
				</div>
				{newsCategory?.map(item => (
					<div key={item.id} className={`category-link ${category == item.id ? 'active' : ''}`} onClick={() => categoryFilter(item.id, item.name.toLowerCase())}>
						<span className="original">{item.name}</span>
						<span className="duplicate">{item.name}</span>
					</div>
				))}
			</div>

			<div className="card-transition grid md:grid-cols-2 lg:grid-cols-3 gap-x-[20px] gap-y-[50px] text-[#999]">
				{!!news.data && news.data.map(item => (
					<Link key={item.id} to={`/news/${item.id}`}>
						<CareerCard key={item.id} title={item.title} image={item.feature} date={item.created_at} category={item.category} />
					</Link>
				))}
			</div>

			{(!news.data || !news.data.length) && (
				<div className="bg-gray-200 h-[400px] flex justify-center items-center">
					<h1 className="text-[40px] font-medium">Data not Found</h1>
				</div>
			)}

			{!!news.data && !!news.data.length && (
				<div className="text-[#000] flex gap-[32px] items-center mt-[80px] mb-[100px] md:mb-[164px] justify-center">
					<p onClick={() => { setUrl(prevPage); pageTransition(); }} className={`${prevPage == null ? 'cursor-not-allowed opacity-40' : 'cursor-pointer'} text-[16px] font-semibold leading-[20px] tracking-[0.16px] uppercase`}>Previous</p>
					<div className="flex gap-[16px]">
						{Array.from({ length: lastPage }).map((_, i) => (
							<p key={i + 1} onClick={() => link(i + 1)} className={`${currentPage == i + 1 ? 'text-[#E84721] border-b border-b-[#E84721]' : ''} cursor-pointer p-[8px] text-center text-[18px] font-semibold leading-[21.6px] tracking-[0.09px] w-[40px] h-[40px]`}>
								{i + 1}
							</p>
						))}
					</div>
					<p onClick={() => { setUrl(nextPage); pageTransition(); }} className={`${nextPage == null ? 'cursor-not-allowed opacity-40' : 'cursor-pointer'} text-[16px] font-semibold leading-[20px] tracking-[0.16px] uppercase`}>Next</p>
				</div>
			)}

		</div>
	)
}

export default Career