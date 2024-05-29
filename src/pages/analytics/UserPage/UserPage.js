import React, { useState } from "react";
import "./UserPage.css";

export default function UserPage() {
  const [currentState, setCurrentState] = useState("state3"); // Initial state

  const handleButtonClick = (newState) => {
    setCurrentState(newState);
  };

  const imageUrl1 =
    "https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Huracan-EVO/7195/1645612088168/front-left-side-47.jpg"; // Replace with your image path
  const styles1 = {
    backgroundImage: `url(${imageUrl1})`,
  };
  const imageUrl2 =
    "https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Huracan-EVO/7195/1645612088168/front-left-side-47.jpg"; // Replace with your image path
  const styles2 = {
    backgroundImage: `url(${imageUrl1})`,
  };
  const imageUrl3 =
    "https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Huracan-EVO/7195/1645612088168/front-left-side-47.jpg"; // Replace with your image path
  const styles3 = {
    backgroundImage: `url(${imageUrl1})`,
  };
  const imageUrl4 =
    "https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Huracan-EVO/7195/1645612088168/front-left-side-47.jpg"; // Replace with your image path
  const styles4 = {
    backgroundImage: `url(${imageUrl1})`,
  };

  return (
    <div class="root-div">
      <button onClick={() => handleButtonClick("state1")}>State 1</button>
      <button onClick={() => handleButtonClick("state2")}>State 2</button>
      <button onClick={() => handleButtonClick("state3")}>State 3</button>

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
          <div class="display-grid">
            <button>Option 1</button>
            <button>Option 2</button>
            <button>Option 3</button>
            <button>Option 4</button>
          </div>
          <button class="submit-button">Next</button>
        </div>
      )}

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
          <div class="display-grid-image">
            <div style={styles1}></div>
            <div style={styles2}></div>
            <div style={styles3}></div>
            <div style={styles4}></div>
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
              <div style={styles1}></div>
            </div>
            <div class="display-flex option">
              <p>Option 1</p>
              <div style={styles2}></div>
            </div>
            <div class="display-flex option">
              <p>Option 1</p>
              <div style={styles3}></div>
            </div>
            <div class="display-flex option">
              <p>Option 1</p>
              <div style={styles4}></div>
            </div>
          </div>
          <button class="submit-button">Next</button>
        </div>
      )}
    </div>
  );
}
