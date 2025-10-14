import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import circle from "/images/circle-blue.svg";
import plusBtn from "/images/plus.svg";
import SectionTitle from "./SectionTitle";
import useSectionTitleAnimation from "../hooks/useSectionTitleAnimation";
import {PropTypes} from "prop-types"

const FAQ = ({faqData}) => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }
    const titleRef = useRef(null)
    useSectionTitleAnimation(titleRef, {start: "top+=300 top"})

    return (
        <div id="faq" className="w-full text-[#444444] bg-white">
            <div className="max-w-[1366px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[32px] lg:gap-0 lg:items-start px-6 xl:px-[120px] py-[147px]">
                {/* Left Title Section */}
                <motion.div
                    className="lg:w-[370px]"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <SectionTitle jp="よくある質問" eng="FAQ" />
                    <p className="text-[14px] lg:text-[15px] text-[#575757] font-normal leading-[24px] tracking-[0%] mt-[20px]">
                        よくあるご質問とその回答をまとめました。ご不明点
                        の解消にお役立てください。<br/>
                        また、海外人材の活用や弊社サービスに少しでもご関心がございましたら、ぜひお気軽にお問い合わせください。代表より直接ご返信いたします。
                    </p>
                </motion.div>
                {/* FAQ Section */}
                <div className="flex flex-col gap-[7px] md:gap-4">
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
                                <div className="flex items-center justify-between">
                                    <h1
                                        onClick={() => toggleIndex(index)}
                                        className="cursor-pointer duration-300 transition-all text-[#444444] text-[12px] md:text-[18px] font-bold leading-[20px] md:leading-[30px] tracking-[-2%]"
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
                                            transition={{ duration: 0.2, ease: "linear" }}
                                            className="overflow-hidden mt-2 md:mt-[13px]"
                                        >
                                            {faq.subTitles.map((subTitle, i) => (
                                                <p key={i} className="text-[#484747] text-[12px] md:text-[14px] font-medium md:font-normal leading-[20px] md:leading-[31px]">
                                                    {subTitle}
                                                </p>
                                            ))}
                                            <div className="space-y-[2px]">
                                                {faq.answers.map((ans, i) => (
                                                    <div className="flex gap-3 items-start" key={i}>
                                                        <img
                                                            src={circle}
                                                            alt=""
                                                            className="mt-3 md:mt-2 w-[7px] h-[7px] md:w-[14px] md:h-[14px]"
                                                        />
                                                        <p className="text-[#484747] text-[12px] md:text-[14px] font-medium md:font-normal leading-[31px] tracking-[0%]">
                                                            {ans}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="text-[#484747] text-[12px] md:text-[15px] font-normal leading-[24px]">
                                                {faq.conclusion}
                                            </p>
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

FAQ.propTypes = {
    faqData: PropTypes.array.isRequired
}

export default FAQ;