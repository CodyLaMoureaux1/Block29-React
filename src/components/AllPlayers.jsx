// AllPlayers.jsx

import React, { useState, useEffect } from "react";
import { getAllPlayers } from "../api";
import PlayerCard from "./PlayerCard";
import "../../src/App.css";
import SearchBar from "./SearchBar";
import { useLocation } from "react-router-dom";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setFilteredPlayers(players);
  }, [location]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const playerData = await getAllPlayers();
        setPlayers(playerData);
        setFilteredPlayers(playerData);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (query) => {
    const filteredResults = players.filter((player) =>
      player.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPlayers(filteredResults);
  };

  return (
    <div className="searchBar">
      <SearchBar onSearch={handleSearch} />

      <div className="main">
        <div className="player-cards-container">
          {filteredPlayers.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </div>
    </div>
  );
}
