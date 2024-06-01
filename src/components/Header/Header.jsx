import React from "react";
import "./Header.css";

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
              <a href="">home</a>
            </li>
            <li className="nav-link">
              <a href="">leadership</a>
            </li>
            <li className="nav-link">
              <a href="">tracks</a>
            </li>
            <li className="nav-link">
              <a href="">events</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Header;
