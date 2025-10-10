import React from 'react'
import rotateImg from '../../../public/images/Group 34121.svg'
import TextImg from '../../../public/images/svg/Profile.svg'
const CompanyProfile = () => {
  return (
    <div className='bg-white overflow-hidden z-[100] relative rounded-[40px] md:rounded-[80px]'>
           <div className='' >
                <div className="h-[100vh] absolute top-[-10%] md:top-[0%] right-[-10%]" style={{backgroundImage: `url(${rotateImg})`, backgroundSize: 'contain', backgroundPosition: 'right', width: '100%',backgroundRepeat: 'no-repeat',rotate:'15deg'}} ></div>
 
  <div className="pt-[30vh] md:pt-[50vh] max-w-[1071px] mx-auto relative z-[100] px-6 md:px-0">
           <div className="" >
                       <p className='flex  items-center gap-2 text-[#575757] text-[16px] font-[500] leading-[31px]'>(<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="#096FCA"/>
                      </svg>会社概要 )</p>
             </div>
<img src={TextImg} alt="" className='mt-[30px] md:mt-[40px]'/>
          <p className='text-black text-[12px] md:text-[15px] font-[400] leading-[22px] md:leading-[24px] max-w-[463px] mt-[27px] md:mt-[43px] ml-[80px]'>
              Next Innovationsは、未来志向のデザインとテクノロジーを軸に、  企業のデジタル変革を支援するクリエイティブパートナーです。  UI/UXデザイン、システム開発、ブランド戦略を通じて、  より良い体験と価値を生み出しています。
          </p>
          <div className="border-solid border-b border-b-[#D0D8E6] flex gap-[48px] md:gap-[65px] itmes-center max-w-[1071px] mt-[96px] md:mt-[157px] pb-6 md:pb-12">
              <p className='text-[#444] text-[14px] md:text-[16px] font-[500] leading-[29px] md:leading-[31px]'>
                  会社名
              </p>
              <p className='text-[#000] text-[14px] md:text-[16px] font-[500] leading-[29px] md:leading-[31px]'> Next Innovations株式会社</p>
          </div>
          <div className="border-solid border-b border-b-[#D0D8E6] flex gap-[20px] md:gap-[33px] itmes-center max-w-[1071px] pt-6 md:pt-12 pb-6 md:pb-12">
              <p className='text-[#444] text-[14px] md:text-[16px] font-[500] leading-[29px] md:leading-[31px]'>
                設立年月日
              </p>
              <p className='text-[#000] text-[14px] md:text-[16px] font-[500] leading-[29px] md:leading-[31px]'>  2020年5月5日</p>
          </div>
          <div className="border-solid border-b border-b-[#D0D8E6] flex gap-[20px] md:gap-[33px] itmes-center max-w-[1071px] pt-6 md:pt-12 pb-6 md:pb-12">
              <p className='text-[#444] text-[14px] md:text-[16px] font-[500] leading-[29px] md:leading-[31px]'>
                代表取締役
              </p>
              <p className='text-[#000] text-[14px] md:text-[16px] font-[500] leading-[29px] md:leading-[31px]'> 向井　悠太</p>
          </div>
          
          <div className=" max-w-[1071px] pt-12  pb-12 border-solid border-b border-b-[#D0D8E6] ">
             <div className="flex gap-[45px] md:gap-[65px] itmes-center">
                 <p className='text-[#444] text-nowrap text-[14px] md:text-[16px] font-[500] leading-[29px] md:leading-[31px]'>
                    所在地
                  </p>
                   <div className="flex flex-col gap-4">
                     <p className='text-[#000] text-[14px] md:text-[16px] font-[500] leading-[29px] md:leading-[31px] max-w-[779px]'> 部屋番号 (602)、ガンダマール レジデンス、ガンダマール ロード、マヤンゴン タウンシップ、ヤンゴン、ミャンマー</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.2992396049367!2d96.158037!3d16.861085499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1933ef77e5147%3A0x2a6d94f48d039f50!2sNext%20Innovations%20co.%2C%20Ltd!5e0!3m2!1sen!2smm!4v1758691698063!5m2!1sen!2smm" width="100%" height="519"  style={{ border: 0 }} className='max-w-[923px] self-end h-[140px] md:h-[519px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                   </div>
         
             </div>
        
          </div>
               <div className="border-solid border-b border-b-[#D0D8E6] flex gap-[24px] md:gap-[50px] itmes-center max-w-[1071px] pt-6 md:pt-12 pb-6 md:pb-12 mb-[113px] md:mb-[400px]">
                  <p className='text-nowrap text-[#444] text-[14px] md:text-[16px] font-[500] leading-[29px] md:leading-[31px]'>
                    事業内容
                  </p>
                  <p className='text-[#000] text-[14px] md:text-[16px] font-[500] leading-[29px] md:leading-[31px] max-w-[891px]'>私たちNext Innovationsは、ミャンマーに拠点を置く日本企業であり、IT分野に特化しています。  プロフェッショナルなチームと多くのお客様に支えられ、高品質で革新的なウェブデザイン、ウェブマーケティング、映像制作サービスを提供しています。  当社は2020年に向井優太氏の出資により設立され、これまでに国内外および日本で2,000以上のブランドに携わってまいりました。  IT分野でNo.1の企業となり、一人ひとりのお客様にご満足いただけることを目指しています。</p>
              </div>

{/* <div className="flex justify-between pt-[88px] pb-[460px]">
    <div className="">
        <div className="flex gap-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="27" viewBox="0 0 45 27" fill="none">
              <path d="M44.1172 13.3926C44.1172 20.7892 38.1211 26.7852 30.7246 26.7852C23.328 26.7852 17.3319 20.7892 17.3319 13.3926C17.3319 5.99608 23.328 0 30.7246 0C38.1211 0 44.1172 5.99608 44.1172 13.3926Z" fill="#096FCA"/>
              <path d="M16.9971 13.3926C16.9971 17.4422 18.7508 21.0821 21.54 23.5947C19.3065 25.3808 16.4749 26.4502 13.3926 26.4502C6.18097 26.4502 0.334961 20.6042 0.334961 13.3926C0.334986 6.18099 6.18099 0.334986 13.3926 0.334961C16.4746 0.334961 19.3065 1.40363 21.54 3.18945C18.7505 5.70208 16.9971 9.34272 16.9971 13.3926ZM17.667 13.3926C17.667 9.50693 19.3651 6.01892 22.0586 3.62695C24.7521 6.01892 26.4502 9.50693 26.4502 13.3926C26.4502 17.278 24.7518 20.7653 22.0586 23.1572C19.3654 20.7653 17.667 17.278 17.667 13.3926ZM27.1201 13.3926C27.1201 9.34245 25.366 5.70209 22.5762 3.18945C24.8098 1.40334 27.6423 0.334961 30.7246 0.334961C37.9362 0.334986 43.7822 6.18099 43.7822 13.3926C43.7822 20.6042 37.9362 26.4502 30.7246 26.4502C27.642 26.4502 24.8098 25.3811 22.5762 23.5947C25.3657 21.0821 27.1201 17.4425 27.1201 13.3926Z" stroke="#096FCA" stroke-width="0.669631"/>
            </svg>
            <p className='text-[#121212] text-[16px] font-[500] leading-[31px]'>ビジョン</p>
        </div>
        <p className='mt-[50px]'>
            「ウェブの力で人々の生活をより便利に、そして豊かにする。」
        </p>
    </div>
    <div className="max-w-[500px]">
        <div className="flex gap-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="27" viewBox="0 0 45 27" fill="none">
              <path d="M44.1172 13.3926C44.1172 20.7892 38.1211 26.7852 30.7246 26.7852C23.328 26.7852 17.3319 20.7892 17.3319 13.3926C17.3319 5.99608 23.328 0 30.7246 0C38.1211 0 44.1172 5.99608 44.1172 13.3926Z" fill="#096FCA"/>
              <path d="M16.9971 13.3926C16.9971 17.4422 18.7508 21.0821 21.54 23.5947C19.3065 25.3808 16.4749 26.4502 13.3926 26.4502C6.18097 26.4502 0.334961 20.6042 0.334961 13.3926C0.334986 6.18099 6.18099 0.334986 13.3926 0.334961C16.4746 0.334961 19.3065 1.40363 21.54 3.18945C18.7505 5.70208 16.9971 9.34272 16.9971 13.3926ZM17.667 13.3926C17.667 9.50693 19.3651 6.01892 22.0586 3.62695C24.7521 6.01892 26.4502 9.50693 26.4502 13.3926C26.4502 17.278 24.7518 20.7653 22.0586 23.1572C19.3654 20.7653 17.667 17.278 17.667 13.3926ZM27.1201 13.3926C27.1201 9.34245 25.366 5.70209 22.5762 3.18945C24.8098 1.40334 27.6423 0.334961 30.7246 0.334961C37.9362 0.334986 43.7822 6.18099 43.7822 13.3926C43.7822 20.6042 37.9362 26.4502 30.7246 26.4502C27.642 26.4502 24.8098 25.3811 22.5762 23.5947C25.3657 21.0821 27.1201 17.4425 27.1201 13.3926Z" stroke="#096FCA" stroke-width="0.669631"/>
            </svg>
            <p className='text-[#121212] text-[16px] font-[500] leading-[31px]'>ミッション</p>
        </div>
        <p className='mt-[50px]'>
            私たちは常に革新を追求し、魅力的なデザインと確かな技術で  お客様のビジネス成功を創造する企業であり続けます。
        </p>
    </div>
</div> */}


         </div>
            </div>
    </div>
  )
}

export default CompanyProfile