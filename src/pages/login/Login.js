import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [activeForm, setActiveForm] = useState("logIn");

  const signUpClick = () => {
    setActiveForm("signUp");
  };

  return (
    <div>
      <div class="container">
        <div id="quizzieBox">
          <h1>Quizzie</h1>

          <div className="slides">
            <div class="slidesHead">
              <div className="inline">
                <button
                  id="signUpButton"
                  onClick={signUpClick}
                  class={activeForm === "signUp" ? "activeButton" : ""}
                >
                  Sign Up
                </button>
              </div>
              <div className="inline">
                <button
                  id="logInButton"
                  onClick={() => setActiveForm("logIn")}
                  class={activeForm === "logIn" ? "activeButton" : ""}
                >
                  Log In
                </button>
              </div>
            </div>

            <div class="slidesBody">
              {activeForm === "logIn" && (
                <div class="logIn inline">
                  <div>
                    <p class="inline emailin">Email</p>
                    <input class="inline"></input>
                  </div>
                  <div>
                    <p class="inline passin">Password</p>
                    <input class="inline"></input>
                  </div>
                  <div>
                    <Link to="/dashboard">
                      <button className="blueButton">log In</button>
                    </Link>
                  </div>
                </div>
              )}
              {activeForm === "signUp" && (
                <div class="inline signUp">
                  <div>
                    <p class="inline name">Name</p>
                    <input class="inline"></input>
                  </div>
                  <div>
                    <p class="inline email">Email</p>
                    <input class="inline"></input>
                  </div>
                  <div>
                    <p class="inline pass">Password</p>
                    <input class="inline"></input>
                  </div>
                  <div>
                    <p class="inline confpass">Confirm Password</p>
                    <input class="inline"></input>
                  </div>
                  <div>
                    <button className="blueButton">Sign Up</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
