import { useState,useEffect } from "react";
import {motion} from "framer-motion"
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../../config";
import Breadcrumb from "../../components/Breadcrumb";
import NewsText from "/images/svg/news.svg"
import BgImg from '/images/contact-bg.png'

const CareerDetail = () => {
    let {id} = useParams();
    let [news,setNews] = useState('');

    let url= `${API_BASE_URL}/api/news/${id}`;
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.data) {
                setNews(data.data);
            }
        })
        .catch(err => {
            console.log(err.message);
        })
    }, [url]);

    
    return (
        <>
            <style>
                {`
                    .description img {
                        display: block;
                        margin: 0 auto;
                    }
                    .description {
                        font-size: 16px;
                        font-weight: 500;
                        line-height: 28px;
                        letter-spacing: 0%;
                    }
                `}
            </style>
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
                    <div className="max-w-[1052px] mx-auto relative z-10 px-6 lg:px-0 lg:min-h-[1000px] pt-[92px] lg:pt-[211px] pb-[100px] text-[#444444]">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <img src={news.feature} alt="" className="w-full lg:w-[900px]" />
                        </motion.div>
                        <motion.div
                            className="mt-[43px] lg:mt-[48px] mb-[31px]"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-[14px] font-normal leading-[22px] tracking-[0%]">{news.created_at}</p>
                            <h3 className="roboto text-[20px] font-semibold leading-[34px] tracking-[-2%] uppercase">{news.title}</h3>
                        </motion.div>
                        <motion.div
                            className="description"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
                            viewport={{ once: true }}
                            dangerouslySetInnerHTML={{ __html: news.description }}
                        />
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default CareerDetail