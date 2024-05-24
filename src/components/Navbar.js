import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <div class="navbar inline">
        <h1>QUIZZIE</h1>
        <div class="menu">
          <a>Dashboard</a>
          <a>Analytics</a>
          <a>Create Quiz</a>

          <div class="logout">
            --------------------------
            <a>LOGOUT</a>
          </div>
        </div>
      </div>
    </div>
  );
}
