import { getImageUrl } from "../../utils/image-util";

export const About = () => {
  return (
    <div id="about" className="light-to-dark text-white flex flex-col h-screen">
      <h1 className="text-7xl font-bold text-center mt-10 mb-5">About Me</h1>
      <div className="lg:flex lg:mx-32">
        <img
          src={getImageUrl("picture_headshot", "jpg")}
          alt="Kenny Nguyen"
          className="mx-auto w-84 lg:w-100"
        ></img>

        <p className="pl-20 pr-20 -mx-10 lg:mx-30 mb-10 text-2xl">
          Hi, I'm Kenny Nguyen. I specialize in game development, but have
          developed a wide variety of programs and software such as web
          applications and databases. I have contributed to different open
          source projects such as other videogames and operating systems. I am
          also passionate about music composition as a hobby, and have created
          dynamic audio systems to enhance immersion in videogames.
        </p>
      </div>
    </div>
  );
};
