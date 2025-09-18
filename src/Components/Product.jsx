import { Link } from "react-router-dom";

const Product = () => {
  return (
    <section className="w-full h-auto bg-black text-white px-4 sm:px-6 md:px-10 py-14">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl sm:text-5xl font-bold font-poppins tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 drop-shadow-lg">
          Our Products
        </h2>
        <p className="mt-3 text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          Discover our wide range of high-quality steel tubes designed with
          precision, durability, and trust.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[5.5rem]">
        {/* Left Column (2 products) */}
        <div className="space-y-10">
          {/* Product 1 - Rectangle Tubes */}
          <div className="relative group">
            <img
              src="/assets/Product1Img.jpg"
              alt="ERW Black Rectangular Tubes"
              className="w-full h-[240px] sm:h-[300px] md:h-[340px] object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <Link to="/product/product1">
              <button className="absolute bottom-[3.5rem] right-6 bg-gradient-to-r from-blue-500 to-blue-700 px-4 sm:px-5 py-2 text-lg sm:text-xl font-semibold rounded-md opacity-90 hover:opacity-100 shadow-lg shadow-blue-600/50 transition">
                Discover
              </button>
            </Link>
            <h3 className="mt-4 text-lg sm:text-xl font-semibold text-center">
              ERW Black Rectangular Tubes
            </h3>
          </div>

          {/* Product 2 - Square Tubes */}
          <div className="relative group">
            <img
              src="/assets/Product2Img.png"
              alt="ERW Black Square Tubes"
              className="w-full h-[240px] sm:h-[300px] md:h-[340px] object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <Link to="/product/product2">
              <button className="absolute bottom-[3.5rem] right-6 bg-gradient-to-r from-blue-500 to-blue-700 px-4 sm:px-5 py-2 text-lg sm:text-xl font-semibold rounded-md opacity-90 hover:opacity-100 shadow-lg shadow-blue-600/50 transition">
                Discover
              </button>
            </Link>
            <h3 className="mt-4 text-lg sm:text-xl font-semibold text-center">
              ERW Black Square Tubes
            </h3>
          </div>
        </div>

        {/* Right Column (Product 3 + decorative images) */}
        <div className="flex flex-col items-center space-y-6">
          {/* Decorative Image (top) */}
          <div className="hidden sm:block w-[60%]">
            <img
              src="/assets/Img2.png"
              alt="Decorative Top"
              className="w-full h-auto mx-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
            />
          </div>

          {/* Product 3 - Round Tubes (Updated from Oval to Round based on your data) */}
          <div className="relative group w-full">
            <img
              src="/assets/Product3Img.jpg"
              alt="ERW Black Round Tubes"
              className="w-full h-[240px] sm:h-[300px] md:h-[360px] object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <Link to="/product/product3">
              <button className="absolute bottom-[3.5rem] left-6 bg-gradient-to-r from-blue-500 to-blue-700 px-4 sm:px-5 py-2 text-lg sm:text-xl font-semibold rounded-md opacity-90 hover:opacity-100 shadow-lg shadow-blue-600/50 transition">
                Discover
              </button>
            </Link>
            <h3 className="mt-4 text-lg sm:text-xl font-semibold text-center">
              ERW Black Round Tubes
            </h3>
          </div>

          {/* Decorative Image (bottom) */}
          <div className="hidden sm:block w-[60%]">
            <img
              src="/assets/Img1.png"
              alt="Decorative Bottom"
              className="w-full h-auto mx-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
            />
          </div>
        </div>
      </div>

      {/* Know More Button → Scroll to details */}
      <div className="flex justify-center mt-10">
        <a
          href="#product-details"
          className="px-8 py-3 border-2 border-blue-500 text-blue-500 font-bold uppercase rounded-xl hover:bg-blue-600 hover:text-white shadow-lg transition-all duration-300"
        >
          Know More
        </a>
      </div>
    </section>
  );
};

export default Product;