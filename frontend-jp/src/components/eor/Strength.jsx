import SectionTitle from "../SectionTitle";
import StrengthCard from "./StrengthCard";
import CustomerService from "/images/customer-service.gif"
import Launch from "/images/launch.gif"
import Money from "/images/money.gif"
import Conversation from "/images/conversation.gif"

const Strength = () => {
    return (
        <div className="bg-[#1E2C44]">
            <div className="max-w-[1366px] mx-auto py-[137px] px-[62px]">
                <SectionTitle jp="当社EORの特徴と強み" eng="Features & Strengths of EOR" jpcolor="text-[#FFFFFF]" engcolor="text-[#FFFFFF]" />
                <div className="grid grid-cols-2 gap-[37px] mt-[80px]">
                    <StrengthCard
                        image={CustomerService}
                        title="安心のラボ型・伴走型"
                        description="勤怠管理・現場サポート・福利厚生を完備し、人材が安心して長期的に活躍できる環境を提供。伴走型プランでは当社が進捗・品質を管理し、オフショアで頻発するトラブルを回避します。"
                    />
                    <StrengthCard
                        image={Launch}
                        title="圧倒的なコスト・スピード感"
                        description="当社のEORサービスは、国内採用やオフショア委託と比較しても圧倒的なコストパフォーマンスを実現しています。また、依頼から最短1ヶ月で稼働開始が可能なため、「すぐに人材が必要」「国内で採用できない」「オフショアは不安」という企業様にもスピーディに対応できます。"
                    />
                    <StrengthCard
                        image={Money}
                        title="柔軟な決済"
                        description="日本円に対応しており国内銀行振込に加え、カード決済にも対応柔軟に対応。年払いの場合は5%割引もご用意しています。"
                    />
                    <StrengthCard
                        image={Conversation}
                        title="将来の人材確保とノウハウ蓄積"
                        description="EORベースのサービスのため、単なる委託ではなく自社の資産として人材・ノウハウを蓄積可能です。将来の重要な戦力として貴社のビジネス成長に貢献します。他社にてEOR人材がCTOへ登用された実績有り。"
                    />
                </div>
            </div>
        </div>
    );
}

export default Strength;
