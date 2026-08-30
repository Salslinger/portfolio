import MusicArtist from "./MusicArtist";
import musicJamData from "../../constant/musicJamData.json";

const MusicSection = () => {
  return (
    <div id="music" className="lg:-scroll-m-80 min-h-screen text-white py-5">
      <img src="/website/div_wave.svg" className="w-full"></img>

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
            />
          ))}
        </div>
      </div>

      <img src="/website/div_wave.svg" className="-scale-y-100 w-full"></img>
    </div>
  );
};

export default MusicSection;
