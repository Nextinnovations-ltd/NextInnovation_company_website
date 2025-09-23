import './Privacy.css';
import logo from '../../../public/images/Group 34121.svg'; // ⬅️ replace with actual logo path
import { motion } from 'framer-motion';
const Privacy = () => {
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
								rotate: `${Math.random() * 90 - 15}deg`, // random tilt (-15° to 15°)
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
						プライバシーポリシー
					</motion.h1>
					<motion.div initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="flex justify-center items-center mb-[45px] md:mb-[76px]">
						<svg
							className="mt-8"
							xmlns="http://www.w3.org/2000/svg"
							width="240"
							height="6"
							viewBox="0 0 240 6"
							fill="none"
						>
							<path
								d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM234.333 3C234.333 4.47276 235.527 5.66667 237 5.66667C238.473 5.66667 239.667 4.47276 239.667 3C239.667 1.52724 238.473 0.333333 237 0.333333C235.527 0.333333 234.333 1.52724 234.333 3ZM3 3V3.5H237V3V2.5H3V3Z"
								fill="black"
							/>
						</svg>
					</motion.div>

					<motion.p initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="max-w-[1073px] text-[#444] text-[14px] md:text-[20px] leading-[29px] md:leading-[38px] font-[500]">
						Next Innovations株式会社（以下「当社」といいます。）は、お客様の個人情報を適切に取り扱うことを社会的責務と認識し、以下の方針に基づき個人情報の保護に努めます。
					</motion.p>

					<motion.h1 initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px]  font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
						個人情報の取得について
					</motion.h1>
					<motion.p initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px]">
						当社は、サービスの提供に必要な範囲で、適法かつ公正な手段により個人情報を取得します。
					</motion.p>

					<motion.h1 initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
						利用目的について
					</motion.h1>
					<motion.p initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] mb-[8px] md:mb-[30px]">
						取得した個人情報は以下の目的で利用します。
					</motion.p>

					<div className="flex gap-[26px] md:gap-[11px] items-center mb-[8px] md:mb-[12px]">
						<div className="bg-[#096FCA] w-[10px] h-[10px] rounded-full"></div>
						<motion.p initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
							サービスの提供および運営
						</motion.p>
					</div>
					<div className="flex gap-[26px] md:gap-[11px] items-center mb-[8px] md:mb-[12px]">
						<div className="bg-[#096FCA] w-[10px] h-[10px] rounded-full"></div>
						<motion.p initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
							お問い合わせ対応
						</motion.p>
					</div>
					<div className="flex gap-[26px] md:gap-[11px] items-center mb-[8px] md:mb-[12px]">
						<div className="bg-[#096FCA] w-[10px] h-[10px] rounded-full"></div>
						<motion.p initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
							資料送付・情報提供
						</motion.p>
					</div>
					<div className="flex gap-[26px] md:gap-[11px] items-center mb-[8px] md:mb-[12px]">
						<div className="bg-[#096FCA] w-[10px] h-[10px] rounded-full"></div>
						<motion.p initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
							サービス改善・新サービスの開発
						</motion.p>
					</div>
					<div className="flex gap-[26px] md:gap-[11px] items-center">
						<div className="bg-[#096FCA] w-[10px] h-[10px] rounded-full"></div>
						<motion.p initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
							法令に基づく対応
						</motion.p>
					</div>

					<motion.h1 initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
						個人情報の管理について
					</motion.h1>
					<motion.p initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px]">
						当社は、個人情報を正確かつ最新の状態に保ち、不正アクセス・紛失・破壊・改ざん・漏洩を防止するため、適切な安全管理措置を講じます。
					</motion.p>

					<motion.h1 initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
						第三者提供について
					</motion.h1>
					<motion.p initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px]">
						当社は、法令に基づく場合を除き、本人の同意なく個人情報を第三者に提供しません。
					</motion.p>

					<motion.h1 initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
						委託先の管理について
					</motion.h1>
					<motion.p initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px]">
						業務委託先に個人情報を預託する場合、適切な管理が行われるよう契約等により義務付けます。
					</motion.p>

					<motion.h1 initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
						開示・訂正・利用停止について
					</motion.h1>
					<motion.p initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px]">
						本人からの求めに応じて、保有個人データの開示・訂正・利用停止等を速やかに対応します。
					</motion.p>

					<motion.h1 initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
						法令・規範の遵守と改善
					</motion.h1>
					<motion.p initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px]">
						当社は、個人情報に関する法令や規範を遵守するとともに、本方針を継続的に改善します。
					</motion.p>

					<motion.h1 initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
						法令・規範の遵守と改善
					</motion.h1>
					<motion.p initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[20px] text-[#096FCA] text-[20px] font-[500] leading-[38px]">
						Next Innovations株式会社 <br />
						メール：info@next-innovations.ltd
					</motion.p>
				</div>
			</div>
		</div>
	);
};

export default Privacy;

