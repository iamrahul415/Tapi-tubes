import Product2Hero from "@/Components/Product2Hero";
import Product2Para from "@/Components/Product2Para";
import Product2Benefit from "@/Components/Product2Benefit";
import Product2Application from "@/Components/Product2Application";

function Product2Page() {
  return (
    <div className="w-full min-h-screen text-white">
      <Product2Hero />
      <Product2Para />
      <Product2Benefit />
      <Product2Application />
      <SendEnquiry />
    </div>
  );
}

export default Product2Page;
