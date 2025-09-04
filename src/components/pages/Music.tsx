export const Music = () => {
  //const [playing, setPlaying] = useState(false);

  return (
    <div className="min-h-screen dark-to-light">
      <div className="w-full max-w-2xl mx-auto flex flex-wrap justify-center">
        <iframe
          width="50%"
          height="300"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/vgdo-uta/sets/race-thing&visual=true"
        />
      </div>
    </div>
  );
};
