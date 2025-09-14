import { Link } from "react-router-dom";

const Product = () => {
  return (
    <section className="w-full h-auto bg-black text-white px-4 sm:px-6 md:px-10 py-10">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-semibold text-[#405FFC] ml-2 sm:ml-5">
        PRODUCT
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[5.5rem] mt-8">
        {/* Left Column (2 products) */}
        <div className="space-y-8">
          {/* Product 1 */}
          <div className="relative">
            <img
              src="/assets/Product1Img.jpg"
              alt="ERW Black Rectangular Tubes"
              className="w-full h-[220px] sm:h-[280px] md:h-[320px] object-cover hover:border-[#405FFC] hover:border-[4px] rounded-xl transition"
            />
            {/* Discover Button */}
            <Link to="/Product1Page">
            <button className="absolute bottom-6 right-4 sm:bottom-[5.5rem] sm:right-6 bg-blue-600 px-3 sm:px-4 py-2 text-lg sm:text-2xl font-semibold rounded-md opacity-90 hover:opacity-100 transition">
              Discover
            </button>
            </Link>
            <h3 className="mt-3 text-base sm:text-lg font-semibold">
              ERW Black <br /> Rectangular Tubes
            </h3>
          </div>

          {/* Product 2 */}
          <div className="relative">
            <img
              src="/assets/Product2Img.png"
              alt="ERW Black Square Tubes"
              className="w-full h-[220px] sm:h-[280px] md:h-[320px] object-cover hover:border-[#405FFC] hover:border-[4px] rounded-xl transition"
            />
            {/* Discover Button */}
            <Link to="/Product2Page">
              <button className="absolute bottom-6 right-4 sm:bottom-[5.5rem] sm:right-6 bg-blue-600 px-3 sm:px-4 py-2 text-lg sm:text-2xl font-semibold rounded-md opacity-90 hover:opacity-100 transition">
                Discover
              </button>
            </Link>
            <h3 className="mt-3 text-base sm:text-lg font-semibold">
              ERW Black <br /> Square Tubes
            </h3>
          </div>
        </div>

        {/* Right Column (3 products) */}
        <div className="space-y-8">
          {/* Product 3 (Hidden on mobile) */}
          <div className="hidden sm:block">
            <img
              src="/assets/Img2.png"
              alt="img"
              className="w-full max-w-[384px] h-auto mx-auto object-contain"
            />
          </div>

          {/* Product 4 */}
          <div className="relative">
            <img
              src="/assets/Product3Img.jpg"
              alt="ERW Black Square Tubes"
              className="w-full h-[220px] sm:h-[280px] md:h-[320px] object-cover hover:border-[#405FFC] hover:border-[4px] rounded-xl transition"
            />
            {/* Discover Button */}
            <Link to="/Product3Page">
            <button className="absolute bottom-6 left-4 sm:bottom-[5.5rem] sm:left-6 bg-blue-600 px-3 sm:px-4 py-2 text-lg sm:text-2xl font-semibold rounded-md opacity-90 hover:opacity-100 transition">
              Discover
            </button>
            </Link>
            <h3 className="mt-3 text-base sm:text-lg font-semibold">
              ERW Black <br /> Oval Tubes
            </h3>
          </div>

          {/* Product 5 (Hidden on mobile) */}
          <div className="hidden sm:block">
            <img
              src="/assets/Img1.png"
              alt="ERW Black Hex Tubes"
              className="w-full max-w-[384px] h-auto mx-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Know More Button */}
      <div className="flex justify-center mt-6">
        <button className="px-6 sm:px-8 py-2 sm:py-3 border border-[#405FFC] text-[#405FFC] font-poppins font-bold uppercase rounded-xl hover:bg-[#405FFC] hover:text-white transition">
          Know More
        </button>
      </div>
    </section>
  );
};

export default Product;
