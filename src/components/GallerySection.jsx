import ArtPiece from "./ArtPiece";
import artJamData from "../../constant/artJamData.json";

const GallerySection = () => {
  return (
    <div
      id="gallery"
      className="scroll-mt-24 min-h-screen  text-white py-5 pb-20 text-center"
    >
      <div className=" text-5xl pb-4 text-tertiary font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        Art
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-12 px-5">
        {artJamData.map((art, index) => (
          <ArtPiece
            key={index}
            title={art.title}
            creator={art.creator}
            img_src={art.img_src}
          />
        ))}
      </div>
    </div>
  );
};
export default GallerySection;
