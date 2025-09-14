import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Newsroom = () => {
  const years = [2024, 2025];
  const [activeIndex, setActiveIndex] = useState(1); // Start with 2025
  const sectionRef = useRef(null);
  const yearBoxRef = useRef(null);
  const contentRef = useRef(null);

  const newsData = {
    2024: [
      { title: "ERW Tubes production boost in Pune", location: "Pune", date: "Jan 2024" },
      { title: "New sustainability initiative launched", location: "Mumbai", date: "Apr 2024" },
      { title: "Partnership with JSW Steel announced", location: "Delhi", date: "Aug 2024" },
    ],
    2025: [
      { title: "Tapitubes introduces galvanized pipe series", location: "Delhi", date: "Feb 2025" },
      { title: "Capacity doubled for ERW black tubes", location: "Mumbai", date: "Jun 2025" },
      { title: "Awarded Best Manufacturing Company", location: "Bangalore", date: "Oct 2025" },
    ],
  };

useEffect(() => {
  const ctx = gsap.context(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=200%",
      scrub: 1,
      pin: true,
      snap: {
        snapTo: [0, 1], // snap between 2024 (0) and 2025 (1)
        duration: 0.5,
        ease: "power2.inOut",
      },
      onSnapComplete: (self) => {
        const snapIndex = self.progress < 0.5 ? 0 : 1;
        if (snapIndex !== activeIndex) {
          animateYearChange(snapIndex);
        }
      },
    });

    // ✅ Ensure we land on 2025 without double-trigger
    setActiveIndex(1);
  }, sectionRef);

  return () => ctx.revert();
}, [activeIndex]);



  // Animation when year/content changes
  const animateYearChange = (newIndex) => {
    const tl = gsap.timeline({
      defaults: { duration: 0.6, ease: "power2.inOut" },
      onComplete: () => setActiveIndex(newIndex),
    });

    // Animate year out
    tl.to(yearBoxRef.current, { y: 50, opacity: 0 }, 0);
    // Animate content out
    tl.to(contentRef.current, { y: 30, opacity: 0 }, 0);

    // Animate year in
    tl.to(yearBoxRef.current, { y: -50, opacity: 0, immediateRender: false }, 0.6);
    tl.to(yearBoxRef.current, { y: 0, opacity: 1 }, 1);

    // Animate content in
    tl.to(contentRef.current, { y: -30, opacity: 0, immediateRender: false }, 0.6);
    tl.to(contentRef.current, { y: 0, opacity: 1 }, 1);
  };

  const centerYear = years[activeIndex];
  const leftYear = years[activeIndex - 1] ?? null;
  const rightYear = years[activeIndex + 1] ?? null;

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-black text-white py-16 px-4 sm:px-6 md:px-12 overflow-hidden flex flex-col"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between mb-16 relative">
        <img
          src="/assets/Logo2.png"
          alt="Logo"
          className="w-14 h-auto sm:w-[74px] object-contain"
        />
        <h3 className="text-[#405FFC] text-xl sm:text-2xl md:text-[34px] font-[600] tracking-[0.2em] sm:tracking-[0.3em] absolute left-1/2 transform -translate-x-1/2">
          Newsroom
        </h3>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 flex-1">
        {/* Left Year Section */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          {leftYear && (
            <p className="absolute -top-[10rem] left-[55%] md:left-[22rem] text-[100px] sm:text-[140px] md:text-[155px] font-extrabold text-[#2A2C6A]/40 z-0">
              {String(leftYear).slice(2)}
            </p>
          )}

          <div className="text-[70px] sm:text-[90px] md:text-[115px] font-extrabold text-[#3B5BFF] transform -skew-x-12">
            20
          </div>

          <div className="bg-[#3B5BFF] px-6 sm:px-10 py-4 sm:py-6 shadow-lg transform -skew-x-12 relative z-10 overflow-hidden">
            <h2
              ref={yearBoxRef}
              className="text-[70px] sm:text-[90px] md:text-[115px] font-extrabold text-white transform skew-x-12"
            >
              {String(centerYear).slice(2)}
            </h2>
          </div>

          {rightYear && (
            <p className="absolute -bottom-10 left-[55%] md:left-[20rem] text-[100px] sm:text-[140px] md:text-[155px] font-extrabold text-[#2A2C6A]/40 z-0">
              {String(rightYear).slice(2)}
            </p>
          )}
        </div>

        {/* Right Content Section */}
        <div ref={contentRef} className="w-full lg:w-1/2 flex flex-col gap-10">
          {newsData[centerYear].map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-700 pb-4 sm:pb-6"
            >
              <h4 className="text-base sm:text-lg md:text-xl text-white mb-2">
                {item.title}
              </h4>
              <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-[#405FFC]">
                <span>{item.location}</span>
                <span>{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Newsroom;
