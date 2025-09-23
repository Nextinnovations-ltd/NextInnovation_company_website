import React from 'react'
import BgImg from '../../../public/images/contact-bg.png'
import caseStudyText from '../../../public/images/svg/Case study.svg'
import CaseStudyCard from '../../components/CaseStudyCard'
import gridImg from '../../../public/images/casestudy.png'
import rotateImg from '../../../public/images/Group 34121.svg'
const CaseStudy = () => {
  return (
      <div className='overflow-x-hidden'>
          <div className="flex flex-col justify-between" style={{backgroundImage: `url(${BgImg})`, backgroundSize: 'contain', backgroundPosition: 'top', width: '100%',backgroundRepeat: 'no-repeat',}} className="max-w-[1240px] mx-auto">
         
        <div className="max-w-[1240px] w-full mx-auto h-[80vh] flex flex-col justify-between items-start pt-[100px]">
       <div className='flex justify-center items-center gap-2 '>
              <p className='text-[#444] text-[13px] font-[400] leading-[22px]'>TOP</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M9.47334 7.43305L5.97334 10.9331C5.73414 11.1723 5.34633 11.1723 5.10713 10.9331C4.86794 10.6939 4.86794 10.306 5.10713 10.0668L8.17403 6.99995L5.10713 3.93305C4.86794 3.69386 4.86794 3.30604 5.10713 3.06685C5.34633 2.82765 5.73414 2.82765 5.97334 3.06685L9.47334 6.56685C9.71253 6.80604 9.71253 7.19386 9.47334 7.43305Z" fill="#F15A29"/>
              </svg>
              <p className='text-[#444] text-[13px] font-[400] leading-[22px] opacity-[0.6]'>お問い合わせ</p>
                </div>
              <div className="pl-[40px]">

            <p>(     導入事例 )</p>
            <img src={caseStudyText} alt="" className='mt-[10px]' />
            <p className='pl-[276px] text-black text-[24px] font-[700] leading-[44px] tracking-[-0.48px] uppercase mt-[56px]'>長く愛される 新しい ストーリー</p>
         
          
          
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto relative z-10">
           <div className="mt-[85px] flex gap-12">
            <p className='text-[#1E2C44] text-[32px] font-[700] leading-[41px] tracking-[-0.64px] uppercase'>全て</p>
            <p  className='text-[#848484] text-[32px] font-[700] leading-[41px] tracking-[-0.64px] uppercase'>EOR </p>
            <p  className='text-[#848484] text-[32px] font-[700] leading-[41px] tracking-[-0.64px] uppercase'>UI/UXデザイン </p>
            <p  className='text-[#848484] text-[32px] font-[700] leading-[41px] tracking-[-0.64px] uppercase'>受託開発 </p>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-[125px]">
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