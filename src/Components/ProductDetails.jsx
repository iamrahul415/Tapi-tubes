// Pages/ProductDetails.jsx
import { useParams, Navigate } from "react-router-dom";
import { getProductById } from "@/Components/ProductsInfo";
import SendEnquiry from "@/Components/SendEnquiry";

// Product Hero Component
const ProductHero = ({ title, heroImage, heroAlt }) => {
  return (
    <section className="relative w-full h-[50vh] sm:h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={heroImage}
        alt={heroAlt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div> 

      {/* Centered Heading */}
      <h1
        className="relative z-10 text-2xl sm:text-4xl md:text-6xl font-bold font-poppins text-white px-6 py-4 rounded-2xl text-center max-w-[90%]"
        style={{
          backgroundColor: "rgba(64, 95, 252, 0.4)",
          backdropFilter: "blur(8px)",
        }}
      >
        {title}
      </h1>
    </section>
  );
};

// Product Description Component
const ProductPara = ({ description }) => {
  return (
    <section className="w-full bg-black text-white py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto space-y-6 text-left sm:text-justify leading-relaxed sm:leading-loose text-base font-poppins sm:text-lg md:text-xl">
        {description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

// Product Benefits Component
const ProductBenefit = ({ benefits, benefitImages }) => {
  return (
    <section className="w-full bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-stretch">
        
        {/* Left Side - Images */}
        <div className="relative flex flex-col justify-start">
          {/* First Image */}
          <div className="relative w-full">
            <img
              src={benefitImages?.primary || "/assets/Product3Img.jpg"}
              alt="Steel Pipes"
              className="w-full object-cover shadow-lg hover:border-[#405FFC] hover:border-[4px] rounded-xl"
            />
            {/* Fade Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/90 to-transparent rounded-xl"></div>
          </div>

          {/* Second Image - Centered below */}
          <div className="flex justify-center mt-6 relative z-20">
            <img
              src={benefitImages?.secondary || "/assets/Img1.png"}
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
            {benefits.map((benefit, index) => (
              <li key={index}>
                <span className="font-semibold">{benefit.title}:</span> {benefit.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

// Product Applications Component
const ProductApplication = ({ applications }) => {
  return (
    <section className="w-full bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch relative">
        
        {/* Left Side - Applications */}
        <div className="relative z-10 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#405FFC] mb-6">
            {applications.title}
          </h2>
          <ul className="list-disc list-outside pl-5 space-y-4 text-justify leading-[1.75] font-poppins">
            {applications.items.map((item, index) => (
              <li key={index}>
                <span className="font-semibold">{item.title}:</span>{" "}
                {item.description}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Image with Overlay + Fade */}
        <div className="relative w-full h-full flex items-center">
          <img
            src={applications.image}
            alt={applications.imageAlt}
            className="w-full h-full object-cover shadow-lg hover:border-[#405FFC] hover:border-[4px] rounded-xl"
          />
          {/* Faint Overlay for fade effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent rounded-xl"></div>
        </div>
      </div>
    </section>
  );
};

// Main ProductDetails Component
function ProductDetails() {
  const { productId } = useParams();
  const productData = getProductById(productId);

  // If product not found, redirect to products page
  if (!productData) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div className="w-full min-h-screen text-white">
      <ProductHero 
        title={productData.title}
        heroImage={productData.heroImage}
        heroAlt={productData.heroAlt}
      />
      <ProductPara description={productData.description} />
      <ProductBenefit 
        benefits={productData.benefits} 
        benefitImages={productData.benefitImages}
      />
      <ProductApplication applications={productData.applications} />
      {productData.showEnquiry && <SendEnquiry />}
    </div>
  );
}

export default ProductDetails;