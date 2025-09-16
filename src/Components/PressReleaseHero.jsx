const PressReleaseHero = () => {
  return (
    <section className="relative w-full h-[75vh] sm:h-[80vh] md:h-[90vh] flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <img
        src="/assets/PressHeroImg.png"
        alt="Press Release Hero"
        className="absolute inset-0 w-full h-full object-fill"
      />

      {/* Text Content */}
      <div className="relative z-10 text-left px-6 sm:px-12 md:px-20 max-w-3xl">
        <p className="text-[#A2A2A2] text-lg sm:text-xl mb-4 font-poppins tracking-wide">
          Newsroom
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-[5.75rem] font-bold font-poppins text-white leading-tight">
          Press <br /> Releases
        </h1>
      </div>
    </section>
  );
};

export default PressReleaseHero;
