import React from 'react'
import '../Privacy/Privacy.css';
import logo from '../../../public/images/Group 34121.svg'; // ⬅️ replace with actual logo path
import { motion } from 'framer-motion';
const Conditions = () => {
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
        <div className="max-w-[1073px] mx-auto px-[24px] md:px-[145px] pt-[108px] md:pt-[114px] pb-[180px] relative z-10">
            <motion.h1 initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="text-black text-[32px] md:text-[58px] font-[700] leading-[50px] md:leading-[67px] tracking-[-0.58px] uppercase text-center">
                EORサービス利用規約
            </motion.h1>
            <motion.div initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="flex justify-center items-center mb-[45px] md:mb-[76px]">
                
                <svg className='mt-8' xmlns="http://www.w3.org/2000/svg" width="146" height="6" viewBox="0 0 146 6" fill="none">
                  <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM140.333 3.00001C140.333 4.47277 141.527 5.66668 143 5.66668C144.473 5.66668 145.667 4.47277 145.667 3.00001C145.667 1.52725 144.473 0.333346 143 0.333345C141.527 0.333345 140.333 1.52725 140.333 3.00001ZM3 3L3 3.5L143 3.50001L143 3.00001L143 2.50001L3 2.5L3 3Z" fill="black"/>
                </svg>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="max-w-[1073px] text-[#444] text-[14px] md:text-[20px] leading-[29px] md:leading-[38px] font-[500]">
                本EORサービス利用規約（以下「本規約」といいます。）は、
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="max-w-[1073px] text-[#444] text-[14px] md:text-[20px] leading-[29px] md:leading-[38px] font-[500] mt-[22px]">

                Next Innovations Co., Ltd.（以下「当社」といいます。ミャンマー法人）が提供する
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="max-w-[1073px] text-[#444] text-[14px] md:text-[20px] leading-[29px] md:leading-[38px] font-[500] mt-[22px]">

                EOR（Employer of Record：雇用代行）サービス（以下「本サービス」といいます。）の利用条件を定めるものです。
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="max-w-[1073px] text-[#444] text-[14px] md:text-[20px] leading-[29px] md:leading-[38px] font-[500] mt-[22px]">

                本サービスをご利用いただく方（以下「ユーザー」といいます。）は、<br></br>
                 本規約および当社の共通利用規約に同意のうえ、本サービスを利用するものとします。
            </motion.p>

            <motion.h1 initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px]  font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
                第1条（サービス内容）
            </motion.h1>
              <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px]">
                1. EOR（雇用代行のみ） 
            </motion.p>
             

  <div className="mb-[8px] md:mb-[12px] mt-[12px] md:mt-[20px] ml-[22px]">
      <motion.p initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px]">
         当社は、ユーザーの依頼に基づき、雇用代行業務を提供する。 
    </motion.p>
</div>

            <div className="flex gap-[11px] items-start mb-[8px] md:mb-[12px] mt-[12px] md:mt-[20px]">
                <div className="bg-[#096FCA] min-w-[10px] min-h-[10px] rounded-full mt-3.5"></div>
                <motion.p initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
                    雇用契約の締結および管理 
                </motion.p>
            </div>
            <div className="flex gap-[11px] items-start mb-[8px] md:mb-[12px]">
                <div className="bg-[#096FCA] min-w-[10px] min-h-[10px] rounded-full mt-3.5"></div>
                <motion.p initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
                    給与計算および支払 
                </motion.p>
            </div>
            <div className="flex gap-[11px] items-start mb-[8px] md:mb-[12px]">
                <div className="bg-[#096FCA] min-w-[10px] min-h-[10px] rounded-full mt-3.5"></div>
                <motion.p initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
                    社会保険、税務申告等の法令上必要な手続き
                </motion.p>
            </div>
            <div className="flex gap-[11px] items-start mb-[8px] md:mb-[12px]">
                <div className="bg-[#096FCA] min-w-[10px] min-h-[10px] rounded-full mt-3.5"></div>
                <motion.p initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
                    就業規則や労務管理に関する対応 
                </motion.p>
            </div>

            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] mb-[8px] md:mb-[30px] max-w-[1073px]">
            ※ユーザーは業務指示・管理を直接行うものとし、当社は人材の業務成果について責任を負わない。             </motion.p>
        
        






               <motion.p initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px]">
                           2.  安心ラボ型EOR 
                        </motion.p>
             

              <div className="mb-[8px] md:mb-[12px] mt-[12px] md:mt-[20px] ml-[22px]">
                  <motion.p initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px]">
                    当社は、前項に定める雇用代行業務に加え、ラボ型開発チームの運営支援を行う。 
                </motion.p>
            </div>

                        <div className="flex gap-[11px] items-start mb-[8px] md:mb-[12px] mt-[12px] md:mt-[20px]">
                            <div className="bg-[#096FCA] min-w-[10px] min-h-[10px] rounded-full mt-3.5"></div>
                            <motion.p initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
                                プロジェクト単位での人材チーム編成  
                            </motion.p>
                        </div>
                        <div className="flex gap-[11px] items-start mb-[8px] md:mb-[12px]">
                            <div className="bg-[#096FCA] min-w-[10px] min-h-[10px] rounded-full mt-3.5"></div>
                            <motion.p initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
                                日次／週次の進捗報告体制の整備  
                            </motion.p>
                        </div>
                        <div className="flex gap-[11px] items-start mb-[8px] md:mb-[12px]">
                            <div className="bg-[#096FCA] min-w-[10px] min-h-[10px] rounded-full mt-3.5"></div>
                            <motion.p initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
                                チームマネージャー（当社所属）によるサポート
                            </motion.p>
                        </div>
                        <div className="flex gap-[11px] items-start mb-[8px] md:mb-[12px]">
                            <div className="bg-[#096FCA] min-w-[10px] min-h-[10px] rounded-full mt-3.5"></div>
                            <motion.p initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
                                当社HRスタッフによる勤怠管理（出退勤・稼働時間の確認）  
                            </motion.p>
                        </div>
                        <div className="flex gap-[11px] items-start mb-[8px] md:mb-[12px]">
                            <div className="bg-[#096FCA] min-w-[10px] min-h-[10px] rounded-full mt-3.5"></div>
                            <motion.p initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
                                プロジェクト遂行上の進捗確認や納期遵守をサポートする体制整備 
                            </motion.p>
                        </div>
                        <div className="flex gap-[11px] items-start mb-[8px] md:mb-[12px]">
                            <div className="bg-[#096FCA] min-w-[10px] min-h-[10px] rounded-full mt-3.5"></div>
                            <motion.p initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
                                定例ミーティングへの参加（週1回）※ユーザーが希望する場合に限る
                            </motion.p>
                        </div>
                        <div className="flex gap-[11px] items-start mb-[8px] md:mb-[12px]">
                            <div className="bg-[#096FCA] min-w-[10px] min-h-[10px] rounded-full mt-3.5"></div>
                            <motion.p initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
                                オフィス等の労働環境の提供（机・ネット回線・電源等） 
                            </motion.p>
                        </div>

                        <motion.p initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] mb-[8px] md:mb-[30px] max-w-[1073px]">
             ※ただし、PCその他ユーザー業務に必要な物品はユーザー側の負担とする      </motion.p>
        
        
              <div className="flex gap-[11px] items-start mb-[8px] md:mb-[12px]">
                            <div className="bg-[#096FCA] min-w-[10px] min-h-[10px] rounded-full mt-3.5"></div>
                            <motion.p initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
                                福利厚生支援（食事会・旅行等を通じたチームビルディングの促進） 
                            </motion.p>
                        </div>

                        <motion.p initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] mb-[8px] md:mb-[30px] max-w-[1073px]">
             ※ユーザーはチームに直接指示を出せるが、当社が間接的にマネージメントを補助する。    </motion.p>
        
        
















               <motion.p initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px]">
                            3. プロジェクト伴走型EOR 
                        </motion.p>
             

              <div className="mb-[8px] md:mb-[12px] mt-[12px] md:mt-[20px] ml-[22px]">
                  <motion.p initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px]">
                     当社は、安心ラボ型EORの内容に加え、プロジェクト遂行においてユーザーと伴走しながら追加的      なサポートを提供する。 
                </motion.p>
            </div>

                        <div className="flex gap-[11px] items-start mb-[8px] md:mb-[12px] mt-[12px] md:mt-[20px]">
                            <div className="bg-[#096FCA] min-w-[10px] min-h-[10px] rounded-full mt-3.5"></div>
                            <motion.p initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
                                プロジェクト単位の契約締結 
                            </motion.p>
                        </div>
                        <div className="flex gap-[11px] items-start mb-[8px] md:mb-[12px]">
                            <div className="bg-[#096FCA] min-w-[10px] min-h-[10px] rounded-full mt-3.5"></div>
                            <motion.p initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
                                成果物納品に関連する進捗・品質確認のサポート 
                            </motion.p>
                        </div>
                        <div className="flex gap-[11px] items-start mb-[8px] md:mb-[12px]">
                            <div className="bg-[#096FCA] min-w-[10px] min-h-[10px] rounded-full mt-3.5"></div>
                            <motion.p initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
                                プロジェクト進行上の重大なトラブルへの対応支援 
                            </motion.p>
                        </div>
                        <div className="flex gap-[11px] items-start mb-[8px] md:mb-[12px]">
                            <div className="bg-[#096FCA] min-w-[10px] min-h-[10px] rounded-full mt-3.5"></div>
                            <motion.p initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
                                必要に応じた人材配置や稼働調整、リソース再配置  
                            </motion.p>
                        </div>
                        <div className="flex gap-[11px] items-start mb-[8px] md:mb-[12px]">
                            <div className="bg-[#096FCA] min-w-[10px] min-h-[10px] rounded-full mt-3.5"></div>
                            <motion.p initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
                                定例ミーティングへの参加（原則週1回）および緊急ミーティングへの参加 
                            </motion.p>
                        </div>
                     
                        <motion.p initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] mb-[8px] md:mb-[30px] max-w-[1073px]">
            ※成果物の完成や品質については、ユーザーとの協議に基づく範囲で合理的に対応するものとし、      全面的な保証責任を負うものではない。    </motion.p>
    






    
        
        
        
        
        
        
            <motion.h1 initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
                第2条（利用料金および支払条件）
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px]">
                1. 本サービスの利用料金は、契約時に合意した料金表に基づきます。 
            </motion.p>


              <div className="mt-[12px] md:mt-[20px] flex gap-[11px] items-start mb-[8px] md:mb-[12px]">
                     <div className="bg-[#096FCA] min-w-[10px] min-h-[10px] rounded-full mt-3.5"></div>
                            <motion.p initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
                                EOR（雇用代行のみ）：月額5万円／人あたり 
                            </motion.p>
                        </div>
                     
                        <motion.p initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] mb-[12px] md:mb-[20px] max-w-[1073px]">
            ※本プランには人材の給与・社会保険料等は含まれず、ユーザーが実費を負担するものとする。  
             </motion.p>
    
             <div className="flex gap-[11px] items-start mb-[8px] md:mb-[12px]">
                     <div className="bg-[#096FCA] min-w-[10px] min-h-[10px] rounded-full mt-3.5"></div>
                            <motion.p initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
                                安心ラボ型EOR：月額15万円～／人あたり 
                            </motion.p>
                        </div>
                     
                        <motion.p initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] mb-[8px] md:mb-[30px] max-w-[1073px]">
                ※人材の給与・社会保険料等を含む金額であり、採用する人材の給与水準により変動する。 
             </motion.p>
    



             <div className="flex gap-[11px] items-start mb-[8px] md:mb-[12px]">
                     <div className="bg-[#096FCA] min-w-[10px] min-h-[10px] rounded-full mt-3.5"></div>
                            <motion.p initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
                                プロジェクト伴走型EOR：月額30万円～／人あたり 
                            </motion.p>
                        </div>
                     
                        <motion.p initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] mb-[8px] md:mb-[30px] max-w-[1073px]">
                ※人材の給与・社会保険料等に加え、プロジェクトマネジメントを行う当社PMの関与を含む。        金額は採用する人材の給与水準およびPMのスキル・経験レベルにより変動する。 
             </motion.p>
    


            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px]">
                2. 為替変動その他の事情により費用に増減がある場合、当社はユーザーと協議の上、料金を改定できるものとする。 
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px]">
                3. 支払は契約開始前に行うものとし、原則として3ヶ月ごとの前払いとする。 
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px]">
                4. 請求書は利用開始月の前月に発行し、ユーザーは請求書発行日から最長30日以内に指定口座へ振込を行うものとする。 
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px]">
                5. ユーザーが1年間分を一括前払いする場合、当社は利用料金の5%を割引するものとする。 
            </motion.p>

           































            <motion.h1 initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
                第3条（契約期間）
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px]">
            1. 本サービスの契約期間は原則1年間とし、自動更新とします。 
                        </motion.p>
            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px]">
                            2. 期間満了前に解約を希望する場合は、少なくとも30日前までに書面で通知する必要があります。 
                        </motion.p>

          

          
           
         

            <motion.h1 initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
                第4条（EOR雇用契約解除）
            </motion.h1>
            <div className="flex gap-[11px] items-start mb-[8px] md:mb-[12px] mt-[12px] md:mt-[20px]">

                <motion.p initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
                    1. 人材の雇用契約には試用期間3か月を設けます。  <br />
                        試用期間中の解除については、1か月前までに通知するものとします。

                </motion.p>
            </div>
            <div className="flex gap-[11px] items-start mb-[8px] md:mb-[12px] ">

                <motion.p initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
                    2. 試用期間経過後は、ミャンマーの労働基準法に準じ、1年契約の自動更新とします。 
                       契約解除を行う場合は、双方いずれかが少なくとも1か月前までに通知する必要があります。 

                </motion.p>
            </div>

            <motion.h1 initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
                第5条（人材の交代）
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] max-w-[1073px]">
                1. ユーザーが提供された人材について著しく不適格と判断した場合、当社は協議の上で人材交代に応じます。 
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] max-w-[1073px]">
                2. ただし、交代に伴う費用負担は個別契約条件に従います。 
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] max-w-[1073px]">
                3. 雇用人材が自己都合により退職する場合、原則として退職希望日の2か月前までに通知する義務があります。 当社は本期間内において、引継ぎおよびリプレイス人材の確保を行います。 
            </motion.p>





















            <motion.h1 initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
                第6条（禁止事項および直接雇用）
            </motion.h1>
          
                <motion.p initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }} className="text-[#444] mt-[12px] md:mt-[20px] text-[14px] md:text-[20px] font-[500] leading-[38px]">
                    1. ユーザーは、以下の行為を行ってはならない。 

                </motion.p>
                <motion.p initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }} className="text-[#444] mt-[12px] md:mt-[20px] text-[14px] md:text-[20px] font-[500] leading-[38px]">
                    (1) 本サービスを通じて提供された人材を、当社を介さず直接雇用する行為 

                </motion.p>
                <motion.p initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }} className="text-[#444] mt-[12px] md:mt-[20px] text-[14px] md:text-[20px] font-[500] leading-[38px]">
                       (2) 現地法令に違反する業務指示 

                </motion.p>
                <motion.p initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }} className="text-[#444] mt-[12px] md:mt-[20px] text-[14px] md:text-[20px] font-[500] leading-[38px]">
                       (3) 本サービスの範囲を逸脱する行為 

                </motion.p>

     
            <div className="flex gap-[11px] items-start mb-[8px] md:mb-[12px]">
                <motion.p initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }} className="text-[#444] mt-[12px] md:mt-[20px] text-[14px] md:text-[20px] font-[500] leading-[38px]">
                    2. ユーザーが前項(1)に違反し、当社を介さず直接雇用を行った場合、 
                    ユーザーは当社に対し違約金を支払うものとする。        
                    <br/>
                      違約金の額は、当該人材の年間報酬額（給与・福利厚生費を含む）の2倍、          または金500万円のいずれか高い方とする。 

                </motion.p>
            </div>
            <div className="flex gap-[11px] items-start mb-[8px] md:mb-[12px]">
                <motion.p initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }} className="text-[#444] mt-[12px] md:mt-[20px] text-[14px] md:text-[20px] font-[500] leading-[38px]">
                  3. ただし、ユーザーから事前に当社へ相談があり、当社とユーザーが書面による合意をした場合は、 
                       当該人材を直接雇用することができる。        
                     <br/>
                      この場合、ユーザーは当社に対し、当社に生じ得る損失を補填するための協議を行い、         協議で定められた相当額の保証金を支払うものとする。

                </motion.p>
            </div>









            <motion.h1 initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
                第7条（知的財産権）
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] max-w-[1073px]">
                1. 人材が本サービスの遂行により創作した成果物に関する知的財産権は、ユーザーに帰属します。 
                <br></br>  ただし、オープンソースソフトウェア等の第三者権利を含むものは除きます。 
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] max-w-[1073px]">
               2. 当社または人材は、成果物の制作過程で得られた一般的なノウハウや技術、 
                 また汎用的に利用できる部品・アイデア・ソースコードの一部については、         他の案件に活用することができるものとします。       
                <br></br>
                  ただし、ユーザーに納品した成果物全体を、実質的に同一となる形でそのまま他社に提供することはありません。 
            </motion.p>

            <motion.h1 initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
                第8条（守秘義務）
            </motion.h1>
            <div className="flex gap-[11px] items-start mb-[8px] md:mb-[12px] mt-[12px] md:mt-[20px]">
                <motion.p initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
                    1.当社およびユーザーは、本サービスの遂行に関連して知り得た相手方の営業上または技術上の秘密情報を、 第三者に漏洩または不正に利用してはならない。  <br/>
                     ただし、法令に基づき開示を求められた場合はこの限りでない。 

                </motion.p>
            </div>
           
           

            <motion.h1 initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
                第9条（セキュリティおよびコンプライアンス）
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px]">
                1. 当社は、本サービス提供にあたり、ユーザー情報を適切に管理し、 合理的な範囲でセキュリティ対策を講じるものとする。  
               <br/>  また、現地法令を遵守するとともに、必要に応じてユーザーに協力する。 
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
                第10条（免責事項および責任制限）
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] max-w-[1073px]">
                1. 当社は、本サービスを通じて提供する人材の成果や業務遂行について保証しません。
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] max-w-[1073px]">
                2. 当社は、天災地変、政変、停電、通信障害等の不可抗力により発生した損害について責任を負いません。 
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] max-w-[1073px]">
                3. 万一当社が責任を負う場合でも、その賠償額はユーザーが当該サービスについて直近6ヶ月間に支払った
                  利用料金の総額を上限とします。 
            </motion.p>



               <motion.h1 initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
                第11条（不可抗力）
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] max-w-[1073px]">
                当社およびユーザーは、天災地変、政変、法令改正、停電、通信障害その他不可抗力により 本契約の履行が困難となった場合、その責を負わない。 
            </motion.p>
               <motion.h1 initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
                第12条（現地法人設立および人材移行）
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] max-w-[1073px]">
                1. ユーザーが現地法人を設立し、本サービスを通じて雇用された人材を当該法人へ移行する場合、 
                   ユーザーは当社の支援を受けて法人設立および移行手続きを行うものとする。 
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] max-w-[1073px]">
              2. ユーザーが日本国内において当社人材を直接雇用することを希望する場合、 
                  当社はミャンマー側における送り出しサポート業務（必要書類の整備、行政手続き支援、出国準備等）を
                  提供する。  
            <br/>   この場合、ユーザーは当該人材1名につき、50万円の送り出しサポート手数料および         100万円の保証金を当社に支払うものとする。     
               <br/>   なお、航空券・ビザ申請費用・保険料その他実費については、ユーザーの負担とする。 
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] max-w-[1073px]">
                3. 法人設立によりユーザーが人材を移行する場合、 ユーザーは原則として少なくとも1年間、当社にマネージメント契約を委託するものとする。
               <br/>    なお、詳細な条件については別紙「法人設立支援契約書」にて定める。
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] max-w-[1073px]">
               4. 人材移行に伴う手数料、保証金その他の費用についても、当社とユーザーが別途協議の上、 
                  別紙契約において定めるものとする。
            </motion.p>

              <motion.h1 initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
                第13条（準拠法）
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] max-w-[1073px]">
                1. 本規約の準拠法は、日本法またはミャンマー法とし、当事者間の協議により決定します。 
            </motion.p>



              <motion.h1 initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
                第14条（協議および紛争解決）
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] max-w-[1073px]">
                1. 本規約に関連して紛争が生じた場合、当社およびユーザーは誠実に協議し、速やかに解決を図ります。
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] max-w-[1073px]">
                2. 協議により解決できない場合、当該紛争はシンガポール国際仲裁センター（SIAC）の仲裁規則に従い、 
                   仲裁により最終的に解決されるものとします。 
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] max-w-[1073px]">
               3. 仲裁の言語は英語とし、仲裁地はシンガポールとします。 
            </motion.p>





              <motion.h1 initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
                第15条（契約の包括性）
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] max-w-[1073px]">
                1. 本規約は、ユーザーと当社との間におけるEORサービス利用に関する包括的な契約（マスター契約）として
                   効力を有する。 
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] max-w-[1073px]">
                2. ユーザーが本サービスを利用する際には、個別の発注書、または電子メール・ビジネスチャットその他の合理的な手段による 追加依頼と当社の承諾をもって、人材の人数、職種、開始日、利用料金等を定めるものとし、 当該内容は本契約の一部を構成する。 
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] max-w-[1073px]">
                3. 本規約と発注内容（発注書・電子メール・ビジネスメッセージ等）の内容が矛盾する場合には、 当該発注内容に定める事項を優先する。 
            </motion.p>


             <motion.h1 initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[60px] md:mt-[73px] text-[#096FCA] text-[20px] md:text-[24px] font-[600] md:font-[700] leading-[44px] tracking-[-0.48px] uppercase">
                第16条（最低利用人数）
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] max-w-[1073px]">
                1.本サービスの利用開始にあたり、各プランにおける最低人数は以下の通りとする。 
            </motion.p>
              <div className="flex gap-[11px] items-start mb-[8px] md:mb-[12px] mt-[12px] md:mt-[20px]">
                <div className="bg-[#096FCA] min-w-[10px] min-h-[10px] rounded-full mt-3.5"></div>
                <motion.p initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
                    EOR（雇用代行のみ）：1名から 
                </motion.p>
            </div>
              <div className="flex gap-[11px] items-start mb-[8px] md:mb-[12px] mt-[12px] md:mt-[20px]">
                <div className="bg-[#096FCA] min-w-[10px] min-h-[10px] rounded-full mt-3.5"></div>
                <motion.p initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
                    安心ラボ型EOR：1名から（ただし、チーム運用の観点から2名以上での利用を推奨する）
                </motion.p>
            </div>
              <div className="flex gap-[11px] items-start mb-[8px] md:mb-[12px] mt-[12px] md:mt-[20px]">
                <div className="bg-[#096FCA] min-w-[10px] min-h-[10px] rounded-full mt-3.5"></div>
                <motion.p initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }} className="text-[#444] text-[14px] md:text-[20px] font-[500] leading-[38px]">
                    プロジェクト伴走型EOR：3名から 
                </motion.p>
            </div>
            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#444] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] max-w-[1073px]">
                2. ただし、ユーザーの事業規模やプロジェクト内容に応じ、当社と協議のうえ柔軟に対応することができる。 
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
                viewport={{ once: true }} className="mt-[12px] md:mt-[20px] text-[#096FCA] text-[14px] md:text-[20px] font-[500] leading-[28px] md:leading-[38px] max-w-[1073px]">
               本規約は2025年10月1日より施行します。
            </motion.p>

        </div>
    </div>

</div>
  )
}

export default Conditions