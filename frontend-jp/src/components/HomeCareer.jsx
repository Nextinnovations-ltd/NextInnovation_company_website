import { useState,useEffect,useRef } from 'react';
import { Link } from "react-router-dom"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CareerCard from "./CareerCard";
import { API_BASE_URL } from '../config';
import SectionTitle from './SectionTitle';
import GoButton from './GoButton';
import useSectionTitleAnimation from '../hooks/useSectionTitleAnimation';
import useGoButtonAnimation from '../hooks/useGoButtonAnimation';
import useCardAnimation from '../hooks/useCardAnimation';

gsap.registerPlugin(ScrollTrigger);

const HomeCareer = () => {

    let [career,setCareer] = useState([])
    const titleRef = useRef(null)
    const goButtonRef = useRef(null)
    const containerRef = useRef(null)

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/news`)
        .then(res => res.json())
        .then(data => {
            setCareer(data.data.slice(0, 3));
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    useSectionTitleAnimation(titleRef, {start: "top+=300 top"})
    useGoButtonAnimation(goButtonRef, {start: "top+=500 top"})
    useCardAnimation(containerRef, '.career-card', {start: "top+=400 top"})

    return (
      <div className="bg-white">
        <div  className="home-news pb-[100px] mx-auto px-[25px] xl:px-0 pt-[63px] lg:pt-[120px]">
            <div className="overflow-hidden">
                <div ref={titleRef}>
                    <SectionTitle jp="ニュース" eng="NEWS" />
                </div>
            </div>
            <div ref={containerRef} className="card-transition grid md:grid-cols-2 lg:grid-cols-3 gap-[40px] text-[#444444] mt-[50px]">
                {!!career.length && career.map(item => (
                    <Link key={item.id} to={`/news/${item.id}`}>
                        <div className="career-card">
                            <CareerCard title={item.title} image={item.feature} date={item.created_at} category={item.category} />
                        </div>
                    </Link>
                ))}
            </div>

            <div className="text-center lg:text-end mt-[40px] lg:mt-[65px] h-[68px] overflow-hidden">
              <div ref={goButtonRef}>
                <GoButton name="続きを見る" link="/news" />
              </div>
            </div>
        </div>
      </div>
    )
}

export default HomeCareer