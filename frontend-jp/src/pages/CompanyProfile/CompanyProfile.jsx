import React from 'react'
import rotateImg from '../../../public/images/Group 34121.svg'
import TextImg from '../../../public/images/svg/Profile.svg'
import { motion } from 'framer-motion'
import Breadcrumb from '../../components/Breadcrumb'

// Fade-up animation variant
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
}

const CompanyProfile = () => {
  return (
    <div className='bg-white overflow-hidden z-[100] relative rounded-[40px] md:rounded-[80px] px-6'>
      <div>
        <div
          className="h-[100vh] absolute top-[-10%] md:top-[0%] right-[-10%]"
          style={{
            backgroundImage: `url(${rotateImg})`,
            backgroundSize: 'contain',
            backgroundPosition: 'right',
            width: '100%',
            backgroundRepeat: 'no-repeat',
            rotate: '15deg'
          }}
        ></div>

        {/* Breadcrumb fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className='mt-[15vh] opacity-0 md:opacity-1 flex max-w-[1071px] mx-auto items-center gap-2'
        >
          <Breadcrumb current="会社概要" />
        </motion.div>

        <div className="pt-[30vh] md:pt-[30vh] max-w-[1071px] mx-auto relative z-[100] px-6 md:px-0">

          {/* Section title */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className='flex items-center gap-2 text-[#575757] text-[16px] font-[500] leading-[31px]'>
              (<svg className='animate-fade' xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                <circle cx="4" cy="4" r="4" fill="#096FCA" />
              </svg>会社概要 )
            </p>
          </motion.div>

          {/* Image */}
          <motion.img
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            src={TextImg}
            alt=""
            className='mt-[30px] md:mt-[40px]'
          />

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className='text-black text-[12px] md:text-[15px] font-[400] leading-[22px] md:leading-[24px] max-w-[463px] mt-[27px] md:mt-[43px] ml-[80px]'
          >
            Next Innovationsは、未来志向のデザインとテクノロジーを軸に、 企業のデジタル変革を支援するクリエイティブパートナーです。 
            UI/UXデザイン、システム開発、ブランド戦略を通じて、 より良い体験と価値を生み出しています。
          </motion.p>

          {/* Company info sections */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="border-solid border-b border-b-[#D0D8E6] flex gap-[48px] md:gap-[65px] itmes-center max-w-[1071px] mt-[96px] md:mt-[157px] pb-6 md:pb-12">
            <p className='text-[#444] text-[14px] md:text-[16px] font-[500] leading-[29px] md:leading-[31px]'>会社名</p>
            <p className='text-[#000] text-[14px] md:text-[16px] font-[500] leading-[29px] md:leading-[31px]'>Next Innovations株式会社</p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="border-solid border-b border-b-[#D0D8E6] flex gap-[20px] md:gap-[33px] itmes-center max-w-[1071px] pt-6 md:pt-12 pb-6 md:pb-12">
            <p className='text-[#444] text-[14px] md:text-[16px] font-[500] leading-[29px] md:leading-[31px]'>設立年月日</p>
            <p className='text-[#000] text-[14px] md:text-[16px] font-[500] leading-[29px] md:leading-[31px]'>2020年5月5日</p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="border-solid border-b border-b-[#D0D8E6] flex gap-[20px] md:gap-[33px] itmes-center max-w-[1071px] pt-6 md:pt-12 pb-6 md:pb-12">
            <p className='text-[#444] text-[14px] md:text-[16px] font-[500] leading-[29px] md:leading-[31px]'>代表取締役</p>
            <p className='text-[#000] text-[14px] md:text-[16px] font-[500] leading-[29px] md:leading-[31px]'>向井　悠太</p>
          </motion.div>

          {/* Address */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[1071px] pt-12 pb-12 border-solid border-b border-b-[#D0D8E6]">
            <div className="flex gap-[45px] md:gap-[65px] itmes-center">
              <p className='text-[#444] text-nowrap text-[14px] md:text-[16px] font-[500] leading-[29px] md:leading-[31px]'>所在地</p>
              <div className="flex flex-col gap-4">
                <p className='text-[#000] text-[14px] md:text-[16px] font-[500] leading-[29px] md:leading-[31px] max-w-[779px]'>
                  部屋番号 (602)、ガンダマール レジデンス、ガンダマール ロード、マヤンゴン タウンシップ、ヤンゴン、ミャンマー
                </p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.2992396049367!2d96.158037!3d16.861085499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1933ef77e5147%3A0x2a6d94f48d039f50!2sNext%20Innovations%20co.%2C%20Ltd!5e0!3m2!1sen!2smm!4v1758691698063!5m2!1sen!2smm"
                  width="100%"
                  height="519"
                  style={{ border: 0 }}
                  className='max-w-[923px] self-end h-[140px] md:h-[519px]'
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Business description */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="border-solid border-b border-b-[#D0D8E6] flex gap-[24px] md:gap-[50px] itmes-center max-w-[1071px] pt-6 md:pt-12 pb-6 md:pb-12 mb-[113px] md:mb-[400px]">
            <p className='text-nowrap text-[#444] text-[14px] md:text-[16px] font-[500] leading-[29px] md:leading-[31px]'>事業内容</p>
            <p className='text-[#000] text-[14px] md:text-[16px] font-[500] leading-[29px] md:leading-[31px] max-w-[891px]'>
              私たちNext Innovationsは、ミャンマーに拠点を置く日本企業であり、IT分野に特化しています。 
              プロフェッショナルなチームと多くのお客様に支えられ、高品質で革新的なウェブデザイン、ウェブマーケティング、映像制作サービスを提供しています。 
              当社は2020年に向井優太氏の出資により設立され、これまでに国内外および日本で2,000以上のブランドに携わってまいりました。 
              IT分野でNo.1の企業となり、一人ひとりのお客様にご満足いただけることを目指しています。
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default CompanyProfile
