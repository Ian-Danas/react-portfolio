import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
export default function Navbar(props) {
  return (
    <nav className="Navbar">
      <h1>Ian Danas</h1>
        <Link to="/">About Me</Link>
        <Link to="/Portfolio">Portfolio</Link>
        <Link to="/Contact">Contact Me</Link>
        <Link to="/Resume">Resume</Link>
    </nav>
  );
}
