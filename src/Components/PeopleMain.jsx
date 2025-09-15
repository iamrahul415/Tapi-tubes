import { useState, useEffect, useRef } from "react";

const profiles = [
  {
    id: "manager",
    name: "Manager Rahul Paswan",
    role: "MANAGER",
    img: "/assets/ManagerImg.jpg",
    type: "square",
    content: `The visionary behind TapiTubes Ltd., established the company with a mission to provide high-quality steel tubes and pipes that meet the evolving demands of industries and infrastructure. With a strong background in metallurgy, engineering, and business leadership, [Founder’s Name] combined technical expertise with an entrepreneurial spirit to build a brand that stands for strength, reliability, and trust.
    Under his leadership, TapiTubes has grown from a promising idea into a respected name in the steel industry, known for precision engineering, consistency, and customer-centric values. His commitment to innovation, quality, and sustainability continues to guide the company’s growth and ensures that TapiTubes remains a reliable partner for industries worldwide.`,
  },
  {
    id: "founder",
    name: "Founder Mohit Singh",
    role: "FOUNDER",
    img: "/assets/FounderImg.png",
    type: "square",
    content: `The visionary behind TapiTubes Ltd., established the company with a mission to provide high-quality steel tubes and pipes that meet the evolving demands of industries and infrastructure. With a strong background in metallurgy, engineering, and business leadership, [Founder’s Name] combined technical expertise with an entrepreneurial spirit to build a brand that stands for strength, reliability, and trust.
    Under his leadership, TapiTubes has grown from a promising idea into a respected name in the steel industry, known for precision engineering, consistency, and customer-centric values. His commitment to innovation, quality, and sustainability continues to guide the company’s growth and ensures that TapiTubes remains a reliable partner for industries worldwide.`,
  },
  {
    id: "cfo",
    name: "CFO Nikhil Thorry",
    role: "CFO",
    img: "/assets/CFOImg.png",
    type: "square",
    content: `The visionary behind TapiTubes Ltd., established the company with a mission to provide high-quality steel tubes and pipes that meet the evolving demands of industries and infrastructure. With a strong background in metallurgy, engineering, and business leadership, [Founder’s Name] combined technical expertise with an entrepreneurial spirit to build a brand that stands for strength, reliability, and trust.
    Under his leadership, TapiTubes has grown from a promising idea into a respected name in the steel industry, known for precision engineering, consistency, and customer-centric values. His commitment to innovation, quality, and sustainability continues to guide the company’s growth and ensures that TapiTubes remains a reliable partner for industries worldwide.`,
  },
];

function PeopleMain() {
  const [activeIndex, setActiveIndex] = useState(1); // Default Founder
  const [paused, setPaused] = useState(false); // pause state
  const cardRefs = useRef({});
  const textRef = useRef(null);
  const imageRef = useRef(null);

  // Auto change every 2s, but only if not paused
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % profiles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [paused]);

  const getDisplayOrder = () => {
    const total = profiles.length;
    const left = (activeIndex - 1 + total) % total;
    const right = (activeIndex + 1) % total;
    return [left, activeIndex, right];
  };

  const displayOrder = getDisplayOrder();

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    displayOrder.forEach((profileIndex, position) => {
      const profileId = profiles[profileIndex].id;
      if (cardRefs.current[profileId]) {
        const card = cardRefs.current[profileId];
        const isCenter = position === 1;

        card.style.transform = `scale(${isCenter ? 1.05 : 0.85}) translateY(${
          isCenter ? "-15px" : "0px"
        })`;
        card.style.transition = "transform 0.6s ease-in-out";
        card.style.zIndex = isCenter ? "10" : "0";
      }
    });

    if (textRef.current && imageRef.current) {
      textRef.current.style.opacity = "0";
      imageRef.current.style.opacity = "0";

      setTimeout(() => {
        textRef.current.style.transition =
          "opacity 0.8s ease-out, transform 0.8s ease-out";
        imageRef.current.style.transition =
          "opacity 0.8s ease-out, transform 0.8s ease-out";

        textRef.current.style.opacity = "1";
        imageRef.current.style.opacity = "1";
      }, 150);
    }
  });

  const activeProfile = profiles[activeIndex];

  return (
    <section
      className="bg-black text-white px-4 py-12 md:px-12 flex flex-col items-center min-h-screen"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Top Profiles */}
      <div className="flex justify-center items-end gap-6">
        {displayOrder.map((profileIndex, position) => {
          const profile = profiles[profileIndex];
          const isCenter = position === 1;
          return (
            <div
              key={profile.id}
              ref={(el) => (cardRefs.current[profile.id] = el)}
              onClick={() => handleClick(profileIndex)}
              className={`relative flex flex-col items-center bg-black border border-blue-500 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                isCenter ? "w-64 h-[340px]" : "w-44 h-60"
              }`}
              style={{
                transform: `scale(${isCenter ? 1.05 : 0.85}) translateY(${
                  isCenter ? "-15px" : "0px"
                })`,
                zIndex: isCenter ? 10 : 0,
              }}
            >
              {/* Image */}
              <img
                src={profile.img}
                alt={profile.role}
                className="object-cover w-full h-full rounded-2xl"
              />

              {/* Role Label */}
              <span
                className={`absolute bottom-[1.5rem] left-[-0.5rem] px-3 py-1 rounded text-white text-sm font-semibold ${
                  profile.role === "FOUNDER" ? "bg-blue-600" : "bg-blue-500"
                }`}
              >
                {profile.role}
              </span>
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="flex justify-center space-x-2 mt-6">
        {profiles.map((_, index) => (
          <span
            key={index}
            onClick={() => handleClick(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
              activeIndex === index ? "bg-blue-500" : "bg-gray-500"
            }`}
          ></span>
        ))}
      </div>

      {/* Bottom Active Profile Content */}
      <div
        key={activeProfile.id}
        className="mt-14 max-w-5xl mx-auto rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-[1.02] 
             border border-transparent hover:border-blue-500 shadow-lg hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.6)]"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center p-8 bg-gray-900/60 rounded-2xl">
          {/* Text */}
          <div ref={textRef} className="text-left">
            <h2 className="text-4xl md:text-5xl font-normal font-inspiration text-center mb-6">
              {activeProfile.name}
            </h2>
            <p className="text-gray-300 leading-relaxed text-justify">
              {activeProfile.content}
            </p>
          </div>

          {/* Image */}
          <div ref={imageRef} className="flex justify-center md:justify-end">
            <img
              src={activeProfile.img}
              alt={activeProfile.name}
              className="w-80 h-[420px] object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PeopleMain;
