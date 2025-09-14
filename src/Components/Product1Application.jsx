const Product1Applications = () => {
  return (
    <section className="w-full bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch relative">
        
        {/* Left Side - Applications */}
        <div className="relative z-10 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#405FFC] mb-6">
            Applications
          </h2>
          <ul className="list-disc list-outside pl-5 space-y-4 text-justify leading-[1.75] font-poppins">
            <li>
              <span className="font-semibold">
                Structural Engineering & Construction:
              </span>{" "}
              Rectangular steel tubes are a preferred choice in structural
              frameworks, trusses, and building supports, where strength and
              stability are critical. Their flat surfaces and elongated shape
              make them particularly well-suited for bridges, stadiums,
              airports, and high-rise building frameworks, where load
              distribution and durability are essential.
            </li>
            <li>
              <span className="font-semibold">Storage & Logistics:</span> The
              elongated structure of rectangular tubes makes them ideal for
              warehouse racks, shelving units, mezzanine floors, and material
              handling systems. Their shape allows for efficient space
              utilization while maintaining the strength required for
              large-scale storage and logistics operations.
            </li>
            <li>
              <span className="font-semibold">
                Transport & Automotive Industry:
              </span>{" "}
              Due to their ability to handle heavy loads and vibrations,
              rectangular tubes are widely used in bus body frames, truck
              chassis, railway coaches, and trailers. Their high
              strength-to-weight ratio provides a reliable solution for
              transportation and automotive applications that demand resilience
              and precision.
            </li>
            <li>
              <span className="font-semibold">
                Fabrication & General Engineering:
              </span>{" "}
              Rectangular tubes are easy to cut, weld, and fabricate, making
              them versatile in machine structures, industrial enclosures, and
              custom fabrication projects.
            </li>
          </ul>
        </div>

        {/* Right Side - Image with Overlay + Fade */}
        <div className="relative w-full h-full flex items-center">
          <img
            src="/assets/RecAppImg.jpg"
            alt="Applications"
            className="w-full h-full object-cover shadow-lg hover:border-[#405FFC] hover:border-[4px] rounded-xl"
          />
          {/* Faint Overlay for fade effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent rounded-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Product1Applications;
