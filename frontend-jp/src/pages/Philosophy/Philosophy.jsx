import rotateImg from "/images/Group 34121.svg";
import textImg from "/images/svg/Philosophy.svg";
const Philosophy = () => {
	return (
		<div className="bg-white overflow-hidden z-[100] relative rounded-[80px]">
			<div className="">
				<div
					className="h-[100vh] absolute right-[-10%]"
					style={{
						backgroundImage: `url(${rotateImg})`,
						backgroundSize: "contain",
						backgroundPosition: "right",
						width: "100%",
						backgroundRepeat: "no-repeat",
						rotate: "15deg",
					}}
				></div>

				<div className="pt-[50vh] max-w-[1140px] mx-auto relative z-[100] ">
					<div className="">
						<p className="flex  items-center gap-2 text-[#575757] text-[16px] font-[500] leading-[31px]">
							(
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="8"
								height="8"
								viewBox="0 0 8 8"
								fill="none"
							>
								<circle cx="4" cy="4" r="4" fill="#096FCA" />
							</svg>
							理念 )
						</p>
					</div>
					<img src={textImg} alt="" className="mt-[40px]" />
					<p className="text-black text-[15px] font-[400] leading-[24px] max-w-[463px] mt-[43px] ml-[80px]">
						私たちは、ウェブとテクノロジーの力で日本社会に新しい価値を創造し、人々の生活をより便利に、より豊かにすることを目指します。
						常に挑戦と革新を続け、お客様の成長と成功を支えるパートナーであり続けます。
					</p>
					<div className="flex gap-[81px] mt-[92px]">
						<div className="">
							<p className="flex  items-center gap-2 text-[#575757] text-[16px] font-[500] leading-[31px]">
								(
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="8"
									height="8"
									viewBox="0 0 8 8"
									fill="none"
								>
									<circle cx="4" cy="4" r="4" fill="#096FCA" />
								</svg>
								未来像 )
							</p>
							<p className="mt-[10px] text-[#444] text-[58px] font-[700] leading-[67px] tracking-[-0.58px] uppercase">
								Vision
							</p>
						</div>
						<div className="flex flex-col gap-6 mt-[84px]">
							<p className="text-[16px] font-[500] leading-[31px] text-[#444]">
								日本の企業が直面する課題を、
							</p>
							<p className="text-[16px] font-[500] leading-[31px] text-[#444]">
								デジタルの力で解決し、
							</p>
							<p className="text-[16px] font-[500] leading-[31px] text-[#444]">
								確かな成果を届ける。
							</p>
						</div>
					</div>
					<div className="flex gap-[81px] mt-[120px]">
						<div className="">
							<p className="flex  items-center gap-2 text-[#575757] text-[16px] font-[500] leading-[31px]">
								(
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="8"
									height="8"
									viewBox="0 0 8 8"
									fill="none"
								>
									<circle cx="4" cy="4" r="4" fill="#096FCA" />
								</svg>
								使命 )
							</p>
							<p className="mt-[10px] text-[#444] text-[58px] font-[700] leading-[67px] tracking-[-0.58px] uppercase">
								Mission
							</p>
						</div>
						<div className="flex flex-col gap-6 mt-[84px]">
							<p className="text-[16px] font-[500] leading-[31px] text-[#444]">
								日本を起点に、世界へ価値を広げる企業へ。
							</p>
							<p className="text-[16px] font-[500] leading-[31px] text-[#444]">
								テクノロジーとデザインの力で、社会に変革をもたらす。
							</p>
						</div>
					</div>
					<div className="flex gap-[81px] mt-[120px]">
						<div className="">
							<p className="flex  items-center gap-2 text-[#575757] text-[16px] font-[500] leading-[31px]">
								(
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="8"
									height="8"
									viewBox="0 0 8 8"
									fill="none"
								>
									<circle cx="4" cy="4" r="4" fill="#096FCA" />
								</svg>{" "}
								行動指針 )
							</p>
							<p className="mt-[10px] text-[#444] text-[58px] font-[700] leading-[67px] tracking-[-0.58px] uppercase">
								Value
							</p>
						</div>
						<div className="flex flex-col gap-6 mt-[84px]">
							<p className="text-[16px] font-[500] leading-[31px] text-[#444]">
								お客様第一主義を徹底し、信頼される存在になる。
							</p>
							<p className="text-[16px] font-[500] leading-[31px] text-[#444]">
								日本市場に適した質の高いサービスを提供する。
							</p>
							<p className="text-[16px] font-[500] leading-[31px] text-[#444]">
								誠実さと責任感を持ち、社会に貢献する。
							</p>
							<p className="text-[16px] font-[500] leading-[31px] text-[#444]">
								学び続け、進化し続ける姿勢を大切にする。
							</p>
							<p className="text-[16px] font-[500] leading-[31px] text-[#444]">
								チームの力を最大限に活かし、新しい挑戦を続ける。
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Philosophy;
