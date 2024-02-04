import Hero from "@/components/Hero";
import HeroNext from "@/components/HeroNext";
import Featured from "@/components/Featured";
import { Slider } from "@/components/Slider";
import BentoShowcase from "@/components/BentoShowcase";
import { ContactForm } from "@/components/Form";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Hero />
      <HeroNext />
      <Featured />
      <Slider />
      <BentoShowcase />
      <section className="w-full bg-skyBlue">
        <div className="container text-white py-10 flex flex-col-reverse justify-center items-center md:flex-row">
          <div className="w-full h-full flex justify-center items-center md:w-1/2 mt-5 md:mt-0">
            <ContactForm />
          </div>
          <div className="w-full h-full flex flex-col md:w-1/2 border-white md:ml-5 border-b-2 md:border-0">
            <h1 className="text-6xl font-bold rounded-lg">Contact Us!</h1>
            <p className="text-justify text-md font-bold mb-5 md:mb-0 lg:pr-36 mt-5">
              Fill out the form to get in touch with our Real Estate and
              Construction Consulting team. We are here to help you with all
              your needs and provide expert advice.
            </p>
          </div>
        </div>
      </section>
      <Testimonials />
    </div>
  );
};

export default Home;
