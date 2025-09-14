const Product3Hero = () => {
  return (
    <section className="relative w-full h-[50vh] sm:h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="/assets/Product3HeroImg.jpg"
        alt="Press Release Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Centered Heading */}
      <h1
        className="relative z-10 text-2xl sm:text-4xl md:text-6xl font-bold font-poppins text-white px-6 py-4 rounded-2xl text-center max-w-[90%]"
        style={{
          backgroundColor: "rgba(64, 95, 252, 0.4)",
          backdropFilter: "blur(8px)",
        }}
      >
        ERW BLACK – Round Tubes
      </h1>
    </section>
  );
};

export default Product3Hero;
