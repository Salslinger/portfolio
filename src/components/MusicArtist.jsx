import FadeIn from "./FadeIn.jsx";

const MusicArtist = ({ title, creator, soundcloud_links }) => {
  return (
    <FadeIn>
      <div className="text-center py-5">
        <p className="text-tertiary text-center text-lg">
          {title}
          <br></br>
          {creator}
        </p>

        {soundcloud_links.map((link, index) => (
          <div key={index} className="w-full max-w-2xl mx-auto">
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
