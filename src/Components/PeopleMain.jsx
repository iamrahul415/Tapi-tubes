import { useState, useEffect, useRef } from "react";

const profiles = [
  {
    id: "manager",
    name: "Manager Rahul Paswan",
    role: "Manager",
    img: "/assets/ManagerImg.jpg",
    type: "square",
    content: `The visionary behind TapiTubes Ltd., established the company with a mission to provide high-quality steel tubes and pipes that meet the evolving demands of industries and infrastructure. With a strong background in metallurgy, engineering, and business leadership, [Founder's Name] combined technical expertise with an entrepreneurial spirit to build a brand that stands for strength, reliability, and trust.
    Under his leadership, TapiTubes has grown from a promising idea into a respected name in the steel industry, known for precision engineering, consistency, and customer-centric values. His commitment to innovation, quality, and sustainability continues to guide the company's growth and ensures that TapiTubes remains a reliable partner for industries worldwide.`,
  },
  {
    id: "founder",
    name: "Founder Mohit Singh",
    role: "FOUNDER",
    img: "/assets/FounderImg.png",
    type: "square",
    content: `The visionary behind TapiTubes Ltd., established the company with a mission to provide high-quality steel tubes and pipes that meet the evolving demands of industries and infrastructure. With a strong background in metallurgy, engineering, and business leadership, [Founder's Name] combined technical expertise with an entrepreneurial spirit to build a brand that stands for strength, reliability, and trust.
    Under his leadership, TapiTubes has grown from a promising idea into a respected name in the steel industry, known for precision engineering, consistency, and customer-centric values. His commitment to innovation, quality, and sustainability continues to guide the company's growth and ensures that TapiTubes remains a reliable partner for industries worldwide.`,
  },
  {
    id: "cfo",
    name: "CFO Nikhil Thorry",
    role: "CFO",
    img: "/assets/CFOImg.png",
    type: "square",
    content: `The visionary behind TapiTubes Ltd., established the company with a mission to provide high-quality steel tubes and pipes that meet the evolving demands of industries and infrastructure. With a strong background in metallurgy, engineering, and business leadership, [Founder's Name] combined technical expertise with an entrepreneurial spirit to build a brand that stands for strength, reliability, and trust.
    Under his leadership, TapiTubes has grown from a promising idea into a respected name in the steel industry, known for precision engineering, consistency, and customer-centric values. His commitment to innovation, quality, and sustainability continues to guide the company's growth and ensures that TapiTubes remains a reliable partner for industries worldwide.`,
  },
];

function PeopleMain() {
  const [activeIndex, setActiveIndex] = useState(1); // default Founder (center)
  const [displayOrder, setDisplayOrder] = useState([0, 1, 2]); // initial order
  const cardRefs = useRef({});
  const textRef = useRef(null);
  const imageRef = useRef(null);

  // Function to create circular array rotation
  const rotateToCenter = (clickedIndex) => {
    // const totalProfiles = profiles.length;
    const centerPosition = 1; // middle position
    
    // Calculate how many steps to rotate to bring clicked item to center
    const currentClickedPosition = displayOrder.indexOf(clickedIndex);
    const stepsToRotate = currentClickedPosition - centerPosition;
    
    // Create new order by rotating the array
    const newOrder = [...displayOrder];
    if (stepsToRotate > 0) {
      // Rotate right
      for (let i = 0; i < stepsToRotate; i++) {
        const last = newOrder.pop();
        newOrder.unshift(last);
      }
    } else if (stepsToRotate < 0) {
      // Rotate left
      for (let i = 0; i < Math.abs(stepsToRotate); i++) {
        const first = newOrder.shift();
        newOrder.push(first);
      }
    }
    
    setDisplayOrder(newOrder);
    setActiveIndex(clickedIndex);
  };

  // GSAP-like animations using CSS transitions
  useEffect(() => {
    displayOrder.forEach((profileIndex, position) => {
      const profileId = profiles[profileIndex].id;
      if (cardRefs.current[profileId]) {
        const card = cardRefs.current[profileId];
        const isCenter = position === 1;
        
        // Apply transformations
        card.style.transform = `scale(${isCenter ? 1 : 0.9}) translateY(${isCenter ? '-10px' : '0px'})`;
        card.style.transition = 'transform 0.5s ease-out';
        card.style.zIndex = isCenter ? '10' : '0';
      }
    });

    // Animate content change
    if (textRef.current && imageRef.current) {
      textRef.current.style.opacity = '0';
      textRef.current.style.transform = 'translateX(-50px)';
      imageRef.current.style.opacity = '0';
      imageRef.current.style.transform = 'translateX(50px)';
      
      setTimeout(() => {
        textRef.current.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        imageRef.current.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        textRef.current.style.opacity = '1';
        textRef.current.style.transform = 'translateX(0)';
        imageRef.current.style.opacity = '1';
        imageRef.current.style.transform = 'translateX(0)';
      }, 100);
    }
  }, [displayOrder, activeIndex]);

  const activeProfile = profiles[activeIndex];

  return (
    <section className="bg-black text-white px-4 py-12 md:px-12 flex flex-col items-center min-h-screen">
      {/* Top Profiles - Circular arrangement */}
      <div className="flex justify-center items-end gap-8">
        {displayOrder.map((profileIndex, position) => {
          const profile = profiles[profileIndex];
          const isCenter = position === 1;
          return (
            <div
              key={profile.id}
              ref={(el) => (cardRefs.current[profile.id] = el)}
              onClick={() => rotateToCenter(profileIndex)}
              className={`relative flex flex-col items-center bg-black border border-blue-500 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                isCenter ? "w-72 h-[420px]" : "w-52 h-72"
              }`}
              style={{
                transform: `scale(${isCenter ? 1 : 0.9}) translateY(${isCenter ? '-10px' : '0px'})`,
                zIndex: isCenter ? 10 : 0
              }}
            >
              {/* Image */}
              <img
                src={profile.img}
                alt={profile.role}
                className={`object-cover w-full h-full ${
                  profile.type === "circle" ? "rounded-full" : "rounded-2xl"
                }`}
                onError={(e) => {
                  e.target.src = `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face`;
                }}
              />

              {/* Role Label (inside border, bottom-left) */}
              <span
                className={`absolute bottom-[1.5rem] left-[-0.5rem] px-3 py-1 rounded-[0.375rem] text-white text-sm font-semibold ${
                  profile.role === "FOUNDER" ? "bg-blue-600" : "bg-blue-500"
                }`}
              >
                {profile.role}
              </span>
            </div>
          );
        })}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-6">
        {profiles.map((_, index) => (
          <span
            key={index}
            onClick={() => rotateToCenter(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
              activeIndex === index ? "bg-blue-500" : "bg-gray-500"
            }`}
          ></span>
        ))}
      </div>

      {/* Active Profile Content */}
      <div
        key={activeProfile.id}
        className="mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Text */}
        <div ref={textRef} className="text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
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
            className={`w-80 h-96 object-cover ${
              activeProfile.type === "circle" ? "rounded-full" : "rounded-xl"
            }`}
            onError={(e) => {
              e.target.src = `https://images.unsplash.com/photo-${
                activeProfile.id === 'manager' ? '1472099645785-5658abf4ff4e' : 
                activeProfile.id === 'founder' ? '1507003211169-0a1dd7bf7042' : 
                '1560250097-0b93528c311a'
              }?w=400&h=500&fit=crop&crop=face`;
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default PeopleMain;
