const PeopleHero = () => {
  return (
    <section className="relative w-full h-[50vh] sm:h-[80vh] md:h-[90vh] flex items-end justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="/assets/PeopleHeroImg.png"
        alt="Team Hero"
        className="absolute inset-0 w-full h-full object-fill"
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
