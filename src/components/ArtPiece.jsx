import FadeIn from "./FadeIn.jsx";

const ArtPiece = ({ title, creator, img_src, onClick }) => {
  return (
    <FadeIn>
      <div
        className="hover:cursor-pointer h-108 liquid-glass"
        onClick={onClick}
      >
        <p className="text-primary text-center text-lg">
          {title}
          <br />
          {creator}
        </p>

        <img
          src={img_src}
          alt={title}
          className="object-contain w-full h-4/5"
        />
      </div>
    </FadeIn>
  );
};

export default ArtPiece;
