function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://res.cloudinary.com/djgcv06ka/video/upload/v1756814468/TAPITUNES_shgnyo.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  );
}

export default HeroSection;
