const Product3Benefit = () => {
  return (
    <section className="w-full bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-stretch">
        
        {/* Left Side - Images */}
        <div className="relative flex flex-col justify-start">
          {/* First Image */}
          <div className="relative w-full">
            <img
              src="/assets/Product3Img.jpg"
              alt="Steel Pipes"
              className="w-full object-cover shadow-lg hover:border-[#405FFC] hover:border-[4px] rounded-xl"
            />
            {/* Fade Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/90 to-transparent rounded-xl"></div>
          </div>

          {/* Second Image - Centered below */}
          <div className="flex justify-center mt-6 relative z-20">
            <img
              src="/assets/Img1.png"
              alt="Steel Pipes"
              className="h-[254px] rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Right Side - Benefits */}
        <div className="flex flex-col justify-start self-start">
          <h2 className="text-3xl md:text-4xl font-bold text-[#405FFC] mb-6">
            Benefits
          </h2>
          <ul className="list-disc list-outside space-y-4 text-justify leading-relaxed font-poppins">
            <li>
              <span className="font-semibold">Sturdy Construction:</span> Our
              round steel pipes are engineered to withstand high internal and
              external pressures and are available in convenient lengths,
              facilitating easy welding and installation. This not only speeds
              up the assembly process but also reduces overall installation and
              transportation costs, making them a cost-efficient choice for
              large-scale projects.
            </li>
            <li>
              <span className="font-semibold">Durability:</span>
              Built for long-lasting performance, these pipes are highly
              durable, making them suitable for the transportation of natural
              gas and effective for low-pressure, low-calorie water
              applications. Their resistance to corrosion and wear ensures they
              can withstand the rigors of harsh environments, providing reliable
              service over extended periods.
            </li>
            <li>
              <span className="font-semibold">High Strength:</span> The robust
              construction of our round steel pipes resists damage caused by
              human activity, tree roots, and extreme weather conditions. This
              makes them a dependable choice for water and sewerage systems, as
              well as for other infrastructure projects where resilience and
              strength are essential.
            </li>
            <li>
              <span className="font-semibold">Easy Maintenance:</span> Designed
              for minimal upkeep, these pipes are ideal for industries such as
              petroleum, where they efficiently transport large volumes of oil
              over long distances. The low maintenance requirements
              significantly reduce operational costs over time.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Product3Benefit;
