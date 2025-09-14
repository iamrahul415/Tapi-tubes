const Product2Benefit = () => {
  return (
    <section className="w-full bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start relative">
        {/* Left Side - Images */}
        <div className="relative w-full flex flex-col">
          {/* First Image */}
          <img
            src="/assets/Product2Img.png"
            alt="Steel Pipes"
            className="w-full aspect-video object-cover shadow-lg hover:border-[#405FFC] hover:border-[4px] rounded-xl"
          />
          {/* Fade Overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/90 to-transparent rounded-xl"></div>

          {/* Second Image - Centered below first */}
          <div className="flex justify-center mt-6 relative z-20">
            <img
              src="/assets/Img1.png"
              alt="Steel Pipes"
              className="h-[254px] rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Right Side - Benefits */}
        <div className="relative z-10 flex flex-col justify-start">
          {/* Heading aligned with image top */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#405FFC] mb-6">
            Benefits
          </h2>
          <ul className="list-disc list-outside pl-5 space-y-4 text-justify leading-[1.75] font-poppins">
            <li>
              <span className="font-semibold">Study Framework:</span> Our square
              steel tubes provide excellent structural stability with their
              uniform shape, making them ideal for construction frameworks,
              columns, and support structures. Their precise dimensions ensure
              easy alignment during installation, saving both time and labor
              costs on large-scale projects.
            </li>
            <li>
              <span className="font-semibold">Durability:</span>Built with
              premium-grade steel and advanced ERW technology, these tubes are
              designed to resist corrosion, wear, and environmental stress.
              Their long-lasting performance makes them suitable for
              architectural projects, gates, railings, and heavy-duty
              fabrication.
            </li>
            <li>
              <span className="font-semibold">High Strength:</span> With strong
              welded joints and superior load-bearing capacity, our square tubes
              offer exceptional strength-to-weight ratio. This makes them
              reliable for use in buildings, bridges, and industrial structures,
              where durability and resilience are critical.
            </li>
            <li>
              <span className="font-semibold">
                Easy Fabrication & Maintenance:
              </span>
              Square tubes are easy to cut, weld, and customize, making them
              highly versatile for industries such as furniture manufacturing,
              agricultural equipment, and general engineering. Their
              low-maintenance nature ensures reduced operational costs over
              long-term use.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Product2Benefit;
