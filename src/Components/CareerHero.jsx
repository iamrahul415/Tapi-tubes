const CareerHero = () => {
  return (
    <section className="relative w-full h-[75vh] sm:h-[80vh] md:h-[90vh] overflow-hidden">
      {/* Background Image */}
      <img
        src="/assets/JobImg.png"
        alt="Career Hero"
        className="absolute inset-0 w-full h-full object-fill"
      />

      {/* Text Content - Bottom Left */}
      <div className="absolute bottom-[8rem] left-6 sm:left-12 md:left-20 z-10">
        <h1 className="text-3xl sm:text-5xl md:text-[6.75rem] font-bold font-poppins text-[#405FFC] leading-tight">
          Careers
        </h1>
      </div>
    </section>
  );
};

export default CareerHero;
