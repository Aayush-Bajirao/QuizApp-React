import React from "react";
import "./UserPage.css";

export default function UserPage() {
  return (
    <div class="root-div">
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
    </div>
  );
}
