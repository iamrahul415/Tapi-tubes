// Pages/ProductDetails.jsx
import React, { useEffect, useCallback, useMemo, useRef } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductById,
  selectSelectedProduct,
  selectSelectedProductLoading,
  selectSelectedProductError,
  clearSelectedProductConditional,
} from "../redux/productSlice";


import SendEnquiry from "@/Components/SendEnquiry";


// Product Hero Component
const ProductHero = React.memo(({ title, heroImage, heroAlt }) => {
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
});


ProductHero.displayName = 'ProductHero';


// Product Description Component
const ProductPara = React.memo(({ description }) => {
  const paragraphs = useMemo(() => {
    return Array.isArray(description) ? description : description.split('\\n');
  }, [description]);


  return (
    <section className="w-full bg-black text-white py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto space-y-6 text-left sm:text-justify leading-relaxed sm:leading-loose text-base font-poppins sm:text-lg md:text-xl">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
});


ProductPara.displayName = 'ProductPara';


// Product Benefits Component
const ProductBenefit = React.memo(({ benefits, benefitImages }) => {
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
});


ProductBenefit.displayName = 'ProductBenefit';


// Product Applications Component
const ProductApplication = React.memo(({ applications }) => {
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
});


ProductApplication.displayName = 'ProductApplication';


// Size Charts Component - NEW
const ProductSizeChart = React.memo(({ sizeCharts }) => {
  if (!sizeCharts || sizeCharts.length === 0) return null;

  return (
    <section className="w-full bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#405FFC] mb-8 text-center">
          Size Charts
        </h2>
        <div className="space-y-6">
          {sizeCharts.map((chart, index) => (
            <div
              key={index}
              className="relative w-full overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={chart.url}
                alt={`Size Chart ${index + 1}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});


ProductSizeChart.displayName = 'ProductSizeChart';


// Main ProductDetails Component
function ProductDetails() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const hasTriedRedirect = useRef(false);


  const productData = useSelector(selectSelectedProduct);
  const loading = useSelector(selectSelectedProductLoading);
  const error = useSelector(selectSelectedProductError);


  // ✅ FIX 1: Fetch product data first
  useEffect(() => {
    console.log('useEffect triggered - productId:', productId);
    console.log('Current productData?.id:', productData?._id);
    
    if (productId && (!productData || productData._id !== productId)) {
      console.log('Fetching product data for:', productId);
      dispatch(fetchProductById(productId));
      hasTriedRedirect.current = false; // Reset redirect flag
    }
  }, [productId, productData?._id, dispatch]);


  // ✅ FIX 2: Better cleanup that checks the current path
  useEffect(() => {
    return () => {
      const currentPath = window.location.pathname;
      console.log('Cleanup triggered, current path:', currentPath);
      
      dispatch(clearSelectedProductConditional({ currentPath }));
    };
  }, [dispatch]);


  // ✅ FIX 3: Memoize computed values to prevent unnecessary re-renders
  const processedBenefits = useMemo(() => {
    return productData?.benefits?.map(b => ({ 
      title: b.point, 
      description: b.description || "" 
    })) || [];
  }, [productData?.benefits]);


  const processedApplications = useMemo(() => {
    return {
      title: "Applications",
      items: productData?.applications?.map(a => ({ 
        title: a.point, 
        description: a.description || "" 
      })) || [],
      image: productData?.extraImages?.[1]?.url || "",
      imageAlt: "Application Image",
    };
  }, [productData?.applications, productData?.extraImages]);


  const benefitImages = useMemo(() => ({
    primary: productData?.extraImages?.[0]?.url,
  }), [productData?.extraImages]);


  // Show loading state
  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center text-white bg-black">
        <div className="text-xl">Loading product details…</div>
      </div>
    );
  }


  // Show error state and redirect
  if (error) {
    console.log('Product fetch failed with error, redirecting:', error);
    return <Navigate to="/product" replace />;
  }


  // Wait for data to load - don't redirect immediately
  if (!productData && productId) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center text-white bg-black">
        <div className="text-xl">Loading product details…</div>
      </div>
    );
  }


  // Only redirect if we have no productId (invalid URL)
  if (!productId) {
    return <Navigate to="/product" replace />;
  }


  // Don't render if we don't have product data yet
  if (!productData) {
    return null;
  }


  console.log('Rendering ProductDetails with data:', productData._id);


  return (
    <div className="w-full min-h-screen text-white">
      <ProductHero
        title={productData.name}
        heroImage={productData.mainImage?.url}
        heroAlt={productData.name}
      />
      
      <ProductPara description={productData.description} />


      <ProductBenefit
        benefits={processedBenefits}
        benefitImages={benefitImages}
      />


      <ProductApplication applications={processedApplications} />

      <ProductSizeChart sizeCharts={productData.sizeCharts} />


      {productData.showEnquiry && <SendEnquiry />}
    </div>
  );
}


export default ProductDetails;
