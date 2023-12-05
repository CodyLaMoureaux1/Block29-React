import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NavBar from "./components/NavBar";
import NewPlayerForm from "./components/NewPlayerForm";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/Singleplayer/:id" element={<SinglePlayer />} />
          <Route path="/new" element={<NewPlayerForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
