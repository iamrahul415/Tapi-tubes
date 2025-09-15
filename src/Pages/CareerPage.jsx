import JobHero from "../Components/CareerHero";
import Opportunity from "../Components/Opportunity";
import JoinUs from "../Components/JoinUs";

function CareerPage() {
  return (
    <div className="w-full min-h-screen text-white">
      <JobHero />
      <Opportunity />
      <JoinUs />
    </div>
  );
}

export default CareerPage;
