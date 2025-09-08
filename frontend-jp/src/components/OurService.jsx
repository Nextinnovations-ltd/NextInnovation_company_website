import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import RightArrow from '/images/right-arrow-black.svg'

const OurService = () => {

  const projectsRef = useRef(null);
  const previewRef = useRef(null);
  const previewImgRef = useRef(null);

  const bgPositions = {
    p1: "0 0",
    p2: "0 25%",
    p3: "0 50%",
    p4: "0 75%",
    p5: "0 100%",
  };

  useEffect(() => {
    const projects = projectsRef.current;
    const preview = previewRef.current;
    const previewImg = previewImgRef.current;

    // Initialize preview styles
    gsap.set(preview, {
      opacity: 0,
      scale: 0,
      xPercent: -50, // Centers the element relative to cursor
      yPercent: -50, // Centers the element relative to cursor
    });

    preview.style.pointerEvents = "none";
    preview.style.position = "fixed";
    preview.style.zIndex = "100";

    let isInside = false;
    let lastScrollTime = 0;
    const scrollDebounceTime = 100; // ms
    let mouseX = 0;
    let mouseY = 0;

    const updatePreviewVisibility = (shouldShow) => {
      if (shouldShow !== isInside) {
        isInside = shouldShow;
        gsap.to(preview, {
          scale: shouldShow ? 1 : 0,
          opacity: shouldShow ? 1 : 0,
          duration: 0.3,
        });
      }
    };

    const checkIfInside = (x, y) => {
      const containerRect = projects.getBoundingClientRect();
      return (
        x >= containerRect.left &&
        x <= containerRect.right &&
        y >= containerRect.top &&
        y <= containerRect.bottom
      );
    };

    const moveProject = (x, y) => {
      // Update mouse position for scroll handling
      mouseX = x;
      mouseY = y;
      preview.style.left = `${x}px`;
      preview.style.top = `${y}px`;
    };

    const moveProjectImg = (project) => {
      const projectId = project.id;
      gsap.to(previewImg, {
        backgroundPosition: bgPositions[projectId] || "0 0",
        duration: 0.4,
      });
    };

    const handleMouseMove = (e) => {
      const mouseInside = checkIfInside(e.clientX, e.clientY);
      updatePreviewVisibility(mouseInside);
      if (mouseInside) {
        moveProject(e.clientX, e.clientY);
      }
    };

    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime < scrollDebounceTime) return;
      lastScrollTime = now;

      const scrollInside = checkIfInside(mouseX, mouseY);
      updatePreviewVisibility(scrollInside);

      if (scrollInside) {
        // Keep using the last mouse position, but update which project is active
        const projectItems = Array.from(projects.children);
        for (const project of projectItems) {
          const rect = project.getBoundingClientRect();
          if (
            mouseY >= rect.top &&
            mouseY <= rect.bottom &&
            mouseX >= rect.left &&
            mouseX <= rect.right
          ) {
            moveProjectImg(project);
            break;
          }
        }
      }
    };

    // Mouse events
    window.addEventListener('mousemove', handleMouseMove);

    // Project hover events - these will update both position and image
    const projectItems = Array.from(projects.children);
    projectItems.forEach((project) => {
      project.addEventListener('mousemove', (e) => {
        moveProject(e.clientX, e.clientY);
        moveProjectImg(project);
      });
    });

    // Scroll event
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      projectItems.forEach((project) => {
        project.removeEventListener('mousemove', (e) => {
          moveProject(e.clientX, e.clientY);
          moveProjectImg(project);
        });
      });
    };
  }, []);


  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);
  const textRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

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
          start: "top 60%",
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

    // 2. SECTION ::BEFORE ANIMATION (your new animation)
    const sections = document.querySelectorAll('.home .our-services .link-container');

    sections.forEach(section => {
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "bottom 20%",
          toggleActions: "play none none none"
        }
      });

      sectionTl.to(section, {
        '--after-width': '100%',
        duration: 1,
        ease: "power2.out"
      });

      allTimelines.push(sectionTl);
    });

    // Cleanup function for all timelines
    return () => {
      allTimelines.forEach(tl => tl.kill());
    };
  }, []);

  /* IMAGE REVEAL // BLOG REVEAL  */
  useEffect(() => {
    // Initialize all reveal elements
    const reveals = document.querySelectorAll('.blockReveal');

    // Set initial state
    gsap.set('.blockReveal', {
      yPercent: 100,  // Start 100% below (fully hidden)
      opacity: 0,
      scale: 1.2      // Optional: slight zoom effect
    });

    reveals.forEach(img => {
      gsap.to(img, {
        yPercent: 0,   // Animate to normal position
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: img,
          start: "top 20%",  // When top of image hits 80% of viewport
          // Animation completes by 30%
          toggleActions: "play none none none",
          markers: false     // Set to true for debugging positions
        }
      });
    });

    return () => {
      // Cleanup
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf('.blockReveal');
    };
  }, []);

  return (
    <div className="bg-white">
      <div className="our-services max-w-[1240px] mx-auto pt-[89px] lg:pt-[199px] pb-[85px] lg:pb-[180px] gap-12 flex flex-col px-[25px] xl:px-0">

        {/* Preview element - match vanilla version structure */}
        <div
          className="preview"
          ref={previewRef}
          style={{
            width: '300px',
            height: '200px',
          }}
        >
          <div
            className="preview-img"
            ref={previewImgRef}
            style={{
              width: '100%',
              height: '100%',
              backgroundSize: '100% 500%'
            }}
          ></div>
        </div>

        {/* Projects container */}
        <div className="projects" ref={projectsRef}>

          <div className="relative project" id="p1">
            <Link to="/eor">
              <div className="link-container flex justify-between items-center py-6 lg:py-10 border-t-[2px] border-[#444444]">
                <div className="link-title gap-3 flex flex-col">
                  <h3 className="roboto" ref={addToRefs}>Lab-based EOR for Long-term Team Building</h3>
                  <h2 ref={addToRefs}>安心ラボ型EOR</h2>
                  <p ref={addToRefs} className="text-[12px] lg:text-[21px] text-[#444444] font-normal leading-[18px] lg:leading-[33px] tracking-[1%]">勤怠管理・福利厚生・現場サポート込みで、海外<br className="block md:hidden"/>人材を“チーム”として定着・活躍させます。</p>
                </div>
                <div className="" style={{ overflow: 'hidden' }}>
                  <img src={RightArrow} alt="" />
                </div>
              </div>
            </Link>
          </div>

          <div className="relative project" id="p2">
            <Link to="/development/website">
              <div className="link-container flex justify-between items-center py-6 lg:py-10">
                <div className="link-title gap-3 flex flex-col">
                  <h3 className="roboto" ref={addToRefs}>EOR with Project Management Support</h3>
                  <h2 ref={addToRefs}>プロジェクト伴走型EOR</h2>
                  <p ref={addToRefs} className="text-[12px] lg:text-[21px] text-[#444444] font-normal leading-[18px] lg:leading-[33px] tracking-[1%]">専任PMが進捗・品質を管理。オフショア開発の<br className="block md:hidden"/>課題を解決し、成果創出まで伴走。</p>
                </div>
                <div className="" style={{ overflow: 'hidden' }}>
                  <img src={RightArrow} alt="" />
                </div>
              </div>
            </Link>
          </div>

          <div className="relative project" id="p3">
            <Link to="/ui-ux">
              <div className="link-container flex justify-between items-center py-6 lg:py-10">
                <div className="link-title gap-3 flex flex-col">
                  <h3 className="roboto" ref={addToRefs}>Custom Development Services</h3>
                  <h2 ref={addToRefs}>受託開発</h2>
                  <p ref={addToRefs} className="text-[12px] lg:text-[21px] text-[#444444] font-normal leading-[18px] lg:leading-[33px] tracking-[1%]">Web開発・クロスプラットフォーム開発など柔軟に<br className="block md:hidden"/>対応。日本案件経験豊富なエンジニアが担当。</p>
                </div>
                <div className="" style={{ overflow: 'hidden' }}>
                  <img src={RightArrow} alt="" />
                </div>
              </div>
            </Link>
          </div>

          <div className="relative project" id="p4">
            <Link to="/testing">
              <div className="link-container flex justify-between items-center py-6 lg:py-10">
                <div className="link-title gap-3 flex flex-col">
                  <h3 className="roboto" ref={addToRefs}>Creative UI/UX Design with Figma</h3>
                  <h2 ref={addToRefs}>UI/UXデザイン</h2>
                  <p ref={addToRefs} className="text-[12px] lg:text-[21px] text-[#444444] font-normal leading-[18px] lg:leading-[33px] tracking-[1%]">Figmaを用いた最新のデザイン。コストを抑えつつ<br className="block md:hidden"/>高品質なUI/UXを実現。</p>
                </div>
                <div className="" style={{ overflow: 'hidden' }}>
                  <img src={RightArrow} alt="" />
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default OurService;

