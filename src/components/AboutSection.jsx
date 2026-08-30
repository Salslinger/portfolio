const AboutSection = () => {
  return (
    <div
      id="about"
      className="lg:-scroll-m-80 min-h-screen text-white relative"
    >
      <img src="/website/div_wave.svg" className="w-screen shrink-0" alt="" />

      <div className="bg-[#F05644]/90">
        <div className=" text-5xl pb-4 text-tertiary font-bold text-center">
          About Me
        </div>

        <div className="flex flex-col">
          <div className="text-2xl mt-6 mx-10 liquid-glass lg:w-3/7 lg:self-start h-[25vh] text-center">
            Professional
            <br></br>I worked as a Software Engineer.
          </div>
          <div className="text-2xl mt-6 mx-10 liquid-glass lg:w-3/7 lg:self-end h-[25vh] text-center">
            Education
            <br></br>I graduated from the University of Texas at Arlington with
            a Bachelors Degree of Science in Software Engineering
          </div>
          <div className="text-2xl mt-6 mx-10 liquid-glass lg:w-3/7 lg:self-start h-[25vh] text-center">
            Personal
            <br></br>I am a game developer, 3D artist, and musician.
          </div>
        </div>
      </div>

      <img src="/website/div_wave.svg" className="-scale-y-100 w-full"></img>
    </div>
  );
};

export default AboutSection;
