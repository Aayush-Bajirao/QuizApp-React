import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar inline">
        <h1>QUIZZIE</h1>
        <div className="menu">
          <nav>
            <Link className="dashboard" to="/dashboard">
              Dashboard
            </Link>
            <Link className="analytics" to="/analytics">
              Analytics
            </Link>
            <Link className="createquiz" to="/create-quiz">
              Create Quiz
            </Link>
            <div class="border"></div>
            <Link className="logout" to="/">
              LOGOUT
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
