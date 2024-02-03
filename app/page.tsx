import Hero from "@/components/Hero";
import HeroNext from "@/components/HeroNext";
import Featured from "@/components/Featured";
import Slider from "@/components/Slider";
import BentoShowcase from "@/components/BentoShowcase";
import ContactBar from "@/components/ContactBar";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Hero />
      <HeroNext />
      <Featured />
      <Slider />
      <BentoShowcase />
      <ContactBar />
    </div>
  );
};

export default Home;
