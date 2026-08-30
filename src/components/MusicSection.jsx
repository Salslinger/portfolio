import { useState } from "react";

import MusicArtist from "./MusicArtist";
import ModalComponent from "./ModalComponent";
import musicJamData from "../../constant/musicJamData.json";

const MusicSection = () => {
  const [selectedArtist, setSelectedArtist] = useState(null);

  return (
    <div id="music" className="lg:-scroll-m-80 min-h-screen text-white py-5">
      <img src="/website/div_wave.svg" className="w-full" />

      <div className="bg-[#F05644]/90">
        <div className="text-5xl pb-4 text-tertiary font-bold text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Music
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center items-start">
          {musicJamData.map((music, index) => (
            <MusicArtist
              key={index}
              title={music.title}
              creator={music.creator}
              soundcloud_links={music.soundcloud_links}
              onClick={() => setSelectedArtist(music)}
            />
          ))}
        </div>
      </div>

      <img src="/website/div_wave.svg" className="-scale-y-100 w-full" />

      <ModalComponent
        isOpen={selectedArtist !== null}
        onClose={() => setSelectedArtist(null)}
      >
        {selectedArtist && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-tertiary">
              {selectedArtist.title}
            </h2>

            <p className="mt-2 text-lg">{selectedArtist.creator}</p>

            <div className="mt-5 lg:flex gap-6">
              {selectedArtist.soundcloud_links?.map((link) => (
                <iframe
                  width="400"
                  height="400"
                  allow="autoplay"
                  src={`${link}&color=%23b03626&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
                />
              ))}
              <p className="w-1/2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                eveniet impedit illum quis! Beatae quia possimus vitae at
                laboriosam iure necessitatibus sequi praesentium tempora natus,
                error aspernatur, dolorem unde labore!
              </p>
            </div>
          </div>
        )}
      </ModalComponent>
    </div>
  );
};

export default MusicSection;
