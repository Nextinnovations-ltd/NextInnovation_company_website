import React, { useRef } from 'react'
import BgImg from '../../../public/images/contact-bg.png'
import caseStudyText from '../../../public/images/svg/Case study.svg'
import CaseStudyCard from '../../components/CaseStudyCard'
import gridImg from '../../../public/images/casestudy.png'
import rotateImg from '../../../public/images/Group 34121.svg'
import useCardAnimation from '../../hooks/useCardAnimation'
import useSectionTitleAnimation from '../../hooks/useSectionTitleAnimation'
import { motion } from 'framer-motion';
const CaseStudy = () => {
  
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useCardAnimation(containerRef,".case-study-card",{start:"top 80%"});
  useSectionTitleAnimation(titleRef,{start:"top 70%"});
  return (
      <div className='overflow-x-hidden'>
          <div className="flex flex-col justify-between max-w-[1240px] mx-auto" style={{backgroundImage: `url(${BgImg})`, backgroundSize: 'contain', backgroundPosition: 'top', width: '100%',backgroundRepeat: 'no-repeat',}} >
         
        <div className="max-w-[1240px] w-full mx-auto h-[50vh] md:h-[80vh] flex flex-col justify-between items-start pt-[100px] px-[24px] md:px-0">
       <motion.div className='opacity-0 md:opacity-1 flex justify-center items-center gap-2 ' initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}>
              <p className='text-[#444] text-[13px] font-[400] leading-[22px]'>TOP</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M9.47334 7.43305L5.97334 10.9331C5.73414 11.1723 5.34633 11.1723 5.10713 10.9331C4.86794 10.6939 4.86794 10.306 5.10713 10.0668L8.17403 6.99995L5.10713 3.93305C4.86794 3.69386 4.86794 3.30604 5.10713 3.06685C5.34633 2.82765 5.73414 2.82765 5.97334 3.06685L9.47334 6.56685C9.71253 6.80604 9.71253 7.19386 9.47334 7.43305Z" fill="#F15A29"/>
              </svg>
              <p className='text-[#444] text-[13px] font-[400] leading-[22px] opacity-[0.6]'>お問い合わせ</p>
                </motion.div>
              <div className="pl-[30px] md:pl-[40px]">

            <motion.div className="" initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}>
             <p className='flex  items-center gap-2 text-[#575757] text-[16px] font-[500] leading-[31px]'>(<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
              <circle cx="4" cy="4" r="4" fill="#096FCA"/>
            </svg>導入事例 )</p>
           </motion.div>
            <motion.img src={caseStudyText} alt="" className='mt-[20px]' initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}/>
            <motion.p initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }} className='pl-12 md:pl-[276px] text-black text-[20px] md:text-[24px] font-[700] leading-[44px] tracking-[-0.48px] uppercase mt-[37px] md:mt-[56px]'>長く愛される 新しい ストーリー</motion.p>
         
          
          
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto relative z-10 px-6 md:px-0">
           <motion.div className="mt-[67px] md:mt-[85px] flex gap-12" initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}>
            <p className='text-[#1E2C44] text-[16px] md:text-[32px] font-[700] leading-[24px] md:leading-[41px] tracking-[-0.32px] md:tracking-[-0.64px] uppercase'>全て</p>
            <p  className='text-[#848484] text-[16px] md:text-[32px] font-[700]  leading-[24px] md:leading-[41px] tracking-[-0.32px] md:tracking-[-0.64px] uppercase'>EOR </p>
            <p  className='text-[#848484] text-[16px] md:text-[32px] font-[700]  leading-[24px] md:leading-[41px] tracking-[-0.32px] md:tracking-[-0.64px] uppercase'>UI/UXデザイン </p>
            <p  className='text-[#848484] text-[16px] md:text-[32px] font-[700]  leading-[24px] md:leading-[41px] tracking-[-0.32px] md:tracking-[-0.64px] uppercase'>受託開発 </p>
          </motion.div>
          <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-12 md:gap-4 mt-[108px] md:mt-[125px]">
            <CaseStudyCard image={ gridImg} title='小規模web開発を短納期で構築実現'  text1='スタートアップ'  text2='UI/UXデザイン、受託開発 ' />
            <CaseStudyCard image={ gridImg} title='SaaSダッシュボードUI刷新で利用率向上' text1='スタートアップ'  text2='UI/UXデザイン、受託開発 ' />
            <CaseStudyCard image={ gridImg} title='伝統的なECサイトをSHOPIFYでリニュアル' text1='スタートアップ'  text2='UI/UXデザイン、受託開発 ' />
            <CaseStudyCard image={ gridImg} title='小規模web開発を短納期で構築実現' text1='スタートアップ'  text2='UI/UXデザイン、受託開発 ' />
            <CaseStudyCard image={ gridImg} title='SaaSダッシュボードUI刷新で利用率向上' text1='スタートアップ'  text2='UI/UXデザイン、受託開発 ' />
            <CaseStudyCard image={ gridImg} title='伝統的なECサイトをSHOPIFYでリニュアル' text1='スタートアップ'  text2='UI/UXデザイン、受託開発 ' />
             
              
          </div>

         
        </div>
             <div className="flex justify-end items-end w-full pb-[20vh] relative right-[-10%] mt-[-20%]">
              <img src={rotateImg} alt="" className=' rotate-[20deg]'/>

            </div>
          </div>
    </div>
  )
}

export default CaseStudy