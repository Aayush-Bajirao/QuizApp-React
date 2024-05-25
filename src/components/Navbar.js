import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <div class="navbar inline">
        <h1>QUIZZIE</h1>
        <div class="menu">
          <a class="dashboard">Dashboard</a>
          <a class="analytics">Analytics</a>
          <a class="createquiz">Create Quiz</a>

          <div class="logout">
            --------------------------
            <a>LOGOUT</a>
          </div>
        </div>
      </div>
    </div>
  );
}
