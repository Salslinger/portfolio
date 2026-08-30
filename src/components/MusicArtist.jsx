import FadeIn from "./FadeIn.jsx";

const MusicArtist = ({ title, creator, soundcloud_links, onClick }) => {
  return (
    <FadeIn>
      <div
        className="py-5 hover:cursor-pointer h-100 w-100 liquid-glass"
        onClick={onClick}
      >
        <p className="text-tertiary text-center text-lg font-bold">
          {title}
          <br />
          {creator}
        </p>

        {soundcloud_links.map((link, index) => (
          <div key={index} className="w-7/8 max-w-2xl mx-auto">
            <iframe
              width="100%"
              height="300"
              allow="autoplay"
              src={`${link}&color=%23b03626&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
            />
          </div>
        ))}
      </div>
    </FadeIn>
  );
};

export default MusicArtist;
