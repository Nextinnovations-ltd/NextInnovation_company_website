import '../Privacy/Privacy.css';
import logo from '../../../public/images/Group 34121.svg'; // ⬅️ replace with actual logo path
import { motion } from 'framer-motion';
const Terms = () => {
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
						利用規約
					</motion.h1>
					<motion.div initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="flex justify-center items-center mb-[45px] md:mb-[76px]">
						<svg className='mt-8' xmlns="http://www.w3.org/2000/svg" width="146" height="6" viewBox="0 0 146 6" fill="none">
							<path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM140.333 3.00001C140.333 4.47277 141.527 5.66668 143 5.66668C144.473 5.66668 145.667 4.47277 145.667 3.00001C145.667 1.52725 144.473 0.333346 143 0.333345C141.527 0.333345 140.333 1.52725 140.333 3.00001ZM3 3L3 3.5L143 3.50001L143 3.00001L143 2.50001L3 2.5L3 3Z" fill="black" />
						</svg>
					</motion.div>

					<motion.p initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="max-w-[1073px] text-[#000] text-[14px] md:text-[20px] leading-[29px] md:leading-[38px] font-[500]">
						本利用規約（以下「本規約」といいます。）は、Next Innovations Co., Ltd. <br />
						（以下「当社」といいます。ミャンマー法人）が提供する各種サービス
						<br />
						（以下「本サービス」といいます。）の利用条件を定めるものです。 <br />
					</motion.p>
					<motion.p initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="max-w-[1073px] text-[#444] text-[14px] md:text-[20px] leading-[29px] md:leading-[38px] font-[500] mt-[22px]">

						本サービスをご利用いただく方（以下「ユーザー」といいます。）は、 <br />
						本規約に同意のうえ、本サービスを利用するものとします。
					</motion.p>

					<motion.h1 initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px]  font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
						第1条（適用範囲）
					</motion.h1>
					<div className="flex gap-[26px] md:gap-[11px] items-start mb-[8px] md:mb-[12px] mt-[12px] md:mt-[20px]">
						<div className="bg-[#096FCA] min-w-[10px] min-h-[10px] rounded-full mt-3.5"></div>
						<motion.p initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
							本規約は、ユーザーと当社との間の本サービス利用に関する一切の関係に適用されます。
						</motion.p>
					</div>
					<div className="flex gap-[26px] md:gap-[11px] items-start mb-[8px] md:mb-[12px]">
						<div className="bg-[#096FCA] min-w-[10px] min-h-[10px] rounded-full mt-3.5"></div>
						<motion.p initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
							本規約は、当社が提供するすべてのサービスに共通して適用されます。
						</motion.p>
					</div>

					<motion.p initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] mb-[8px] md:mb-[30px] max-w-[940px]">
						ただし、EORサービス、DX支援サービス、Talent Cloudその他各サービスに個別の利用規約が定められている場合、 当該サービスの利用については本規約に加え、当該個別規約が優先して適用されるものとします。
					</motion.p>
					<motion.h1 initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
						第2条（利用登録）
					</motion.h1>

					<motion.p initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px]">
						1. ユーザーは、当社の定める方法に従って利用登録を行うものとします。
					</motion.p>
					<motion.p initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px]">
						2. 当社は、登録申請者に以下の事由があると判断した場合、登録を拒否することができます。
					</motion.p>

					<div className="flex gap-[26px] md:gap-[11px] items-start mb-[8px] md:mb-[12px] mt-[12px] md:mt-[20px]">
						<div className="bg-[#096FCA] min-w-[10px] min-h-[10px] rounded-full mt-3.5"></div>
						<motion.p initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
							虚偽の事項を届け出た場合
						</motion.p>
					</div>
					<div className="flex gap-[26px] md:gap-[11px] items-start mb-[8px] md:mb-[12px]">
						<div className="bg-[#096FCA] min-w-[10px] min-h-[10px] rounded-full mt-3.5"></div>
						<motion.p initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
							過去に本規約違反があった場合
						</motion.p>
					</div>
					<div className="flex gap-[26px] md:gap-[11px] items-start mb-[8px] md:mb-[12px]">
						<div className="bg-[#096FCA] min-w-[10px] min-h-[10px] rounded-full mt-3.5"></div>
						<motion.p initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
							その他、当社が不適切と判断する場合
						</motion.p>
					</div>

					<motion.h1 initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
						第3条（禁止事項）
					</motion.h1>
					<motion.p initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px]">
						ユーザーは、本サービスの利用にあたり、以下の行為を行ってはなりません。
					</motion.p>

					<div className="flex gap-[26px] md:gap-[11px] items-start mb-[8px] md:mb-[12px] mt-[12px] md:mt-[20px]">
						<div className="bg-[#096FCA] min-w-[10px] min-h-[10px] rounded-full mt-3.5"></div>
						<motion.p initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
							法令または公序良俗に違反する行為
						</motion.p>
					</div>
					<div className="flex gap-[26px] md:gap-[11px] items-start mb-[8px] md:mb-[12px]">
						<div className="bg-[#096FCA] min-w-[10px] min-h-[10px] rounded-full mt-3.5"></div>
						<motion.p initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
							本サービスの運営を妨害する行為
						</motion.p>
					</div>
					<div className="flex gap-[26px] md:gap-[11px] items-start mb-[8px] md:mb-[12px]">
						<div className="bg-[#096FCA] min-w-[10px] min-h-[10px] rounded-full mt-3.5"></div>
						<motion.p initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
							他のユーザーや第三者の情報を不正に取得・利用する行為
						</motion.p>
					</div>
					<div className="flex gap-[26px] md:gap-[11px] items-start mb-[8px] md:mb-[12px]">
						<div className="bg-[#096FCA] min-w-[10px] min-h-[10px] rounded-full mt-3.5"></div>
						<motion.p initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
							当社または第三者の知的財産権を侵害する行為
						</motion.p>
					</div>
					<div className="flex gap-[26px] md:gap-[11px] items-start mb-[8px] md:mb-[12px]">
						<div className="bg-[#096FCA] min-w-[10px] min-h-[10px] rounded-full mt-3.5"></div>
						<motion.p initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
							本サービスを利用した営業行為または勧誘行為（当社が認めた場合を除く）
						</motion.p>
					</div>

					<motion.h1 initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
						第4条（本サービスの提供）
					</motion.h1>
					<div className="flex gap-[26px] md:gap-[11px] items-start mb-[8px] md:mb-[12px] mt-[12px] md:mt-[20px]">

						<motion.p initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
							1. 当社は、事前の通知なくサービス内容の一部を変更、中断または終了することがあります。

						</motion.p>
					</div>
					<div className="flex gap-[26px] md:gap-[11px] items-start mb-[8px] md:mb-[12px] ">

						<motion.p initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
							2. 当社は、ユーザーが本サービスを利用するために必要な機器や通信環境を保証しません。

						</motion.p>
					</div>

					<motion.h1 initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
						第5条（知的財産権）
					</motion.h1>
					<motion.p initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] max-w-[600px]">
						本サービスに関連する著作権、商標権、その他の知的財産権は、
						当社または正当な権利者に帰属します。
					</motion.p>

					<motion.h1 initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
						第6条（免責事項）
					</motion.h1>
					<div className="flex gap-[26px] md:gap-[11px] items-start mb-[8px] md:mb-[12px] mt-[12px] md:mt-[20px]">
						<motion.p initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
							1. 当社は、本サービスの利用によりユーザーに生じた損害について、一切の責任を負いません。
							ただし、当社の故意または重過失による場合はこの限りではありません。

						</motion.p>
					</div>
					<div className="flex gap-[26px] md:gap-[11px] items-start mb-[8px] md:mb-[12px]">
						<motion.p initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
							2. 当社は、ユーザー間またはユーザーと第三者との間で生じた紛争について一切の責任を負いません。

						</motion.p>
					</div>

					<motion.h1 initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
						第7条（契約解除）
					</motion.h1>
					<motion.p initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] max-w-[900px]">
						ユーザーが本規約に違反した場合、当社は事前の通知なくサービス利用を停止または契約を解除できるものとします。
					</motion.p>

					<motion.h1 initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
						第8条（協議および紛争解決）
					</motion.h1>
					<div className="flex gap-[26px] md:gap-[11px] items-start mb-[8px] md:mb-[12px] mt-[12px] md:mt-[20px]">
						<motion.p initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
							1. 本規約に関して紛争が生じた場合、当社およびユーザーは誠実に協議し、速やかな解決を図るものとします。

						</motion.p>
					</div>
					<div className="flex gap-[26px] md:gap-[11px] items-start mb-[8px] md:mb-[12px]">
						<motion.p initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
							2. 協議により解決できない場合、当該紛争はシンガポール国際仲裁センター（SIAC）の仲裁規則に従い、
							仲裁により最終的に解決されるものとします。

						</motion.p>
					</div>
					<div className="flex gap-[26px] md:gap-[11px] items-start mb-[8px] md:mb-[12px]">
						<motion.p initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
							3. 仲裁の言語は英語とし、仲裁地はシンガポールとします。

						</motion.p>
					</div>

					<motion.h1 initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
						第9条（準拠法）
					</motion.h1>
					<motion.p initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px]">
						本規約の準拠法は、日本法またはミャンマー法とし、当事者間の協議により決定します。
					</motion.p>
					<motion.h1 initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
						第10条（改定）
					</motion.h1>
					<motion.p initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] max-w-[864px]">
						当社は必要に応じて本規約を改定できるものとし、改定後の規約は当社ウェブサイトに掲載した時点で効力を生じます。
					</motion.p>

					<motion.h1 initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
						附則
					</motion.h1>
					<motion.p initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }} className="mt-[20px] text-[#096FCA] text-[20px] font-[500] leading-[38px]">
						本規約は2025年9月15日より施行します。
					</motion.p>
				</div>
			</div>

		</div>
	)
}

export default Terms