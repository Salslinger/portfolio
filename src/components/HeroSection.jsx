import React from "react";
import FadeIn from "./FadeIn";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="hero-section relative min-h-screen flex flex-col justify-center px-6 text-center"
    >
      <div className="relative lg:flex lg:justify-center lg:items-center mt-15 lg:mt-0">
        <div>
          {/* Main Heading */}
          <h1 className="text-[#505050] text-5xl md:text-6xl font-bold mt-4 mb-4">
            Kenny Nguyen<br></br>Software Engineer | Game Developer
          </h1>

          <div className="flex flex-col items-center">
            {/* Hero Image */}
            <img
              src="/website/assets/VGDOpanda.png"
              alt="VGDO Panda Logo"
              className="hero-image w-64 md:w-96 mb-8 rounded-xl"
            />
          </div>
        </div>
        <FadeIn>
          <img
            src="/website/sketch_panda.png"
            className="h-auto w-96 lg:w-100 lg:ml-25"
          ></img>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
