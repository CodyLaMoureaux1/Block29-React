import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPlayerById } from "../api"; // Import the getPlayerById function

const SinglePlayer = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const playerData = await getPlayerById(id);
        setPlayer(playerData);
      } catch (error) {
        console.error("Error fetching player data:", error);
      }
    };

    fetchPlayerData();
  }, [id]);

  if (!player) {
    return <div>Loading...</div>;
  }

  return (
    <div className="singleCard">
      {/* Render a single player card with the fetched player data */}
      <div className="player-card1">
        <img
          src={player.imageUrl}
          alt={player.name}
          style={{ maxWidth: "200px", maxHeight: "300px" }}
        />
        <h3>{player.name}</h3>
        <p>Breed: {player.breed}</p>
        <p>Status: {player.status}</p>
        <p>Owner: {player.id}</p>
      </div>
    </div>
  );
};

export default SinglePlayer;
