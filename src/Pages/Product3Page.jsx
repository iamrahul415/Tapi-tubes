import Navbar from "../Components/Navbar";
import Product3Hero from "../Components/Product3Hero";
import Product3Para from "../Components/Product3Para";
import Product3Benefit from "../Components/Product3Benefit";
import Product3Application from "../Components/Product3Application";
import SendEnquiry from "../Components/SendEnquiry";
import Footer from "../Components/Footer";

function Product3Page() {
  return (
    <div className="w-full min-h-screen text-white">
      <Product3Hero />
      <Product3Para />
      <Product3Benefit />
      <Product3Application />
      <SendEnquiry />
    </div>
  );
}

export default Product3Page;
