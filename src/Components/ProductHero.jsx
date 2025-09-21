const ProductHero = () => {
  return (
    <section className="w-full bg-black text-white px-8 py-24">
      <div className="w-full mx-auto">
        <div className="flex flex-row w-full">
          {/* Left Content */}
          <div className="flex flex-col">
            <h1 className="text-7xl font-extrabold font-poppins text-blue-600 ">
              Strength That Builds <br className="hidden lg:block" />
              the Future
            </h1>

            {/* Scroll to SendEnquiry */}
            <a href="#send-enquiry">
              <button className="mt-[7.5rem] px-6 sm:px-8 py-3 bg-blue-600  text-white font-medium hover:bg-blue-700 transition">
                Send Enquiry
              </button>
            </a>
          </div>

          {/* Right Image */}
          <div className="flex-1 lg:table-cell align-middle text-center lg:text-right lg:w-1/2">
            <img
              src="/assets/ProductHeroImg.png"
              alt="Product"
              className="w-full max-w-[500px] lg:max-w-[1034px] h-auto object-contain mx-auto lg:mx-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
