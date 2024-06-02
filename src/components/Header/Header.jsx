import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="container">
        <div className="logo">
          <h1>mut tech club</h1>
        </div>
        <div className="nav">
          <ol className="nav-list">
            <li className="nav-link">
              <Link to="/" className="links" target="blank">
                home
              </Link>
            </li>
            <li className="nav-link">
              <Link to="../../Leadership" className="links" target="blank">
                leadership
              </Link>
            </li>
            <li className="nav-link">
              <Link to="../../Tracks" className="links" target="blank">
                tracks
              </Link>
            </li>
            <li className="nav-link">
              <Link to="../../Events" className="links" target="blank">
                events
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Header;
