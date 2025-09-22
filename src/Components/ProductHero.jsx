const ProductHero = () => {
  return (
    <section className="relative w-full bg-black text-white px-6 sm:px-8 py-16 sm:py-24">
      <div className="w-full mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10">
          {/* Left Content */}
          <div className="flex flex-col text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold font-poppins text-blue-600 leading-tight">
              Strength That Builds <br className="hidden lg:block" />
              the Future
            </h1>

            {/* Scroll to SendEnquiry */}
            <a href="#send-enquiry">
              <button className="mt-8 sm:mt-12 lg:mt-[7.5rem] px-6 sm:px-8 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 transition rounded-lg">
                Send Enquiry
              </button>
            </a>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center lg:justify-end w-full">
            <img
              src="/assets/ProductHeroImg.png"
              alt="Product"
              className="w-full max-w-[350px] sm:max-w-[500px] lg:max-w-[1034px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
