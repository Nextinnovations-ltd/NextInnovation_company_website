import CaseStudyCard from "./CaseStudyCard"
import SectionTitle from "./SectionTitle"
import CaseStudyImg from "/images/casestudy.png"

const CaseStudy = () => {
    return (
        <div className="max-w-[1240px] mx-auto text-[#444444]">
            <SectionTitle jp="導入事例" eng="Case Study" />
            <div className="flex gap-[24px] mt-[50px]">
                <CaseStudyCard image={CaseStudyImg} title="株式会社GlobalHire" description="海外採用をスピーディに実現"
                    text1="新規市場進出に伴い、海外人材の雇用や法的手" text1Next="続きが複雑化"
                    text2="EOR導入により採用期間を50％短縮、コンプラ" text2Next="イアンスリスクをゼロに"
                    text3="EORサービス、労務管理、給与代行"
                />
                <CaseStudyCard image={CaseStudyImg} title="株式会社Release" description="ユーザーファーストな体験で利用率を向上"
                    text1="アプリの操作性が複雑で離脱率が高い"
                    text2="UI/UX改善によりユーザー定着率が2倍、NPSスコ" text2Next="ア+35％向上"
                    text3="UXリサーチ、UIデザイン、ユーザーテスト"
                />
                <CaseStudyCard image={CaseStudyImg} title="株式会社Milson Tech" description="業務プロセスのDX化で効率と売上を拡大"
                    text1="紙ベースの業務プロセスにより効率低下、情報共" text1Next="有の遅延"
                    text2="DX導入により処理時間を70％削減、年間売上" text2Next="20％増加"
                    text3="業務システム開発、AI導入支援、UI/UXデザイン"
                />
            </div>
        </div>
    )
}

export default CaseStudy