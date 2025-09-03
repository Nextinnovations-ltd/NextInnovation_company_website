import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import circle from "/images/circle-blue.svg";
import plusBtn from "/images/plus.svg";
import SectionTitle from "./SectionTitle";

const faqData = [
    {
        question: "ミャンマーにおける当社のEORサービスを利用する利点は何ですか？",
        answers: [
            "現地法人を設立せずに迅速な採用を行う。",
            "現地の労働法および規制への完全な遵守。",
            "コスト効率の良い、熟練した現地人材へのアクセス。",
            "法的リスク及び業務上のリスクの軽減。",
        ],
        subTitles: "特典には以下が含まれます：",
    },
    {
        question: " How do we manage Myanmar's electricity challenges? ",
        answers: ["Talent Cloud provides necessary support for electricity if needed."],
        subTitles: "",
    },
    {
        question: "How does Talent Cloud handle employee onboarding and management?",
        answers: [
            "Conducting background checks and verifying qualifications.",
            "Facilitating smooth onboarding processes.",
            "Managing payroll, benefits, and compliance documentation.",
            "Providing ongoing HR support and performance evaluations.",
        ],
        subTitles: "Our comprehensive approach includes:",
    },
    {
        question: " What support is available for employees regarding workplace challenges?",
        answers: [
            "Regular check-ins and feedback sessions.",
            "Assistance with conflict resolution and workplace issues.",
            "Guidance on career development opportunities.",
        ],
        subTitles: "We offer:",
    },
    {
        question: "What HR services does Talent Cloud provide?",
        answers: [
            "Employee onboarding & offboarding.",
            "Contract generation (in line with Myanmar labor law).",
            "Leave management and attendance tracking.",
            "Performance monitoring and conflict resolution.",
            "Employee engagement and welfare coordination.",
        ],
        subTitles: "We handle end-to-end HR management, including:",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div id="faq" className="w-full text-[#444444] rounded-b-[80px] bg-red-300">
            <div className="max-w-[1240px] mx-auto gap-[30px] md:gap-[100px] flex flex-col md:flex-row items-start pt-[30px] pb-[100px] md:pt-[130px] md:pb-[200px] pr-5 pl-5">
                {/* Left Title Section */}
                <motion.div
                    className="max-w-[394px]"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <SectionTitle jp="よくある質問" eng="FAQ" />
                    <p className="w-[370px] text-[15px] text-[#575757] font-normal leading-[24px] tracking-[0%] mt-[20px]">
                        よくあるご質問とその回答をまとめました。ご不明点
                        の解消にお役立てください。<br/>
                        また、海外人材の活用や弊社サービスに少しでもご関心がございましたら、ぜひお気軽にお問い合わせください。代表より直接ご返信いたします。
                    </p>
                </motion.div>
                {/* FAQ Section */}
                <div className="max-w-[822px] flex flex-col gap-[7px] md:gap-4">
                    {faqData.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                className="flex flex-col justify-center border-b-[1px] border-[#000000] pt-2 md:pt-[14px] pb-2 md:pb-[14px]"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex justify-between items-start gap-[33px]">
                                    <h1
                                        onClick={() => toggleIndex(index)}
                                        className="cursor-pointer duration-300 transition-all text-[#444444] text-[12px] md:text-[20px] font-bold"
                                    >
                                        {faq.question}
                                    </h1>
                                    <img
                                        src={plusBtn}
                                        alt=""
                                        onClick={() => toggleIndex(index)}
                                        className={`cursor-pointer w-[18px] h-[18px] md:w-[32px] md:h-[32px] transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"
                                            }`}
                                    />
                                </div>
                                {/* Answers with AnimatePresence */}
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                            className="overflow-hidden mt-2 md:mt-[13px]"
                                        >
                                            <p className="text-[#484747] text-[12px] md:text-[16px] font-[500] leading-[20px] md:leading-[48px]">
                                                {faq.subTitles}
                                            </p>
                                            {faq.answers.map((ans, i) => (
                                                <div className="flex gap-3 items-start md:items-center" key={i}>
                                                    <img
                                                        src={circle}
                                                        alt=""
                                                        className="mt-[4px] md:mt-0 w-[7px] h-[7px] md:w-[16px] md:h-[16px]"
                                                    />
                                                    <p className="text-[#484747] text-[12px] md:text-[16px] font-[500] leading-[20px] md:leading-[48px]">
                                                        {ans}
                                                    </p>
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default FAQ;