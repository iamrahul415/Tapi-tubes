import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback } from "react";

gsap.registerPlugin(ScrollTrigger);

const Newsroom = () => {
  const years = [2024, 2025];
  const [activeIndex, setActiveIndex] = useState(years.length - 1); // Start with latest year
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const sectionRef = useRef(null);
  const yearRef = useRef(null);
  const shapeRef = useRef(null);
  const contentRef = useRef(null);
  const contentItemsRef = useRef([]);
  const isAnimating = useRef(false);

  // 📏 Track window size for responsive shape
  useEffect(() => {
    const updateSize = () =>
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // 📰 News Data
  const newsData = {
    2024: [
      {
        title:
          "Tapi Tubes launches advanced ERW technology to power India’s infrastructure.",
        location: "Mumbai",
        date: "September 2024",
      },
      {
        title:
          "Tapi Tubes launches premium grade tubes, world-class product with enhanced durability.",
        location: "Mumbai",
        date: "August 2024",
      },
      {
        title:
          "Tapi Tubes expands partnership network to advance sustainable steel manufacturing initiatives.",
        location: "Mumbai",
        date: "March 2024",
      },
    ],
    2025: [
      {
        title:
          "Tapi Tubes unveils next-generation steel tube solutions for modern infrastructure challenges.",
        location: "Delhi",
        date: "February 2025",
      },
      {
        title:
          "Achieves major milestone towards carbon-neutral steel production with innovative green technology.",
        location: "Mumbai",
        date: "June 2025",
      },
      {
        title:
          "Tapi Tubes announces global expansion through strategic partnerships and international collaborations.",
        location: "Bangalore",
        date: "October 2025",
      },
    ],
  };

  const animateToYear = useCallback(
    (newIndex) => {
      if (isAnimating.current || newIndex === activeIndex) return;

      isAnimating.current = true;

      const tl = gsap.timeline({
        onComplete: () => {
          setActiveIndex(newIndex);
          isAnimating.current = false;
        },
      });

      // Animate shape
      tl.to(shapeRef.current, {
        scaleX: 1,
        duration: 0.4,
        ease: "back.out(1.7)",
      });

      // Animate content
      const items = contentItemsRef.current.filter(Boolean);
      tl.to(
        items,
        {
          opacity: 0,
          x: 30,
          stagger: 0.05,
          duration: 0.3,
          ease: "power2.in",
        },
        0
      ).to(
        items,
        {
          opacity: 1,
          x: 0,
          stagger: 0.08,
          duration: 0.5,
          ease: "power2.out",
        },
        0.4
      );
    },
    [activeIndex]
  );

  // 🎬 ScrollTrigger setup
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${window.innerHeight * years.length}`,
        pin: true,
        anticipatePin: 1,
        scrub: 0.5,
        onUpdate: (self) => {
          if (isAnimating.current) return;

          const progress = self.progress;
          const segmentSize = 1 / years.length;
          let newIndex = Math.floor(progress / segmentSize);

          newIndex =
            years.length -
            1 -
            Math.max(0, Math.min(newIndex, years.length - 1));

          if (newIndex !== activeIndex) animateToYear(newIndex);
        },
      });

      // Initial entrance animations
      gsap
        .timeline()
        .fromTo(
          yearRef.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out" }
        )
        .fromTo(
          shapeRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 1.5, ease: "power3.out" },
          "-=0.8"
        )
        .fromTo(
          contentRef.current,
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.5"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeIndex, animateToYear, years.length]);

  // Update content animations when active year changes
  useEffect(() => {
    const items = contentItemsRef.current.filter(Boolean);
    if (items.length > 0 && !isAnimating.current) {
      gsap.fromTo(
        items,
        { x: 20, opacity: 0 },
        {
          x: 0,
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

  // 📐 Responsive shape size
  const shapeStyle = (() => {
    const w = dimensions.width;
    if (w < 768) return { width: "280px", height: "200px" };
    if (w < 1024) return { width: "350px", height: "250px", left: "-40px" };
    return { width: "450px", height: "300px" };
  })();

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-black text-white overflow-hidden"
    >
      {/* Header */}
      <div className="absolute top-8 md:top-12 left-1/2 -translate-x-1/2 z-20">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-medium tracking-[0.3em] md:tracking-[0.4em] text-[#405FFC] uppercase">
          Newsroom
        </h1>
      </div>

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="w-full max-w-7xl px-4 md:px-8 flex flex-col lg:flex-row lg:gap-[7.75rem] items-center">
          {/* Left side - Year with shape */}
          <div className="flex-none relative mb-[2rem] lg:mb-0 lg:mr-16">
            <div
              ref={shapeRef}
              className="absolute inset-0 bg-[#405FFC]"
              style={{
                ...shapeStyle,
                top: "50%",
                transform: "translateY(-50%) skewX(-15deg)",
              }}
            />
            <div
              className="relative z-10 flex items-center justify-center"
              style={{
                width: shapeStyle.width,
                height: `calc(${shapeStyle.height} + 80px)`,
              }}
            >
              <span
                ref={yearRef}
                className="text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-bold text-white leading-none select-none"
                style={{ textShadow: "0 4px 30px rgba(0,0,0,0.3)" }}
              >
                {activeYear}
              </span>
            </div>
          </div>

          {/* Right side - Content */}
          <div ref={contentRef} className="flex-1 max-w-3xl w-full">
            <div className="space-y-6 md:space-y-8 lg:space-y-12">
              {(() => {
                contentItemsRef.current = []; // 🔥 reset refs on every render
                return currentYearData?.map((item, idx) => (
                  <div
                    key={`${activeYear}-${idx}`}
                    ref={(el) => {
                      if (el) contentItemsRef.current[idx] = el;
                    }}
                    className="group select-none transition-all duration-300"
                  >
                    <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-normal mb-3 md:mb-4 lg:mb-6 leading-relaxed group-hover:text-[#405FFC] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 text-xs md:text-sm">
                      <span className="text-[#405FFC] font-medium">
                        {item.location}
                      </span>
                      <span className="text-[#405FFC] font-medium">
                        {item.date}
                      </span>
                    </div>
                    {idx < currentYearData.length - 1 && (
                      <div className="mt-4 md:mt-6 lg:mt-8 h-px bg-gradient-to-r from-gray-700 via-gray-600 to-transparent"></div>
                    )}
                  </div>
                ));
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsroom;
