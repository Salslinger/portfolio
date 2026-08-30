import { useState } from "react";

import ArtPiece from "./ArtPiece";
import ModalComponent from "./ModalComponent";
import artJamData from "../../constant/artJamData.json";

const GallerySection = () => {
  const [selectedArt, setSelectedArt] = useState(null);

  return (
    <div
      id="gallery"
      className="scroll-mt-24 min-h-screen text-white py-5 pb-20 text-center"
    >
      <div className="text-5xl pb-4 text-tertiary font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        Art
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-12 px-5">
        {artJamData.map((art, index) => (
          <ArtPiece
            key={index}
            title={art.title}
            creator={art.creator}
            img_src={art.img_src}
            onClick={() => setSelectedArt(art)}
          />
        ))}
      </div>

      <ModalComponent
        isOpen={selectedArt !== null}
        onClose={() => setSelectedArt(null)}
      >
        {selectedArt && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-tertiary">
              {selectedArt.title}
            </h2>

            <p className="mt-2 text-lg">{selectedArt.creator}</p>

            <img
              className="mx-auto mt-5 max-h-[70vh] max-w-full object-contain"
              src={selectedArt.img_src}
              alt={selectedArt.title}
            />
          </div>
        )}
      </ModalComponent>
    </div>
  );
};

export default GallerySection;
