const Product1Benefit = () => {
  return (
    <section className="w-full bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start relative">
        {/* Left Side - Images */}
        <div className="relative w-full flex flex-col">
          <img
            src="/assets/Product1Img.jpg"
            alt="Steel Pipes"
            className="w-full aspect-video object-cover shadow-lg hover:border-[#405FFC] hover:border-[4px] rounded-xl"
          />
          {/* Fade Overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-transparent rounded-xl"></div>

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
        <div className="relative z-10 flex flex-col justify-start">
          {/* 👇 Heading aligns with left image top */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#405FFC] mb-6">
            Benefits
          </h2>

          {/* 👇 List flows below heading normally */}
          <ul className="list-disc list-outside pl-5 space-y-4 text-justify leading-[1.75] font-poppins">
            <li>
              <span className="font-semibold">Study Design:</span> Our
              rectangular steel tubes are engineered with a flat and elongated
              profile that offers excellent load distribution. This makes them
              ideal for structural frameworks, bridges, and trusses, where
              stability and alignment are crucial. Their shape also allows for
              easy stacking and assembly, reducing both construction time and
              labor costs.
            </li>
            <li>
              <span className="font-semibold">Durability:</span> Manufactured
              from premium in-house HR coils using advanced ERW technology,
              these tubes deliver superior resistance to corrosion, wear, and
              environmental stress. Their long-lasting performance ensures
              reliability even in harsh construction and industrial
              environments, making them suitable for heavy-duty, long-term
              projects.
            </li>
            <li>
              <span className="font-semibold">High Strength:</span> The robust
              welding process used in our rectangular tubes ensures seamless
              joints and exceptional structural integrity. Their
              strength-to-weight ratio provides outstanding performance in
              demanding applications such as bridges, stadiums, airports, and
              transport vehicles, where both strength and safety are essential.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Product1Benefit;
