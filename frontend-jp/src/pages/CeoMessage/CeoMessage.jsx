import GoButton from '../../components/GoButton'
import Yutasan from '/images/yutasan1.png'
import './CeoMessage.css'
import { motion } from 'framer-motion'
import BreadCrumb from "../../components/Breadcrumb"
import useHeroRotate from "../../hooks/useHeroRotate"
import SectionTitle from "../../components/SectionTitle"

const fadeUp = {
	hidden: { opacity: 0, y: 40 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
}

const CeoMessage = () => {
	useHeroRotate();
	return (
		<div className='w-full bg-white pb-[100px] md:pb-[160px] rounded-[40px] md:rounded-[80px] relative px-6'>
			<div className='max-w-[1071px] mx-auto pt-[100px] lg:pt-[150px]'>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={fadeUp}
				>
					<BreadCrumb current="代表メッセージ" />
				</motion.div>

				<motion.div
					className="flex flex-col md:flex-row justify-between items-start md:items-end gap-[33px] lg:gap-0 mt-[46px] mb-[80px] lg:mb-[180px]"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={fadeUp}
				>
					<div className="">
						<motion.h1 variants={fadeUp} className='text-[#444] text-[32px] font-[700] leading-[50px] tracking-[-1.28px]'>代表メッセージ</motion.h1>
						<motion.p variants={fadeUp} className='text-[#444] text-[12px] md:text-[14px] font-[400] leading-[22px] md:leading-[31px] md:w-[400px] lg:w-auto'>
							代表の向井 悠太からのご挨拶です。<br />
							創業の背景やビジョン、事業内容、そして私たちのスタンスについてお話しいたします。
						</motion.p>
					</div>
					<GoButton name="無料相談する" link='/contact' />
				</motion.div>

				<motion.div
					className="flex flex-col-reverse md:flex-row items-start justify-between gap-[50px]"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={fadeUp}
				>
					<div>
						<motion.h1 variants={fadeUp} className='text-[#444] text-[16px] md:text-[20px] lg:text-[28px] font-[700] leading-[-0.32px] md:leading-[-0.56px] max-w-[480px]'>
							お客様に忘れられないブランド体験と
							高価値なウェブサイトを提供します
						</motion.h1>
						<div className="flex flex-col gap-3 md:gap-5 max-w-[558px] mt-[24px] lg:mt-[50px]">
							<motion.p variants={fadeUp} className='text-[#444] text-[12px] lg:text-[14px] font-[400] leading-[22px] lg:leading-[31px]'>
								代表として、私はここに誇りを持って立っています。
							</motion.p>
							<motion.p variants={fadeUp} className='text-[#444] text-[12px] lg:text-[14px] font-[400] leading-[22px] lg:leading-[31px] max-w-[448px]'>
								私たちの献身的なプロフェッショナルチームが卓越した成果を提供する
								ことに全力を尽くしていることを確信しているからです。
							</motion.p>
							<motion.p variants={fadeUp} className='text-[#444] text-[12px] lg:text-[14px] font-[400] leading-[22px] lg:leading-[31px]  max-w-[480px]'>
								絶えず進化するデジタル環境を深く理解し、貴社のブランドを新たな高み
								へと導く革新的な戦略を構築します。創造性への情熱、データに基づく洞察、
								最先端技術への追求が、私たちの卓越性へのたゆまぬ探求を支えています。
							</motion.p>
							<motion.p variants={fadeUp} className='text-[#444] text-[12px] lg:text-[14px] font-[400] leading-[22px] lg:leading-[31px]'>
								共に変革の旅に出ましょう。貴社のブランド存在感を高め、顧客との有意義な繋がりを創出します。デジタルマーケティングの未来を再定義する私たちの取り組みに、ぜひご参加ください。
							</motion.p>
						</div>
					</div>
					<motion.img
						src={Yutasan}
						alt=""
						className='w-[100%] md:w-[300px] lg:w-[420px] rounded-[16px] object-cover object-top'
						variants={fadeUp}
					/>
				</motion.div>

				<motion.div
					className="mt-[90px] lg:mt-[177px]"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={fadeUp}
				>
					<SectionTitle jp="管理プロジェクト" eng="Managed projects" />
				</motion.div>

				<motion.div
					className="mt-[86px] md:mt-[65px]"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={fadeUp}
				>
					<motion.div initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeUp} className="border-solid border-b border-b-[#CDCDCD] flex gap-[33px] md:gap-[114px] pb-6">
						<p className='w-[171px] md:min-w-[308px] text-[#575757] font-roboto text-[14px] md:text-[18px] font-[600] leading-[32px] tracking-[0.14px] md:tracking-[0.18px] uppercase'>
							Z.com Myanmar
						</p>
						<p className='w-[171px] md:w-auto text-[#575757] font-roboto text-[14px] md:text-[18px] font-[400] leading-[32px] md:leading-[30px] '>Sales website</p>
					</motion.div>
					<motion.div initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeUp} className="border-solid border-b border-b-[#CDCDCD] flex gap-[33px] md:gap-[114px] py-6">
						<p className='w-[171px] md:min-w-[308px] text-[#575757] font-roboto text-[14px] md:text-[18px] font-[600] leading-[32px] tracking-[0.14px] md:tracking-[0.18px] uppercase'>
							Yadanapon Airlines
						</p>
						<p className='w-[171px] md:w-auto text-[#575757] font-roboto text-[14px] md:text-[18px] font-[400] leading-[32px] md:leading-[30px] '>Website/booking system</p>
					</motion.div>
					<motion.div initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeUp} className="border-solid border-b border-b-[#CDCDCD] flex gap-[33px] md:gap-[114px] py-6">
						<p className='w-[171px] md:min-w-[308px] text-[#575757] font-roboto text-[14px] md:text-[18px] font-[600] leading-[32px] tracking-[0.14px] md:tracking-[0.18px] uppercase'>
							JTB Myanmar
						</p>
						<p className='w-[171px] md:w-auto text-[#575757] font-roboto text-[14px] md:text-[18px] font-[400] leading-[32px] md:leading-[30px] '>JTB Myanmar website</p>
					</motion.div>
					<motion.div initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeUp} className="border-solid border-b border-b-[#CDCDCD] flex gap-[33px] md:gap-[114px] py-6">
						<p className='w-[171px] md:min-w-[308px] text-[#575757] font-roboto text-[14px] md:text-[18px] font-[600] leading-[32px] tracking-[0.14px] md:tracking-[0.18px] uppercase'>
							Samsung
						</p>
						<p className='w-[171px] md:w-auto text-[#575757] font-roboto text-[14px] md:text-[18px] font-[400] leading-[32px] md:leading-[30px] '>Smartphone sales EC site/order inventory management system </p>
					</motion.div>
					<motion.div initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeUp} className="border-solid border-b border-b-[#CDCDCD] flex gap-[33px] md:gap-[114px] py-6">
						<p className='w-[171px] md:min-w-[308px] text-[#575757] font-roboto text-[14px] md:text-[18px] font-[600] leading-[32px] tracking-[0.14px] md:tracking-[0.18px] uppercase'>
							Myanmar government agencies
						</p>
						<p className='w-[171px] md:w-auto text-[#575757] font-roboto text-[14px] md:text-[18px] font-[400] leading-[32px] md:leading-[30px] '>Official websites</p>
					</motion.div>
					<motion.div initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeUp} className="border-solid border-b border-b-[#CDCDCD] flex gap-[33px] md:gap-[114px] py-6">
						<p className='w-[171px] md:min-w-[308px] text-[#575757] font-roboto text-[14px] md:text-[18px] font-[600] leading-[32px] tracking-[0.14px] md:tracking-[0.18px] uppercase'>
							Myanmar Stock Exchange (YSX)
						</p>
						<p className='w-[171px] md:w-auto text-[#575757] font-roboto text-[14px] md:text-[18px] font-[400] leading-[32px] md:leading-[30px] '>YSX Website</p>
					</motion.div>
					<motion.div initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeUp} className="border-solid border-b border-b-[#CDCDCD] flex gap-[33px] md:gap-[114px] py-6">
						<p className='w-[171px] md:min-w-[308px] text-[#575757] font-roboto text-[14px] md:text-[18px] font-[600] leading-[32px] tracking-[0.14px] md:tracking-[0.18px] uppercase'>
							Japanese educational <br />
							materials company
						</p>
						<p className='w-[171px] md:w-auto text-[#575757] font-roboto text-[14px] md:text-[18px] font-[400] leading-[32px] md:leading-[30px] '>Online learning Web application</p>
					</motion.div>
					<motion.div initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeUp} className="border-solid border-b border-b-[#CDCDCD] flex gap-[33px] md:gap-[114px] py-6">
						<p className='w-[171px] md:min-w-[308px] text-[#575757] font-roboto text-[14px] md:text-[18px] font-[600] leading-[32px] tracking-[0.14px] md:tracking-[0.18px] uppercase'>
							Japanese SEO company
						</p>
						<p className='w-[171px] md:w-auto text-[#575757] font-roboto text-[14px] md:text-[18px] font-[400] leading-[32px] md:leading-[30px] '>Production of WordPress templates for SEO</p>
					</motion.div>
					<motion.div initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeUp} className=" flex gap-[33px] md:gap-[114px] pt-6">
						<p className='w-[171px] md:min-w-[308px] text-[#575757] font-roboto text-[14px] md:text-[18px] font-[600] leading-[32px] tracking-[0.14px] md:tracking-[0.18px] uppercase'>
							Overseas travel <br />
							insurance company
						</p>
						<p className='w-[171px] md:w-auto text-[#575757] font-roboto text-[14px] md:text-[18px] font-[400] leading-[32px] md:leading-[30px] '>Business system development</p>
					</motion.div>
				</motion.div>

			</div>
		</div>
	)
}

export default CeoMessage
