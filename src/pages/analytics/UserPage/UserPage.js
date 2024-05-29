import React, { useState } from "react";
import "./UserPage.css";

export default function UserPage() {
  const [currentState, setCurrentState] = useState("state1"); // Initial state

  const handleButtonClick = (newState) => {
    setCurrentState(newState);
  };

  return (
    <div class="root-div">
      <button onClick={() => handleButtonClick("state1")}>State 1</button>
      <button onClick={() => handleButtonClick("state2")}>State 2</button>
      <button onClick={() => handleButtonClick("state3")}>State 3</button>

      {currentState === "state2" && (
        <div class="wrapper">
          <div class="top-row display-flex">
            <p class="ques-number">04/04</p>
            <p class="time">
              <span class="time-remaing">00:10</span>s
            </p>
          </div>
          <div class="statment">
            <h2>Your question text comes here, its a sample text.</h2>
          </div>
          <div class="display-grid">
            <button>Option 1</button>
            <button>Option 2</button>
            <button>Option 3</button>
            <button>Option 4</button>
          </div>
          <button class="submit-button">Next</button>
        </div>
      )}

      {currentState === "state1" && (
        <div class="wrapper">
          <div class="top-row display-flex">
            <p class="ques-number">04/04</p>
            <p class="time">
              <span class="time-remaing">00:10</span>s
            </p>
          </div>
          <div class="statment">
            <h2>Your question text comes here, its a sample text.</h2>
          </div>
          <div class="display-grid-image">
            <img
              src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F03%2F2012-lexus-lfa-nurburgring-package-orange-japanese-supercar-bring-a-trailer-1-6-million-usd-1.jpg?cbr=1&q=90"
              alt="Option 1"
            />
            <img
              src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F03%2F2012-lexus-lfa-nurburgring-package-orange-japanese-supercar-bring-a-trailer-1-6-million-usd-1.jpg?cbr=1&q=90"
              alt="Option 2"
            />
            <img
              src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F03%2F2012-lexus-lfa-nurburgring-package-orange-japanese-supercar-bring-a-trailer-1-6-million-usd-1.jpg?cbr=1&q=90"
              alt="Option 3"
            />
            <img
              src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F03%2F2012-lexus-lfa-nurburgring-package-orange-japanese-supercar-bring-a-trailer-1-6-million-usd-1.jpg?cbr=1&q=90"
              alt="Option 4"
            />
          </div>
          <button class="submit-button">Next</button>
        </div>
      )}

      {currentState === "state3" && (
        <div class="wrapper">
          <div class="top-row display-flex">
            <p class="ques-number">04/04</p>
            <p class="time">
              <span class="time-remaing">00:10</span>s
            </p>
          </div>
          <div class="statment">
            <h2>Your question text comes here, its a sample text.</h2>
          </div>
          <div class="display-grid-text-img">
            <div class="display-flex option">
              <p>Option 1</p>
              <img
                src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F03%2F2012-lexus-lfa-nurburgring-package-orange-japanese-supercar-bring-a-trailer-1-6-million-usd-1.jpg?cbr=1&q=90"
                alt="Option 1"
              />
            </div>
            <div class="display-flex option">
              <p>Option 1</p>
              <img
                src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F03%2F2012-lexus-lfa-nurburgring-package-orange-japanese-supercar-bring-a-trailer-1-6-million-usd-1.jpg?cbr=1&q=90"
                alt="Option 1"
              />
            </div>
            <div class="display-flex option">
              <p>Option 1</p>
              <img
                src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F03%2F2012-lexus-lfa-nurburgring-package-orange-japanese-supercar-bring-a-trailer-1-6-million-usd-1.jpg?cbr=1&q=90"
                alt="Option 1"
              />
            </div>
            <div class="display-flex option">
              <p>Option 1</p>
              <img
                src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F03%2F2012-lexus-lfa-nurburgring-package-orange-japanese-supercar-bring-a-trailer-1-6-million-usd-1.jpg?cbr=1&q=90"
                alt="Option 1"
              />
            </div>
          </div>
          <button class="submit-button">Next</button>
        </div>
      )}
    </div>
  );
}
