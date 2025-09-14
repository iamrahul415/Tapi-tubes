const Product2Applications = () => {
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
              <span className="font-semibold">Construction & Infrastructure:</span>{" "}
              Square steel tubes are widely used in building frameworks, columns, beams,
              and support structures, where their uniform shape and load-bearing capacity
              provide exceptional strength. Their precise dimensions allow for seamless
              alignment, making them ideal for large-scale infrastructure projects such
              as bridges, flyovers, and high-rise buildings.
            </li>
            <li>
              <span className="font-semibold">Architectural & Aesthetic Use:</span>{" "}
              Thanks to their clean lines and modern appearance, square tubes are a
              popular choice for gates, railings, fencing, balconies, and architectural
              facades. They not only enhance structural integrity but also add an
              aesthetic edge to residential, commercial, and industrial buildings.
            </li>
            <li>
              <span className="font-semibold">Furniture & Interior Design:</span>{" "}
              The versatility and ease of fabrication of square tubes make them an
              excellent option for furniture manufacturing. They are commonly used in
              tables, chairs, racks, shelving units, and modular furniture systems,
              offering a combination of durability and sleek design.
            </li>
          </ul>
        </div>

        {/* Right Side - Image with Overlay */}
        <div className="relative w-full h-full flex items-center">
          <img
            src="/assets/SqureAppImg.png"
            alt="Applications"
            className="w-full h-full object-cover shadow-lg hover:border-[#405FFC] hover:border-[4px] rounded-xl"
          />
          {/* Fade Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent rounded-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Product2Applications;
