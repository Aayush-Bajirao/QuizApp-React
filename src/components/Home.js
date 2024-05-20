import React, { useState } from "react";

export default function Home() {
  const [activeForm, setActiveForm] = useState("logIn");

  const signUpClick = () => {
    setActiveForm("signUp");
  };

  return (
    <div>
      <div className="slides">
        <div className="inline">
          <button
            id="signUpButton"
            onClick={signUpClick}
            class={activeForm === "signUp" ? "activeSignUpButton" : ""}
          >
            Sign Up
          </button>
        </div>
        <div className="inline">
          <button
            id="logInButton"
            onClick={() => setActiveForm("logIn")}
            class={activeForm === "logIn" ? "activeSignUpButton" : ""}
          >
            Log In
          </button>
        </div>

        <div class="slidesBody">
          {activeForm === "logIn" && (
            <div class="logIn inline">
              <div>
                <p class="inline">Email</p>
                <input class="inline"></input>
              </div>
              <div>
                <p class="inline">Password</p>
                <input class="inline"></input>
              </div>
              <div>
                <button className="blueButton">log In</button>
              </div>
            </div>
          )}
          {activeForm === "signUp" && (
            <div class="inline signUp">
              <div>
                <p class="inline">Email</p>
                <input class="inline"></input>
              </div>
              <div>
                <p class="inline">Password</p>
                <input class="inline"></input>
              </div>
              <div>
                <p class="inline">Confirm Password</p>
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
  );
}
