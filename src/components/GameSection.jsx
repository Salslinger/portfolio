import { useState } from "react";

import gameJamData from "../../constant/gameJamData.json";
import GameTitle from "./GameTitle";
import ModalComponent from "./ModalComponent";

const GameSection = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <div
      id="games"
      className="scroll-mt-24 min-h-screen text-white text-center py-5"
    >
      {/* Heading */}
      <div className="text-5xl pb-4 text-primary font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        Games
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center">
        {gameJamData.map((game, index) => (
          <GameTitle
            key={index}
            title={game.title}
            creator={game.creator}
            video_src={game.video_src}
            onClick={() => setSelectedGame(game)}
          />
        ))}
      </div>

      <ModalComponent
        isOpen={selectedGame !== null}
        onClose={() => setSelectedGame(null)}
      >
        {selectedGame && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary">
              {selectedGame.title}
            </h2>

            <p className="mt-2 text-lg">{selectedGame.creator}</p>

            <video
              className="mx-auto mt-5 w-full"
              controls
              src={selectedGame.video_src}
            />
          </div>
        )}
      </ModalComponent>
    </div>
  );
};

export default GameSection;
