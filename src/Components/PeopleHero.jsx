const PeopleHero = () => {
  return (
    <section className="relative w-full h-[50vh] sm:h-[80vh] md:h-[90vh] flex items-end justify-center overflow-hidden">
      {/* Background Image - Mobile */}
      <img
        src="/assets/JobMobImg.png"
        alt="Career Hero Mobile"
        className="absolute inset-0 w-full h-full object-cover sm:hidden"
      />

      {/* Background Image - Tablet/Desktop */}
      <img
        src="/assets/PeopleHeroImg.png"
        alt="Career Hero"
        className="absolute inset-0 w-full h-full object-fill hidden sm:block"
      />

      {/* Centered Heading at bottom */}
      <h1
        className="relative text-2xl sm:text-4xl md:text-6xl font-bold font-poppins text-[#405FFC] text-center mb-16 sm:mb-[10rem]"
      >
        Meet The Bright Minds
      </h1>
    </section>
  );
};

export default PeopleHero;
