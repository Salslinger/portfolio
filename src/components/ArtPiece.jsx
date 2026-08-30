import FadeIn from "./FadeIn.jsx";

const ArtPiece = ({ title, creator, img_src }) => {
  return (
    <FadeIn>
      <div className="h-72  text-center py-5">
        <p className="text-primary text-center text-lg">
          {title}
          <br></br>
          {creator}
        </p>
        <img
          src={img_src}
          className="w-full h-full object-contain bg-black/20 rounded-3xl"
        ></img>
      </div>
    </FadeIn>
  );
};

export default ArtPiece;
