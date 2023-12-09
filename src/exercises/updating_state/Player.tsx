import { useState } from "react";
import produce from "immer";

const Player = () => {
  const [player, setPlayer] = useState({
    id: 1,
    player: {
      name: "John Doe",
    },
  });

  return (
    <>
      <div>Current Player {player.player.name}</div>
      <button
        onClick={() => {
          const updatedPlayer = produce((draft) => {
            draft.player.name = "Bob";
          });

          setPlayer(updatedPlayer);
        }}
      >
        Update Player
      </button>
    </>
  );
};

export default Player;
