import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Newsroom = () => {
  const years = [2020, 2021, 2022, 2023, 2024, 2025];
  const currentYear = new Date().getFullYear();
  const initialIndex = years.includes(currentYear)
    ? years.indexOf(currentYear)
    : years.length - 1; // Default to 2025 if current year not in range

  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const sectionRef = useRef(null);
  const yearContainerRef = useRef(null);
  const contentRef = useRef(null);
  const contentItemsRef = useRef([]);
  const digitWheelRef = useRef(null);
  const isAnimating = useRef(false);

  const newsData = {
    2020: [
      {
        title: "Tapi Tubes establishes state-of-the-art manufacturing unit",
        location: "Mumbai",
        date: "February 2020",
      },
      {
        title:
          "Strategic partnership with leading infrastructure companies announced",
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
        title:
          "Partnership with renewable energy projects for green steel solutions",
        location: "Chennai",
        date: "May 2022",
      },
      {
        title:
          "Completion of digital transformation across manufacturing units",
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
        title:
          "Tapi Tubes wins national award for innovation in steel solutions",
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
        title:
          "Tapi Tubes launches Magnelis® - unique import substitute to power India’s renewable energy transition",
        location: "Mumbai",
        date: "September 2024",
      },
      {
        title:
          "Tapi Tubes introduces Optigal® – world-class product with industry-leading warranty",
        location: "Mumbai",
        date: "August 2024",
      },
      {
        title:
          "Tapi Tubes renews partnership with Protean to advance 'Beti Padhao' scholarship initiative",
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
        title:
          "Achieves major milestone towards carbon-neutral steel production",
        location: "Mumbai",
        date: "June 2025",
      },
      {
        title:
          "Tapi Tubes announces global expansion through strategic partnerships",
        location: "Bangalore",
        date: "October 2025",
      },
    ],
  };

  // One-direction navigation function
  const getNextIndex = (currentIndex) => (currentIndex + 1) % years.length;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalScrollLength = window.innerHeight * 3; // Increased scroll length for smoother control

      // Initial animation on mount
      gsap.fromTo(
        yearContainerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.2, ease: "power3.out" }
      );

      gsap.fromTo(
        contentRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" }
      );

      const scrollTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${totalScrollLength}`,
        scrub: 0.8,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          if (isAnimating.current) return;

          // Calculate progress and trigger year changes (one direction only)
          const progress = self.progress;
          const segmentSize = 1 / years.length;
          const currentSegment = Math.floor(progress / segmentSize);

          // Only move forward when crossing segment boundaries
          if (currentSegment !== activeIndex && currentSegment < years.length) {
            animateYearChange(currentSegment);
          }
        },
      });

      return () => scrollTrigger.kill();
    }, sectionRef);

    return () => ctx.revert();
  }, [activeIndex, years.length]);

  const animateYearChange = (newIndex) => {
    if (isAnimating.current || newIndex === activeIndex) return;

    isAnimating.current = true;

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        setActiveIndex(newIndex);
        isAnimating.current = false;
      },
    });

    // Wheel rotation animation for last 2 digits
    tl.to(digitWheelRef.current, {
      y: -100, // Move current digit up
      opacity: 0,
      duration: 0.4,
    }).to(digitWheelRef.current, {
      y: 0, // Bring new digit from bottom
      opacity: 1,
      duration: 0.4,
      ease: "back.out(1.2)",
    });

    // Content wheel-like rotation animation
    tl.to(
      contentItemsRef.current,
      {
        rotationX: -20,
        y: -30,
        opacity: 0,
        stagger: 0.05,
        duration: 0.3,
      },
      0
    ).to(
      contentItemsRef.current,
      {
        rotationX: 0,
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.6,
        ease: "back.out(1.1)",
      },
      0.4
    );
  };

  // Animate content items when activeIndex changes
  useEffect(() => {
    const items = contentItemsRef.current.filter(Boolean);
    if (items.length > 0) {
      gsap.fromTo(
        items,
        {
          y: 30,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }
  }, [activeIndex]);

  const currentYearData = newsData[years[activeIndex]];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-black text-white py-16 px-4 sm:px-6 md:px-12 overflow-hidden"
      style={{ willChange: "transform" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-16 relative">
        <img
          src="/assets/Logo2.png"
          alt="Logo"
          className="w-14 h-auto sm:w-[74px] object-contain"
        />
        <h3 className="text-[#405FFC] text-xl sm:text-2xl md:text-[34px] font-[400] tracking-[0.2em] absolute left-1/2 transform -translate-x-1/2 uppercase">
          Newsroom
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 flex-1">
        {/* Left Year Section with wheel rotation effect */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          <div
            ref={yearContainerRef}
            className="relative flex items-center"
            style={{ willChange: "transform" }}
          >
            {/* "20" - Outside the parallelogram */}
            <div className="text-[120px] sm:text-[140px] md:text-[160px] font-extrabold text-white leading-none mr-[-30px] z-10">
              20
            </div>

            {/* Red Parallelogram Background with wheel effect for last 2 digits */}
            <div
              className="relative bg-[#405FFC] transform -skew-x-12 shadow-2xl overflow-hidden"
              style={{
                width: "255px",
                height: "280px",
              }}
            >
              {/* Digit Wheel Container */}
              <div className="absolute inset-0 flex items-center justify-center transform skew-x-12">
                <div className="relative overflow-hidden h-[200px] flex items-center">
                  {/* Previous Year Digit - Faded and Behind */}
                  {activeIndex > 0 && (
                    <div className="absolute text-[120px] sm:text-[140px] md:text-[160px] font-extrabold text-white/30 leading-none transform translate-y-[-120px] z-0">
                      {String(years[activeIndex - 1]).slice(2)}
                    </div>
                  )}

                  {/* Current Year Digit */}
                  <div
                    ref={digitWheelRef}
                    className="text-[120px] sm:text-[140px] md:text-[160px] font-extrabold text-white leading-none z-10"
                    style={{ willChange: "transform" }}
                  >
                    {String(years[activeIndex]).slice(2)}
                  </div>

                  {/* Next Year Digit - Faded and Behind */}
                  {activeIndex < years.length - 1 && (
                    <div className="absolute text-[120px] sm:text-[140px] md:text-[160px] font-extrabold text-white/30 leading-none transform translate-y-[120px] z-0">
                      {String(years[activeIndex + 1]).slice(2)}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div ref={contentRef} className="w-full lg:w-1/2 flex flex-col gap-8">
          {currentYearData?.map((item, idx) => (
            <div
              key={`${years[activeIndex]}-${idx}`}
              ref={(el) => (contentItemsRef.current[idx] = el)}
              className="border-b border-gray-700 pb-6 transform transition-all duration-300 hover:border-[#405FFC] cursor-pointer group"
              style={{ willChange: "transform, opacity" }}
            >
              <h4 className="text-lg sm:text-xl md:text-2xl text-white mb-4 font-medium leading-relaxed group-hover:text-[#405FFC] transition-colors duration-300">
                {item.title}
              </h4>
              <div className="flex flex-wrap gap-6 text-sm">
                <span className="text-[#405FFC] font-semibold">
                  {item.location}
                </span>
                <span className="text-[#405FFC]">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Newsroom;
