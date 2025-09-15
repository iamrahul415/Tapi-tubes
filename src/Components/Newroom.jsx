import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Newsroom = () => {
  const years = [2023, 2024, 2025];
  const currentYear = new Date().getFullYear();
  const initialIndex = years.includes(currentYear)
    ? years.indexOf(currentYear)
    : years.length - 1;

  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const sectionRef = useRef(null);
  const yearBoxRef = useRef(null);
  const contentRef = useRef(null);
  const prevYearRef = useRef(null);
  const nextYearRef = useRef(null);
  const lastActiveIndex = useRef(activeIndex);

  const newsData = {
    2023: [
      { title: "New plant setup in Chennai", location: "Chennai", date: "Mar 2023" },
      { title: "Steel innovation award received", location: "Mumbai", date: "Jun 2023" },
      { title: "Capacity expansion for ERW tubes", location: "Delhi", date: "Aug 2023" },
    ],
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
      const totalScrollLength = window.innerHeight * years.length; // total scroll length proportional to number of years

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${totalScrollLength}`,
        scrub: 0.5,
        pin: true, // ✅ pin the whole section
        onUpdate: (self) => {
          const progress = gsap.utils.clamp(0, 1, self.progress);
          const index = Math.floor(progress * years.length);
          if (index !== lastActiveIndex.current && index < years.length) {
            animateYearChange(index);
            lastActiveIndex.current = index;
          }

          // Animate previous/next year positions and scales
          if (prevYearRef.current) {
            gsap.to(prevYearRef.current, {
              y: -50 + progress * 50,
              scale: 0.8 + 0.2 * progress,
              opacity: 0.4 + 0.6 * (1 - progress),
              duration: 0.3,
            });
          }
          if (nextYearRef.current) {
            gsap.to(nextYearRef.current, {
              y: 50 - progress * 50,
              scale: 0.8 + 0.2 * progress,
              opacity: 0.4 + 0.6 * (1 - progress),
              duration: 0.3,
            });
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const animateYearChange = (newIndex) => {
    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power2.out" },
      onComplete: () => setActiveIndex(newIndex),
    });

    tl.to(yearBoxRef.current, { y: -50, opacity: 0 });
    tl.to(contentRef.current, { y: 30, opacity: 0 }, "<");

    tl.to(yearBoxRef.current, { y: 0, opacity: 1 });
    tl.to(contentRef.current, { y: 0, opacity: 1 }, "<");
  };

  const centerYear = years[activeIndex];
  const prevYear = years[activeIndex - 1] ?? null;
  const nextYear = years[activeIndex + 1] ?? null;

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-black text-white py-16 px-4 sm:px-6 md:px-12 overflow-hidden flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-16 relative">
        <img src="/assets/Logo2.png" alt="Logo" className="w-14 h-auto sm:w-[74px] object-contain" />
        <h3 className="text-[#405FFC] text-xl sm:text-2xl md:text-[34px] font-[600] tracking-[0.2em] sm:tracking-[0.3em] absolute left-1/2 transform -translate-x-1/2">
          Newsroom
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 flex-1">
        {/* Left Year Section */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          {/* Previous Year Faded */}
          {prevYear && (
            <p
              ref={prevYearRef}
              className="absolute -top-28 left-[23.25rem] text-[80px] sm:text-[120px] md:text-[140px] font-extrabold text-[#2A2C6A]/40 z-0 scale-90"
            >
              {String(prevYear).slice(2)}
            </p>
          )}

          {/* Main "20" */}
          <div className="text-[70px] sm:text-[90px] md:text-[115px] font-extrabold text-[#3B5BFF] transform -skew-x-12">
            20
          </div>

          {/* Active Year */}
          <div className="bg-[#3B5BFF] px-6 sm:px-10 py-4 sm:py-6 shadow-lg transform -skew-x-12 relative z-10 overflow-hidden">
            <h2
              ref={yearBoxRef}
              className="text-[70px] sm:text-[90px] md:text-[115px] font-extrabold text-white transform skew-x-12"
            >
              {String(centerYear).slice(2)}
            </h2>
          </div>

          {/* Next Year Faded */}
          {nextYear && (
            <p
              ref={nextYearRef}
              className="absolute bottom-[-6rem] left-[21.25rem] text-[80px] sm:text-[120px] md:text-[140px] font-extrabold text-[#2A2C6A]/40 z-0 scale-90"
            >
              {String(nextYear).slice(2)}
            </p>
          )}
        </div>

        {/* Right Content Section */}
        <div ref={contentRef} className="w-full lg:w-1/2 flex flex-col gap-10">
          {newsData[centerYear]?.map((item, idx) => (
            <div key={idx} className="border-b border-gray-700 pb-4 sm:pb-6">
              <h4 className="text-base sm:text-lg md:text-xl text-white mb-2">{item.title}</h4>
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
