import FadeIn from "./FadeIn.jsx";

const GameTitle = ({ title, creator, video_src }) => {
  return (
    <FadeIn>
      <div className="w-75 lg:w-100 py-5 hover:cursor-pointer">
        <p className="text-primary text-center text-lg">
          {title}
          <br></br>
          {creator}
        </p>
        <video controls src={video_src}></video>
      </div>
    </FadeIn>
  );
};

export default GameTitle;
