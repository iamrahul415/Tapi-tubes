import Navbar from "../Components/Navbar";
import PeopleHero from "../Components/PeopleHero";
import PeopleMain from "../Components/PeopleMain";
import Footer from "../Components/Footer";

function PeoplePage() {
  return (
    <div className="w-full min-h-screen text-white">
      <PeopleHero />
      <PeopleMain />
    </div>
  );
}

export default PeoplePage;
