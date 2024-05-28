import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Mymodal from "../pages/createQuiz/Mymodal";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

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

            <button onClick={() => setShowModal(true)} className="createquiz">
              <a>Create Quiz</a>
            </button>
            {showModal && <Mymodal closeModal={closeModal} />}

            <Link className="logout" to="/">
              LOGOUT
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
