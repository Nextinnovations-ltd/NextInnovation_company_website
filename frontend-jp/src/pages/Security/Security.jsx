import '../Privacy/Privacy.css';
import logo from '../../../public/images/Group 34126.svg'; // ⬅️ replace with actual logo path
import { motion } from 'framer-motion';
const Security = () => {
	return (
		<div className='bg-[#1E2C44]'>
			<div className="relative w-full bg-white rounded-b-[40px] lg:rounded-b-[80px] overflow-hidden">

				{/* Floating logos background */}
				<div className="absolute inset-0 ">
					{[...Array(10)].map((_, i) => (
						<img
							key={i}
							src={logo}
							alt="Floating Logo"
							className="floating-logo absolute opacity-20"
							style={{
								width: `${Math.random() * 400 + 380}px`, // random size
								left: `${Math.random() * 100}%`, // random horizontal position
								animationDuration: `${Math.random() * 8 + 10}s`, // random speed
								rotate: `${Math.random() * 30 - 15}deg`, // random tilt (-15° to 15°)
							}}
						/>
					))}
				</div>

				{/* Content */}
				<div className="max-w-[1366px] mx-auto px-[24px] md:px-[145px] pt-[108px] md:pt-[114px] pb-[180px] relative z-10">
					<motion.h1 initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="text-black text-[32px] md:text-[58px] font-[700] leading-[50px] md:leading-[67px] tracking-[-0.58px] uppercase text-center">
						セキュリティポリシー
					</motion.h1>
					<motion.div initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="flex justify-center items-center mb-[45px] md:mb-[76px]">
						<svg className='mt-8' xmlns="http://www.w3.org/2000/svg" width="348" height="6" viewBox="0 0 348 6" fill="none">
							<path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM342.333 3.00003C342.333 4.47279 343.527 5.6667 345 5.6667C346.473 5.6667 347.667 4.47279 347.667 3.00003C347.667 1.52727 346.473 0.333363 345 0.333363C343.527 0.333363 342.333 1.52727 342.333 3.00003ZM3 3L3 3.5L345 3.50003L345 3.00003L345 2.50003L3 2.5L3 3Z" fill="black" />
						</svg>
					</motion.div>

					<motion.p initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="max-w-[1073px] text-[#000] text-[14px] md:text-[20px] leading-[29px] md:leading-[38px] font-[500]">
						当社は、お客様の情報資産を適切に保護するため、以下のセキュリティポリシーを定め、情報セキュリティの維持・向上に努めます。

					</motion.p>

					<motion.h1 initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px]  font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
						情報資産の保護
					</motion.h1>
					<motion.p initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px]">
						当社が取り扱う全ての情報資産について、機密性・完全性・可用性を確保します。
					</motion.p>

					<motion.h1 initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
						アクセス制御
					</motion.h1>
					<motion.p initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] mb-[8px] md:mb-[30px]">
						システムやデータへのアクセスは、権限を付与された者に限定し、不正利用を防止します。
					</motion.p>
					<motion.h1 initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
						ネットワークセキュリティ
					</motion.h1>
					<motion.p initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] mb-[8px] md:mb-[30px]">
						VPNや暗号化通信（SSL/TLS）を利用し、データの安全な送受信を行います。
					</motion.p>
					<motion.h1 initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
						物理的セキュリティ
					</motion.h1>
					<motion.p initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] mb-[8px] md:mb-[30px]">
						オフィスは入退室管理システムを導入し、監視カメラを設置しています。また、ミャンマーオフィスでは停電対策として発電機を完備しています
					</motion.p>
					<motion.h1 initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
						教育・啓発
					</motion.h1>
					<motion.p initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] mb-[8px] md:mb-[30px]">
						従業員に対し定期的にセキュリティ教育を行い、情報管理意識を徹底します。
					</motion.p>
					<motion.h1 initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
						事故対応
					</motion.h1>
					<motion.p initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] mb-[8px] md:mb-[30px]">
						万一セキュリティ事故が発生した場合は、迅速に調査・是正措置を実施し、再発防止に努めます。
					</motion.p>
					<motion.h1 initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
						継続的改善
					</motion.h1>
					<motion.p initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] mb-[8px] md:mb-[30px]">
						セキュリティ体制を定期的に見直し、継続的に改善します。
					</motion.p>
				</div>
			</div>
		</div>
	)
}

export default Security