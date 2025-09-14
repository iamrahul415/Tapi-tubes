import Navbar from "../Components/Navbar";
import PressreleaseHero from "../Components/PressreleaseHero";
import PressReleaseMain from "../Components/PressReleaseMain";
import Footer from "../Components/Footer";

function PressReleasePage() {
  return (
    <div className="w-full min-h-screen text-white">
      <PressreleaseHero />
      <PressReleaseMain />
    </div>
  );
}

export default PressReleasePage;
