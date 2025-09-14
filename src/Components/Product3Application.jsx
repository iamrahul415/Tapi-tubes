const Product3Applications = () => {
  return (
    <section className="w-full bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        
        {/* Left Side - Applications */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#405FFC] mb-6">
            Applications
          </h2>
          <ul className="list-disc list-outside space-y-4 text-justify leading-relaxed font-poppins">
            <li>
              <span className="font-semibold">Fire Protection:</span> Ideal for
              use in fire protection systems, where reliable and durable piping
              is essential for safety.
            </li>
            <li>
              <span className="font-semibold">Heat Exchangers:</span> Suitable
              for heat exchanger systems, offering effective flow of steam and
              other heat transfer mediums.
            </li>
            <li>
              <span className="font-semibold">Construction:</span> Widely used
              in the construction industry for frameworks, scaffolding, and
              other structural support systems.
            </li>
            <li>
              <span className="font-semibold">Architectural Applications:</span>
               Used in architectural designs where precision, strength, and
              durability are key to achieving the desired structural integrity.
            </li>
            <li>
              <span className="font-semibold">Infrastructure Projects:</span>
              Perfect for infrastructure development, such as highways, bridges,
              and public utility systems, where long-lasting performance is
              required.
            </li>
            <li>
              <span className="font-semibold">Agricultural Uses:</span> Suitable
              for agricultural applications, including irrigation systems, where
              strong and durable pipes are necessary for efficient water flow.
            </li>
            <li>
              <span className="font-semibold">Steam and Gas Flow:</span>
               Engineered to facilitate steam and gas flow in industrial systems,
              ensuring safe and efficient operation.
            </li>
            <li>
              <span className="font-semibold">Electric Conduits:</span> Commonly
              used as electric conduits, protecting electrical wiring and
              ensuring safe installation in buildings and industrial facilities.
            </li>
          </ul>
        </div>

        {/* Right Side - Image with Fade Overlay */}
        <div className="relative w-full h-full flex items-center">
          <img
            src="/assets/OvalAppImg.png"
            alt="Applications"
            className="w-full h-full object-cover shadow-lg hover:border-[#405FFC] hover:border-[4px] rounded-xl"
          />
          {/* Left Side Fade Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent rounded-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Product3Applications;
