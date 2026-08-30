import FadeIn from "./FadeIn.jsx";

const GameTitle = ({ title, creator, video_src, onClick }) => {
  return (
    <FadeIn>
      <div
        className="place-items-center grid w-100 h-100 py-5 hover:cursor-pointer liquid-glass"
        onClick={onClick}
      >
        <p className="text-primary text-center text-lg">
          {title}
          <br />
          {creator}
        </p>

        <video controls src={video_src} className="w-5/6 h-5/6"></video>
      </div>
    </FadeIn>
  );
};

export default GameTitle;
