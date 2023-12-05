import React from "react";
import "../../src/App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const PlayerCard = ({ player, showDetails }) => {
  const [showDetailsLocal, setShowDetailsLocal] = useState(showDetails);

  const toggleDetails = () => {
    setShowDetailsLocal(!showDetailsLocal);
  };

  return (
    <div className={`player-card smaller-player-card`}>
      <img src={player.imageUrl} className="player-image" alt={player.name} />
      <h3>{player.name}</h3>

      {/* Use Link to navigate to SinglePlayer with the player ID */}
      <Link to={`/singleplayer/${player.id}`}>
        <button>See Details</button>
      </Link>

      {showDetailsLocal && (
        <div className="details-container">
          <p>
            <strong>Breed:</strong> {player.breed}
          </p>
          <p>
            <strong>Status:</strong> {player.status}
          </p>
        </div>
      )}
    </div>
  );
};

export default PlayerCard;
