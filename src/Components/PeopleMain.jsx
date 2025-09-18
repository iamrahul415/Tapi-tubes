import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { 
  fetchTeamMembers, 
  selectTeamMembers, 
  selectTeamLoading, 
  selectTeamError 
} from '../redux/personSlice';

function PeopleMain() {
  const dispatch = useDispatch();
  const teamMembers = useSelector(selectTeamMembers);
  const loading = useSelector(selectTeamLoading);
  const error = useSelector(selectTeamError);

  const [activeIndex, setActiveIndex] = useState(0); // Start with first member
  const [paused, setPaused] = useState(false); // pause state
  const cardRefs = useRef({});
  const textRef = useRef(null);
  const imageRef = useRef(null);

  // Fetch team members on component mount
  useEffect(() => {
    dispatch(fetchTeamMembers());
  }, [dispatch]);

  // Auto change every 2s, but only if not paused and we have team members
  useEffect(() => {
    if (paused || teamMembers.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % teamMembers.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [paused, teamMembers.length]);

  const getDisplayOrder = () => {
    if (teamMembers.length === 0) return [];
    const total = teamMembers.length;
    const left = (activeIndex - 1 + total) % total;
    const right = (activeIndex + 1) % total;
    return [left, activeIndex, right];
  };

  const displayOrder = getDisplayOrder();

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (teamMembers.length === 0) return;

    displayOrder.forEach((memberIndex, position) => {
      const memberId = teamMembers[memberIndex]._id;
      if (cardRefs.current[memberId]) {
        const card = cardRefs.current[memberId];
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

  // Loading state
  if (loading) {
    return (
      <section className="bg-black text-white px-4 py-12 md:px-12 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-xl">Loading team members...</p>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="bg-black text-white px-4 py-12 md:px-12 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <p className="text-xl text-red-400">Error loading team members: {error}</p>
          <button 
            onClick={() => dispatch(fetchTeamMembers())}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  // No team members state
  if (teamMembers.length === 0) {
    return (
      <section className="bg-black text-white px-4 py-12 md:px-12 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-xl">No team members found.</p>
        </div>
      </section>
    );
  }

  const activeProfile = teamMembers[activeIndex];

  return (
    <section
      className="bg-black text-white px-4 py-12 md:px-12 flex flex-col items-center min-h-screen"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Top Profiles */}
      <div className="flex justify-center items-end gap-6">
        {displayOrder.map((memberIndex, position) => {
          const member = teamMembers[memberIndex];
          const isCenter = position === 1;
          return (
            <div
              key={member._id}
              ref={(el) => (cardRefs.current[member._id] = el)}
              onClick={() => handleClick(memberIndex)}
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
                src={member.image.url}
                alt={member.designation}
                className="object-cover w-full h-full rounded-2xl"
                onError={(e) => {
                  // Fallback image if the API image fails to load
                  e.target.src = "/assets/default-profile.jpg";
                }}
              />

              {/* Role Label */}
              <span
                className={`absolute bottom-[1.5rem] left-[-0.5rem] px-3 py-1 rounded text-white text-sm font-semibold ${
                  member.designation.toUpperCase() === "FOUNDER" ? "bg-blue-600" : "bg-blue-500"
                }`}
              >
                {member.designation.toUpperCase()}
              </span>
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="flex justify-center space-x-2 mt-6">
        {teamMembers.map((_, index) => (
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
        key={activeProfile._id}
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
              {activeProfile.description}
            </p>
          </div>

          {/* Image */}
          <div ref={imageRef} className="flex justify-center md:justify-end">
            <img
              src={activeProfile.image.url}
              alt={activeProfile.name}
              className="w-80 h-[420px] object-cover rounded-xl shadow-md"
              onError={(e) => {
                // Fallback image if the API image fails to load
                e.target.src = "/assets/default-profile.jpg";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PeopleMain;
