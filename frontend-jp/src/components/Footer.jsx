import { Link } from "react-router-dom"
import { useEffect, useState,useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const Footer = () => {
       gsap.registerPlugin(ScrollTrigger);
      const textRefs = useRef([]);

      useEffect(() => {
        // Create array to store all timelines for cleanup
        const allTimelines = [];

        // 1. TEXT ANIMATIONS (your existing animation)
        textRefs.current.forEach((textElement) => {
          if (!textElement) return;

          const lines = textElement.innerHTML.split('<br>');
          textElement.innerHTML = lines.map(line => 
            line ? `<div class="line-container"><div class="line">${line}</div></div>` : '<br>'
          ).join('');

          const containers = textElement.querySelectorAll('.line-container');
          const lineElements = textElement.querySelectorAll('.line');

          gsap.set(containers, {
            height: 0,
            overflow: 'hidden'
          });

          gsap.set(lineElements, {
            y: '100%',
            opacity: 0
          });

          const textTl = gsap.timeline({
            scrollTrigger: {
              trigger: textElement,
              start: "top -90%",
              toggleActions: "play none none none"
            }
          });

          containers.forEach((container, i) => {
            const line = container.querySelector('.line');
            textTl.to(container, {
              height: 'auto',
              duration: 0.4,
              ease: "power2.out"
            }, i * 0.2)
            .to(line, {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power2.out"
            }, `-=${i === 0 ? 0 : 0.5}`);
          });

          allTimelines.push(textTl);
        });

   


        // Cleanup function for all timelines
        return () => {
          allTimelines.forEach(tl => tl.kill());
        };
      }, []);

    const textRef = useRef(null);
    const [isInViewport, setIsInViewport] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsInViewport(true);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      if (textRef.current) {
        observer.observe(textRef.current);
      }

      return () => {
        if (textRef.current) {
          observer.unobserve(textRef.current);
        }
      };
    }, []);

    useEffect(() => {
      if (isInViewport && textRef.current) {
        // Initial state (offscreen and squished)
        gsap.set(textRef.current, {
          y: 1000,
          scaleY: 0.2,
          opacity: 0
        });

        // Create timeline for sequenced animations
        const tl = gsap.timeline();
      
        // Main slide-up animation (overshoot slightly)
        tl.to(textRef.current, {
          y: 0, // Overshoot the target by 50px
          scaleY: 1.2, // Slightly overexpand
          opacity: 1,
          duration: 0.8,
          ease: "power2.out"
        })
        // Settle back to final position
        .to(textRef.current, {
          y: 0,
          scaleY: 1,
          duration: 0.4,
          ease: "power1.inOut"
        });
      }
    }, [isInViewport]);
  
    return (
        <div className="bg-[#1E2C44]">
          <div className="max-w-[1420px] mx-auto text-white pt-[105px] pb-[50px]">
            <div className="max-w-[1266px] mx-auto">
              <div className="flex justify-between">
                <div>
                  <p className="text-[18px] font-bold leading-[26px] tracking-[1%]">サービス</p>
                  <div className="flex flex-col gap-[13px] mt-[17px]">
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">EOR（雇用代行）</Link>
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">安心ラボ型EOR</Link>
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">DX支援</Link>
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">受託開発</Link>
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">UIUXデザイン</Link>
                  </div>
                </div>
                <div>
                  <p className="text-[18px] font-bold leading-[26px] tracking-[1%]">プロダクト</p>
                  <div className="flex flex-col gap-[13px] mt-[17px]">
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">Talent Cloud</Link>
                  </div>
                </div>
                <div>
                  <p className="text-[18px] font-bold leading-[26px] tracking-[1%]">導入事例</p>
                  <div className="flex flex-col gap-[13px] mt-[17px]">
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">EOR事例</Link>
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">受託開発事例</Link>
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">UI/UXデザイン事例</Link>
                  </div>
                </div>
                <div>
                  <p className="text-[18px] font-bold leading-[26px] tracking-[1%]">会社情報</p>
                  <div className="flex flex-col gap-[13px] mt-[17px]">
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">会社概要</Link>
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">経営方針</Link>
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">代表メッセージ</Link>
                  </div>
                </div>
                <div>
                  <p className="text-[18px] font-bold leading-[26px] tracking-[1%]">情報</p>
                  <div className="flex flex-col gap-[13px] mt-[17px]">
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">ニュース</Link>
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">ブログ</Link>
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">FAQ</Link>
                  </div>
                </div>
                <div>
                  <p className="text-[18px] font-bold leading-[26px] tracking-[1%]">法務関連</p>
                  <div className="flex flex-col gap-[13px] mt-[17px]">
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">プライバシーポリシー</Link>
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">セキュリティポリシー</Link>
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]">利用規約</Link>
                  </div>
                </div>
                <div>
                  <p className="text-[18px] font-bold leading-[26px] tracking-[1%]">お問い合わせ</p>
                  <div className="flex flex-col gap-[13px] mt-[17px]">
                    <Link className="text-[15px] font-normal leading-[26px] tracking-[1%]"> 無料相談フォーム</Link>
                  </div>
                </div>
            </div>
            <div className="flex justify-between items-center mt-[80px] mb-[30px]">
              <p className="roboto text-[18px] font-normal leading-[26px] tracking-[1%]">Copyright © Next Innovations</p>
              <p className="roboto text-[18px] font-normal leading-[26px] tracking-[1%]">Let’s grab high achievements together!</p>
              <div className="roboto underline text-[18px] font-normal leading-[26px] tracking-[1%] flex gap-2">
                <Link>Facebook</Link>
                <Link>Instagram</Link>
                <Link>Youtube</Link>
                <Link>LinkedIn</Link>
              </div>
            </div>
            </div>
            <div ref={textRef} className="montserrat text-[131px] font-bold leading-[100%] tracking-[-3%] uppercase">DRIVEN DX WITH US</div>
          </div>
        </div>
    )
}

export default Footer