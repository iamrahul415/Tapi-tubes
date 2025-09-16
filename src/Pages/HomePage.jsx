import AboutUs from "@/Components/AboutUs";
import HeroSection from "@/Components/HeroSection";
import Portfolio from "@/Components/Portfolio";
import Newsroom from "@/Components/Newroom";
import ContactUs from "@/Components/ContactUs";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen text-white">
      <HeroSection />
      <Portfolio />
      <AboutUs />
      <Newsroom />
      <ContactUs />
    </div>
  );
};

export default HomePage;
