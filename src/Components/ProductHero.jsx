const ProductHero = () => {
  return (
    <section className="w-full bg-black text-white flex items-center py-12">
      <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 items-center mt-10">
        {/* Left Content */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-[#405FFC] leading-snug mb-6">
            Strength That Builds<br/> the Future
          </h1>

          {/* Scroll to SendEnquiry */}
          <a href="#send-enquiry">
            <button className="mt-6 sm:mt-10 px-6 sm:px-8 py-2 bg-[#647bf1] rounded-md text-white font-medium hover:bg-[#405FFC] transition">
              Send Enquiry
            </button>
          </a>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/assets/ProductHeroImg.png"
            alt="Product"
            className="w-[90%] max-w-[500px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
