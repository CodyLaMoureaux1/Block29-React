import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function NavBar() {
  return (
    <nav className="NavBar1">
      <h1>The Puppy Bowl</h1>
      <div className="nav-links">
        <button className="button1">
          <Link to="/">Home </Link>
        </button>
        <button className="button2">
          <Link to="/new">New Player Form</Link>
        </button>
      </div>
    </nav>
  );
}
