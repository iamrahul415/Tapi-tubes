import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectProducts, selectProductsLoading, selectProductsError } from "../redux/productSlice";

const Product = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);
  const loading = useSelector(selectProductsLoading);
  const error = useSelector(selectProductsError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p className="text-white text-center py-20">Loading products...</p>;
  if (error) return <p className="text-red-500 text-center py-20">Error: {error}</p>;

  // Separate products into left and right columns
  const leftColumnProducts = products.filter((_, index) => index % 2 === 0); // Even positions (0, 2, 4, ...)
  const rightColumnProducts = products.filter((_, index) => index % 2 === 1); // Odd positions (1, 3, 5, ...)

  return (
    <section className="w-full h-auto bg-black text-white px-4 sm:px-6 md:px-10 py-14">
      <div className="text-center mb-10">
        <h2 className="text-4xl sm:text-5xl font-bold font-poppins tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 drop-shadow-lg">
          Our Products
        </h2>
        <p className="mt-3 text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          Discover our wide range of high-quality steel tubes designed with precision, durability, and trust.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[5.5rem]">
        {/* Left Column - products at even positions (0, 2, 4, ...) */}
        <div className="space-y-10">
          {leftColumnProducts.map((product) => (
            <div key={product._id} className="relative group">
              <img
                src={product.mainImage?.url}
                alt={product.name}
                className="w-full h-[240px] sm:h-[300px] md:h-[340px] object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <Link to={`/product/${product._id}`}>
                <button className="absolute bottom-[3.5rem] right-6 bg-gradient-to-r from-blue-500 to-blue-700 px-4 sm:px-5 py-2 text-lg sm:text-xl font-semibold rounded-md opacity-90 hover:opacity-100 shadow-lg shadow-blue-600/50 transition">
                  Discover
                </button>
              </Link>
              <h3 className="mt-4 text-lg sm:text-xl font-semibold text-center">{product.name}</h3>
            </div>
          ))}
        </div>

        {/* Right Column - products at odd positions (1, 3, 5, ...) with decorative images */}
        <div className="flex flex-col items-center space-y-6">
          {/* Top decorative image */}
          <div className="hidden sm:block w-[60%]">
            <img
              src="/assets/Img2.png"
              alt="Decorative Top"
              className="w-full h-auto mx-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
            />
          </div>

          {/* Right column products */}
          {rightColumnProducts.map((product, index) => (
            <React.Fragment key={product._id}>
              <div className="relative group w-full">
                <img
                  src={product.mainImage?.url}
                  alt={product.name}
                  className="w-full h-[240px] sm:h-[300px] md:h-[360px] object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <Link to={`/product/${product._id}`}>
                  <button className="absolute bottom-[3.5rem] left-6 bg-gradient-to-r from-blue-500 to-blue-700 px-4 sm:px-5 py-2 text-lg sm:text-xl font-semibold rounded-md opacity-90 hover:opacity-100 shadow-lg shadow-blue-600/50 transition">
                    Discover
                  </button>
                </Link>
                <h3 className="mt-4 text-lg sm:text-xl font-semibold text-center">{product.name}</h3>
              </div>

              {/* Add decorative image after the first product in right column */}
              {index === 0 && (
                <div className="hidden sm:block w-[60%]">
                  <img
                    src="/assets/Img1.png"
                    alt="Decorative Bottom"
                    className="w-full h-auto mx-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

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