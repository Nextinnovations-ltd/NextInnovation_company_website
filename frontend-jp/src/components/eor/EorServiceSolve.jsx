import EorServiceSolveCard from "./EorServiceSolveCard";
import Img1 from "/images/eor-service-solve1.png"
import Img2 from "/images/eor-service-solve2.png"
import Img3 from "/images/eor-service-solve3.png"
import TitleFlex from "../dxsupport/TitleFlex";

const EorServiceSolve = () => {

    return (
        <div className="bg-[#1E2C44]">
            <div className="bg-white rounded-b-[40px] lg:rounded-b-[80px]">
                <div className="max-w-[1366px] mx-auto pt-[80px] lg:pt-[120px] pb-[80px] lg:pb-[180px] px-[24px] lg:px-[63px] text-[#444444]">

                    <TitleFlex
                        jp="当社EORサービスが解決すること" eng="What Our EOR Service Solves"
                        text="こうした課題を解消し、企業が安心して海外人材を活用できる仕組みが当社のEOR（Employer of Record）サービスです。"
                    />

                    <div className="mt-[50px] lg:mt-[64px]">
                        <EorServiceSolveCard
                            image={Img1}
                            title="人材豊富な東南アジアでスピード採用"
                            description="平均年齢約28歳と若い人口を抱えるミャンマーには、豊富なエンジニア・デザイナー人材が揃っています。これにより、日本国内で深刻化する「人材不足」や「人件費高騰」の課題を解消。さらに募集から採用まで最短1ヶ月以内で稼働開始した実績もあります。"
                            first
                        />
                        <EorServiceSolveCard
                            image={Img2}
                            title="自社チームとしての一体感を形成"
                            description="EORは単なる外部委託ではなく「採用」という形態をとるため、御社の考え方や文化を人材に浸透させることが可能です。当社が間に入り、日常的なサポートや文化的な橋渡しを行うことで、言語や習慣の壁を解消し、より円滑に自社の一員として育成・定着を実現します。 また、当社が現場管理を支援する事で業務上リスクを最小化します。（対象：安心ラボ型・伴走型）"
                        />
                        <EorServiceSolveCard
                            image={Img3}
                            title="法人設立不要でゼロリスク採用"
                            description="現地法人の設立は不要。初期コストや運営リスクゼロで、契約・給与支払・税務・労務を当社が一括代行します。これにより、特に中小企業でも安心して海外人材を自社チームに迎え入れることができます。"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default EorServiceSolve;
