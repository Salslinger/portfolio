const AboutSection = () => {
  return (
    <div
      id="about"
      className="lg:-scroll-m-80 min-h-screen text-white relative"
    >
      <img src="/website/div_wave.svg" className="w-screen shrink-0" alt="" />

      <div className="bg-[#F05644]/90">
        {/* Heading */}
        <div className=" text-5xl pb-4 text-tertiary font-bold text-center">
          About VGDO
        </div>

        {/* Subtitle */}
        <div className=" text-2xl mt-6 mx-10 text-center">
          Guiding the Next Generation of Game Developers
        </div>

        {/* Description */}
        <div className="text-left mt-6 mx-10 lg:text-center">
          We are dedicated to empowering aspiring game developers and designers
          by providing the knowledge and tools necessary to bring their creative
          visions to life.
          <br />
          <br />
          Our club covers a wide range of game development disciplines,
          including arts and animations, music and sound production, and coding.
          <br />
          <br />
          Through hands-on workshops that explore both well-established and
          emerging software, as well as Art, Music, and Game Jams where members
          engage in friendly competition to create art, music, and games, we
          foster a community of innovation, creativity, and learning!
          <br />
          <br />
          Whether you're a beginner or an experienced developer, VGDO is here to
          support your journey in the world of game design.
        </div>
      </div>

      <img src="/website/div_wave.svg" className="-scale-y-100 w-full"></img>
    </div>
  );
};

export default AboutSection;
