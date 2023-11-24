import Navbar from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FeatureSection } from "./components/FeatureSection";
import { CardsSection } from "./components/CardsSection";
import { ExploreSection } from "./components/ExploreSection";
import { NewFeature } from "./components/NewFeature";
import { CoreFeatures } from "./components/CoreFeatures";
import { JoinSection } from "./components/JoinSection";
import { Testimonail } from "./components/Testimonail";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="overflow-x-hidden relative w-full">
      <Navbar/>

      <HeroSection/>

      <FeatureSection/>

      <CardsSection/>

      <ExploreSection/>

      <NewFeature/>

      <CoreFeatures/>

      <JoinSection/>

      <Testimonail/>

      <CTA/>

      <Footer/>

    </div>
  );
}

export default App;
