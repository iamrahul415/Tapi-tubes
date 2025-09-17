import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Newsroom = () => {
  const years = [2020, 2021, 2022, 2023, 2024, 2025];
  const [activeIndex, setActiveIndex] = useState(0); // Start with first year
  const sectionRef = useRef(null);
  const twentyRef = useRef(null);
  const parallelogramRef = useRef(null);
  const yearDigitsRef = useRef(null);
  const contentRef = useRef(null);
  const contentItemsRef = useRef([]);
  const isAnimating = useRef(false);
  const scrollDirection = useRef(1);

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
          "AM/NS India launches Magnelis® – unique import substitute to power India' renewable energy transition",
        location: "Mumbai",
        date: "September 2024",
      },
      {
        title:
          "AM/NS India launches Optigal®, world-class product with longest warranty",
        location: "Mumbai",
        date: "August 2024",
      },
      {
        title:
          "ArcelorMittal Nippon Steel India renews partnership with Protean to advance 'Beti Padhao' scholarship initiative",
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

  const animateToYear = (newIndex) => {
    if (isAnimating.current || newIndex === activeIndex) return;

    isAnimating.current = true;
    const direction = scrollDirection.current;

    const tl = gsap.timeline({
      onComplete: () => {
        setActiveIndex(newIndex);
        isAnimating.current = false;
      },
    });

    // Simultaneous animation of year digits and content
    const slideDistance = direction > 0 ? -60 : 60; // Up for forward, down for backward

    // Year digits animation - slide out then in
    tl.to(yearDigitsRef.current, {
      y: slideDistance,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
    }).to(yearDigitsRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });

    // Content animation - slide out then in (simultaneous with year)
    tl.to(
      contentItemsRef.current.filter(Boolean),
      {
        y: slideDistance,
        opacity: 0,
        stagger: 0.05,
        duration: 0.4,
        ease: "power2.in",
      },
      0 // Start at the same time as year animation
    ).to(
      contentItemsRef.current.filter(Boolean),
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.5,
        ease: "power2.out",
      },
      0.4 // Start when slide-out completes
    );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the section and create scroll trigger
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${window.innerHeight * years.length}`,
        pin: true,
        anticipatePin: 1,
        scrub: 1,
        onUpdate: (self) => {
          if (isAnimating.current) return;

          const progress = self.progress;
          const segmentSize = 1 / years.length;
          let newIndex = Math.floor(progress / segmentSize);

          // Ensure we don't go beyond array bounds
          newIndex = Math.max(0, Math.min(newIndex, years.length - 1));

          // Determine scroll direction
          const currentProgress = progress;
          const prevProgress = self.prevProgress || 0;
          scrollDirection.current = currentProgress > prevProgress ? 1 : -1;
          self.prevProgress = currentProgress;

          if (newIndex !== activeIndex) {
            animateToYear(newIndex);
          }
        },
      });

      // Initial animations
      gsap.fromTo(
        twentyRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );

      gsap.fromTo(
        parallelogramRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, delay: 0.2, ease: "power3.out" }
      );

      gsap.fromTo(
        contentRef.current,
        { x: 150, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, delay: 0.4, ease: "power3.out" }
      );
    }, sectionRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, years.length]);

  // Update content when activeIndex changes
  useEffect(() => {
    const items = contentItemsRef.current.filter(Boolean);
    if (items.length > 0) {
      gsap.fromTo(
        items,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.1,
        }
      );
    }
  }, [activeIndex]);

  const currentYearData = newsData[years[activeIndex]];
  const activeYear = years[activeIndex];
  const prevYear = activeIndex > 0 ? years[activeIndex - 1] : null;
  const nextYear =activeIndex < years.length - 1 ? years[activeIndex + 1] : null;

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-gray-900 text-white overflow-hidden"
    >
      {/* Header */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
        <h1 className="text-2xl md:text-4xl font-light tracking-[0.3em] text-[#405FFC] uppercase">
          Newsroom
        </h1>
      </div>

      <div className="flex h-full items-center justify-evenly">
        {/* Left section - "20" (about 35% width) */}
        <div
          ref={twentyRef}
          className="flex-none w-[35%] flex items-center justify-end pr-4"
        >
          <div className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold text-[#405FFC] leading-none">
            20
          </div>
        </div>

        {/* Right section - Parallelogram + Content (about 65% width) */}
        <div className="flex-1 flex items-center relative h-full">
          {/* Parallelogram with year digits */}
          <div className="relative flex-none">
            <div
              ref={parallelogramRef}
              className="relative bg-[#405FFC] transform -skew-x-12 overflow-hidden"
              style={{
                width: "250px",
                height: "350px",
              }}
            >
              {/* Years container with proper stacking */}
              <div className="absolute inset-0 flex items-center justify-center transform skew-x-12">
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  {/* Previous year (behind/faded) */}
                  {prevYear && (
                    <div
                      className="absolute text-6xl md:text-[16rem] font-bold text-white opacity-20 z-0"
                      style={{ transform: "translateY(-80px)" }}
                    >
                      {String(prevYear).slice(2)}
                    </div>
                  )}

                  {/* Current year (front) */}
                  <div
                    ref={yearDigitsRef}
                    className="text-8xl md:text-[16rem] font-bold text-white z-20 relative"
                  >
                    {String(activeYear).slice(2)}
                  </div>

                  {/* Next year (behind/faded) */}
                  {nextYear && (
                    <div
                      className="absolute text-6xl md:text-[16rem] font-bold text-white opacity-20 z-0"
                      style={{ transform: "translateY(80px)" }}
                    >
                      {String(nextYear).slice(2)}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Content section */}
          <div
            ref={contentRef}
            className="flex-1 pl-8 pr-8 flex flex-col gap-6 max-h-96 overflow-hidden"
          >
            {currentYearData?.map((item, idx) => (
              <div
                key={`${activeYear}-${idx}`}
                ref={(el) => (contentItemsRef.current[idx] = el)}
                className="border-b border-gray-700 pb-4 cursor-pointer group hover:border-[#405FFC] transition-colors duration-300"
              >
                <h3 className="text-base md:text-lg font-medium text-white mb-3 leading-tight group-hover:text-[#405FFC] transition-colors duration-300">
                  {item.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="text-[#405FFC] font-medium">
                    {item.location}
                  </span>
                  <span className="text-[#405FFC]">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsroom;
