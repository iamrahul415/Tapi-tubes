const ProductHero = () => {
  return (
    <section className="w-full bg-black text-white py-12">
      <div className="w-11/12 mx-auto">
        {/* Wrapper to align two columns */}
        <div className="block lg:table w-full">
          <br />
          {/* Left Content */}
          <div className="block lg:table-cell align-middle text-center lg:text-left lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl lg:text-[4rem] font-extrabold font-poppins text-blue-600 leading-[6.5rem] mb-[8.5rem]">
              Strength That Builds <br /><br /> the Future
            </h1>

            {/* Scroll to SendEnquiry */}
            <a href="#send-enquiry">
              <button className="mb-4 px-6 sm:px-8 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                Send Enquiry
              </button>
            </a>
          </div>

          {/* Right Image */}
          <div className="block lg:table-cell align-middle text-center lg:text-right lg:w-1/2">
            <img
              src="/assets/ProductHeroImg.png"
              alt="Product"
              className="inline-block w-[106%] max-w-[1034px] h-[491px] object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductHero;
