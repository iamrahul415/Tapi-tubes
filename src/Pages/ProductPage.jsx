import SendEnquiry from "@/Components/SendEnquiry";
import ProductHero from "@/Components/ProductHero";
import Product from "@/Components/Product";

function ProductPage() {
  return (
    <div className="w-full min-h-screen text-white">
      <ProductHero />
      <Product />
      <SendEnquiry />
    </div>
  );
}

export default ProductPage;
