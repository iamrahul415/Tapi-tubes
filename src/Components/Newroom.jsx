import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Newsroom = () => {
  const years = [2019, 2020, 2021, 2022, 2023, 2024, 2025];
  const [activeIndex, setActiveIndex] = useState(0); // Start with 2019
  const sectionRef = useRef(null);
  const twentyRef = useRef(null);
  const parallelogramRef = useRef(null);
  const yearDigitsRef = useRef(null);
  const contentRef = useRef(null);
  const contentItemsRef = useRef([]);
  const isAnimating = useRef(false);

  const newsData = {
    2019: [
      {
        title: "Tapi Tubes establishes advanced manufacturing capabilities",
        location: "Mumbai",
        date: "December 2019",
      },
      {
        title: "Strategic expansion into new market segments",
        location: "Delhi",
        date: "September 2019",
      },
    ],
    2020: [
      {
        title: "Tapi Tubes establishes state-of-the-art manufacturing unit",
        location: "Mumbai",
        date: "February 2020",
      },
      {
        title: "Strategic partnership with leading infrastructure companies announced",
        location: "Delhi",
        date: "June 2020",
      },
      {
        title: "Launch of eco-friendly steel pipe production initiative",
        location: "Chennai",
        date: "October 2020",
      },
    ],
    2021: [
      {
        title: "Tapi Tubes expands production capacity with new facilities",
        location: "Pune",
        date: "March 2021",
      },
      {
        title: "Breakthrough in innovative tube technology introduced",
        location: "Mumbai",
        date: "July 2021",
      },
      {
        title: "Awarded recognition for environmental sustainability practices",
        location: "Bangalore",
        date: "November 2021",
      },
    ],
    2022: [
      {
        title: "Tapi Tubes introduces advanced grades of steel tubes",
        location: "Delhi",
        date: "January 2022",
      },
      {
        title: "Partnership with renewable energy projects for green steel solutions",
        location: "Chennai",
        date: "May 2022",
      },
      {
        title: "Completion of digital transformation across manufacturing units",
        location: "Mumbai",
        date: "September 2022",
      },
    ],
    2023: [
      {
        title: "New ERW pipe plant established in Chennai",
        location: "Chennai",
        date: "March 2023",
      },
      {
        title: "Tapi Tubes wins national award for innovation in steel solutions",
        location: "Mumbai",
        date: "June 2023",
      },
      {
        title: "Expansion in production capacity for structural tubes",
        location: "Delhi",
        date: "August 2023",
      },
    ],
    2024: [
      {
        title: "Tapi Tubes launches Magnelis® – unique import substitute to power India's renewable energy transition",
        location: "Mumbai",
        date: "September 2024",
      },
      {
        title: "Tapi Tubes launches Optigal®, world-class product with longest warranty",
        location: "Mumbai",
        date: "August 2024",
      },
      {
        title: "Tapi Tubes renews partnership with Protean to advance 'Beti Padhao' scholarship initiative",
        location: "Mumbai",
        date: "March 2024",
      },
    ],
    2025: [
      {
        title: "Tapi Tubes unveils next-generation steel tube solutions",
        location: "Delhi",
        date: "February 2025",
      },
      {
        title: "Achieves major milestone towards carbon-neutral steel production",
        location: "Mumbai",
        date: "June 2025",
      },
      {
        title: "Tapi Tubes announces global expansion through strategic partnerships",
        location: "Bangalore",
        date: "October 2025",
      },
    ],
  };

  const animateToYear = (newIndex) => {
    if (isAnimating.current || newIndex === activeIndex) return;

    isAnimating.current = true;
    
    const tl = gsap.timeline({
      onComplete: () => {
        setActiveIndex(newIndex);
        isAnimating.current = false;
      },
    });

    // Animate the year change with a smooth transition
    tl.to(yearDigitsRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    })
    .set(yearDigitsRef.current, {
      textContent: String(years[newIndex]).slice(2),
    })
    .to(yearDigitsRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.4,
      ease: "back.out(1.7)",
    });

    // Content animation
    tl.to(
      contentItemsRef.current.filter(Boolean),
      {
        opacity: 0,
        y: 30,
        stagger: 0.03,
        duration: 0.3,
        ease: "power2.in",
      },
      0
    ).to(
      contentItemsRef.current.filter(Boolean),
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.4,
        ease: "power2.out",
      },
      0.4
    );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ScrollTrigger
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${window.innerHeight * years.length}`,
        pin: true,
        anticipatePin: 1,
        scrub: 0.3,
        onUpdate: (self) => {
          if (isAnimating.current) return;

          const progress = self.progress;
          const segmentSize = 1 / years.length;
          let newIndex = Math.floor(progress / segmentSize);

          newIndex = Math.max(0, Math.min(newIndex, years.length - 1));

          if (newIndex !== activeIndex) {
            animateToYear(newIndex);
          }
        },
      });

      // Initial entrance animations
      const entranceTL = gsap.timeline();
      
      entranceTL
        .fromTo(
          twentyRef.current,
          { x: -150, opacity: 0, scale: 0.9 },
          { x: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }
        )
        .fromTo(
          parallelogramRef.current,
          { x: 200, opacity: 0, rotationY: 15 },
          { x: 0, opacity: 1, rotationY: 0, duration: 1.5, ease: "power3.out" },
          "-=1.2"
        )
        .fromTo(
          contentRef.current,
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
          "-=1"
        );

    }, sectionRef);

    return () => ctx.revert();
  }, [activeIndex, years.length]);

  // Update content when activeIndex changes
  useEffect(() => {
    const items = contentItemsRef.current.filter(Boolean);
    if (items.length > 0 && !isAnimating.current) {
      gsap.fromTo(
        items,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          delay: 0.1,
        }
      );
    }
  }, [activeIndex]);

  const currentYearData = newsData[years[activeIndex]];
  const activeYear = years[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-gray-900 text-white overflow-hidden"
    >
      {/* Header */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
        <h1 className="text-2xl md:text-4xl font-light tracking-[0.3em] text-[#405FFC] uppercase">
          Newsroom
        </h1>
      </div>

      <div className="relative z-10 flex h-full items-center">
        {/* Left side - Large "20" */}
        <div className="flex-none flex items-center justify-end pr-8">
          <span 
            ref={twentyRef}
            className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold text-[#405FFC] leading-none select-none"
          >
            20
          </span>
        </div>

        {/* Center - Parallelogram with full year */}
        <div className="flex-none relative">
          <div
            ref={parallelogramRef}
            className="relative bg-[#405FFC] overflow-hidden"
            style={{
              width: "400px",
              height: "600px",
              transform: "skewX(-15deg)",
            }}
          >
            {/* Year display - showing full year like "21" */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                ref={yearDigitsRef}
                className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold text-white leading-none"
                style={{ 
                  transform: "skewX(15deg)",
                  textShadow: "0 4px 30px rgba(0,0,0,0.5)"
                }}
              >
                {String(activeYear).slice(2)}
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div
          ref={contentRef}
          className="flex-1 pl-12 pr-8 max-w-3xl"
        >
          <div className="space-y-8">
            {currentYearData?.map((item, idx) => (
              <div
                key={`${activeYear}-${idx}`}
                ref={(el) => (contentItemsRef.current[idx] = el)}
                className="group pb-6 cursor-pointer transition-all duration-300"
              >
                <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-4 leading-tight group-hover:text-[#405FFC] transition-colors duration-300">
                  {item.title}
                </h3>
                <div className="flex flex-wrap gap-6 text-base">
                  <span className="text-[#405FFC] font-medium">
                    {item.location}
                  </span>
                  <span className="text-[#405FFC] font-medium">
                    {item.date}
                  </span>
                </div>
                {idx < currentYearData.length - 1 && (
                  <div className="mt-6 h-px bg-gradient-to-r from-gray-700 via-gray-600 to-transparent"></div>
                )}
              </div>
            ))}

            {/* View All Button */}
            <div className="mt-10">
              <button className="group relative overflow-hidden bg-[#405FFC] hover:bg-[#364dc9] text-white px-8 py-4 font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10">VIEW ALL</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {years.map((year, idx) => (
          <div
            key={year}
            className={`transition-all duration-300 rounded-full ${
              idx === activeIndex 
                ? 'bg-[#405FFC] w-10 h-4' 
                : 'bg-gray-600 w-4 h-4 hover:bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Newsroom;