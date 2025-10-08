import React from 'react'
import GoButton from '../../components/GoButton'
import Yutasan from '../../../public/images/yutasan1.png'
import './CeoMessage.css'
const CeoMessage = () => {
  return (
   <div className='w-full bg-white pb-[100px] md:pb-[160px] rounded-[40px] md:rounded-[80px] relative px-6'>
     <div className='max-w-[1120px] mx-auto '>
      <div className="hidden md:flex gap-2 items-center mt-[150px] mb-[46px] ">
        <p className='text-[#444] text-[13px] font-[400] leading-[22px] font-roboto'>TOP</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M9.47334 7.43318L5.97334 10.9332C5.73414 11.1724 5.34633 11.1724 5.10713 10.9332C4.86794 10.694 4.86794 10.3062 5.10713 10.067L8.17403 7.00007L5.10713 3.93318C4.86794 3.69398 4.86794 3.30617 5.10713 3.06697C5.34633 2.82777 5.73414 2.82777 5.97334 3.06697L9.47334 6.56697C9.71253 6.80617 9.71253 7.19398 9.47334 7.43318Z" fill="#F15A29"/>
        </svg>
        <p className='text-[#444] text-[13px] font-[400] leading-[22px] opacity-[0.6]'>代表メッセージ</p>
      </div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-[33px] md:gap-0 mt-[111px] md:mt-0 mb-[80px] md:mb-[180px]">
  <div className="">
    <h1 className='text-[#444] text-[32px] font-[700] leading-[50px] tracking-[-1.28px]'>代表メッセージ</h1>
    <p className='text-[#444] text-[12px] md:text-[14px] font-[400] leading-[22px] md:leading-[31px]'>CEO 向井 優太からのご挨拶です。<br/>
    創業の背景やビジョン、事業内容、そして私たちのスタンスについてお話しいたします。</p>
  </div>
    <GoButton name="無料相談する" />
</div>
<div className="flex flex-col-reverse md:flex-row items-center justify-between gap-[50px] md:gap-0">
<div className="">
  <h1 className='text-[#444] text-[16px] md:text-[28px] font-[700] leading-[-0.32px] md:leading-[-0.56px] max-w-[480px]'>
    お客様に忘れられないブランド体験と
    高価値なウェブサイトを提供します
  </h1>
  <div className="flex flex-col gap-3 md:gap-5 max-w-[558px] mt-[24px] md:mt-[50px]">
    <p className='text-[#444] text-[12px] md:text-[14px] font-[400] leading-[22px] md:leading-[31px]'>
      CEOとして、私はここに誇りを持って立っています。
    </p>
    <p className='text-[#444] text-[12px] md:text-[14px] font-[400] leading-[22px] md:leading-[31px] max-w-[448px]'>
      私たちの献身的なプロフェッショナルチームが卓越した成果を提供する
      ことに全力を尽くしていることを確信しているからです。
    </p>
    <p className='text-[#444] text-[12px] md:text-[14px] font-[400] leading-[22px] md:leading-[31px]  max-w-[480px]'>
      絶えず進化するデジタル環境を深く理解し、貴社のブランドを新たな高み
      へと導く革新的な戦略を構築します。創造性への情熱、データに基づく洞察、
      最先端技術への追求が、私たちの卓越性へのたゆまぬ探求を支えています。
    </p>
    <p className='text-[#444] text-[12px] md:text-[14px] font-[400] leading-[22px] md:leading-[31px]'>
      共に変革の旅に出ましょう。貴社のブランド存在感を高め、顧客との有意義な繋がりを創出します。デジタルマーケティングの未来を再定義する私たちの取り組みに、ぜひご参加ください。
    </p>
  </div>
</div>
<img src={Yutasan} alt="" className='w-[100%] md:w-[420px] h-[500px] rounded-[16px] object-cover object-top'/>
</div>


      <div className="mt-[118px] md:mt-[177px]" >
                 <p className='flex  items-center gap-2 text-[#575757] text-[12px] md:text-[16px] font-[500] leading-[22px] md:leading-[31px]'>(<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <circle cx="4" cy="4" r="4" fill="#096FCA"/>
                </svg>管理プロジェクト )</p>
       </div>
       <h1 className='text-[#444] text-[32px] font-[700] leading-[50px] md:leading-[40px] tracking-[-0.32px] uppercase mt-2 md:mt-[10px]'>Managed projects</h1>
   <div className="mt-[86px] md:mt-[65px]">
<div className="border-solid border-b border-b-[#CDCDCD] flex gap-[33px] md:gap-[269px] pb-6">
  <p className='w-[171px] md:w-auto text-[#575757] font-roboto text-[14px] md:text-[18px] font-[600] leading-[32px] tracking-[0.14px] md:tracking-[0.18px] uppercase'>
    Z.com Myanmar
  </p>
  <p className='w-[171px] md:w-auto text-[#575757] font-roboto text-[14px] md:text-[18px] font-[400] leading-[32px] md:leading-[30px] '>Sales website</p>
</div>
<div className="border-solid border-b border-b-[#CDCDCD] flex gap-[33px] md:gap-[229px] py-6">
  <p className='w-[171px] md:w-auto text-[#575757] font-roboto text-[14px] md:text-[18px] font-[600] leading-[32px] tracking-[0.14px] md:tracking-[0.18px] uppercase'>
    Yadanapon Airlines
  </p>
  <p className='w-[171px] md:w-auto text-[#575757] font-roboto text-[14px] md:text-[18px] font-[400] leading-[32px] md:leading-[30px] '>Website/booking system</p>
</div>
<div className="border-solid border-b border-b-[#CDCDCD] flex gap-[33px] md:gap-[293px] py-6">
  <p className='w-[171px] md:w-auto text-[#575757] font-roboto text-[14px] md:text-[18px] font-[600] leading-[32px] tracking-[0.14px] md:tracking-[0.18px] uppercase'>
    JTB Myanmar
  </p>
  <p className='w-[171px] md:w-auto text-[#575757] font-roboto text-[14px] md:text-[18px] font-[400] leading-[32px] md:leading-[30px] '>JTB Myanmar website</p>
</div>
<div className="border-solid border-b border-b-[#CDCDCD] flex gap-[33px] md:gap-[334px] py-6">
  <p className='w-[171px] md:w-auto text-[#575757] font-roboto text-[14px] md:text-[18px] font-[600] leading-[32px] tracking-[0.14px] md:tracking-[0.18px] uppercase'>
    Samsung
  </p>
  <p className='w-[171px] md:w-auto text-[#575757] font-roboto text-[14px] md:text-[18px] font-[400] leading-[32px] md:leading-[30px] '>Smartphone sales EC site/order inventory management system </p>
</div>
<div className="border-solid border-b border-b-[#CDCDCD] flex gap-[33px] md:gap-[114px] py-6">
  <p className='w-[171px] md:w-auto text-[#575757] font-roboto text-[14px] md:text-[18px] font-[600] leading-[32px] tracking-[0.14px] md:tracking-[0.18px] uppercase'>
    Myanmar government agencies
  </p>
  <p className='w-[171px] md:w-auto text-[#575757] font-roboto text-[14px] md:text-[18px] font-[400] leading-[32px] md:leading-[30px] '>Official websites</p>
</div>
<div className="border-solid border-b border-b-[#CDCDCD] flex gap-[33px] md:gap-[117px] py-6">
  <p className='w-[171px] md:w-auto text-[#575757] font-roboto text-[14px] md:text-[18px] font-[600] leading-[32px] tracking-[0.14px] md:tracking-[0.18px] uppercase'>
    Myanmar Stock Exchange (YSX)
  </p>
  <p className='w-[171px] md:w-auto text-[#575757] font-roboto text-[14px] md:text-[18px] font-[400] leading-[32px] md:leading-[30px] '>YSX Website</p>
</div>
<div className="border-solid border-b border-b-[#CDCDCD] flex gap-[33px] md:gap-[201px] py-6">
  <p className='w-[171px] md:w-auto text-[#575757] font-roboto text-[14px] md:text-[18px] font-[600] leading-[32px] tracking-[0.14px] md:tracking-[0.18px] uppercase'>
    Japanese educational <br/>
    materials company
  </p>
  <p className='w-[171px] md:w-auto text-[#575757] font-roboto text-[14px] md:text-[18px] font-[400] leading-[32px] md:leading-[30px] '>Online learning Web application</p>
</div>
<div className="border-solid border-b border-b-[#CDCDCD] flex gap-[33px] md:gap-[202px] py-6">
  <p className='w-[171px] md:w-auto text-[#575757] font-roboto text-[14px] md:text-[18px] font-[600] leading-[32px] tracking-[0.14px] md:tracking-[0.18px] uppercase'>
    Japanese SEO company
  </p>
  <p className='w-[171px] md:w-auto text-[#575757] font-roboto text-[14px] md:text-[18px] font-[400] leading-[32px] md:leading-[30px] '>Production of WordPress templates for SEO</p>
</div>
<div className=" flex gap-[33px] md:gap-[230px] pt-6">
  <p className='w-[171px] md:w-auto text-[#575757] font-roboto text-[14px] md:text-[18px] font-[600] leading-[32px] tracking-[0.14px] md:tracking-[0.18px] uppercase'>
    Overseas travel <br/>
    insurance company
  </p>
  <p className='w-[171px] md:w-auto text-[#575757] font-roboto text-[14px] md:text-[18px] font-[400] leading-[32px] md:leading-[30px] '>Business system development</p>
</div>
   </div>
   
    </div>

   </div>
  )
}

export default CeoMessage