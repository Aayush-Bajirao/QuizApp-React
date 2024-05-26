import React, { useState } from "react";
import "./QuestionwiseAnalysis.css";
import Navbar from "../../components/Navbar";

export default function QuestionwiseAnalysis() {
  const [activeForm, setActiveForm] = useState("poll");

  const qna = () => {
    setActiveForm("qna");
  };
  return (
    <div>
      <div class="navbar">
        <Navbar></Navbar>
      </div>
      <div class="page">
        <div class="quiz-name-container">
          <h2>Quiz 2</h2>
          <div class="created-on">
            <div>Created on: 04 Sep, 2023</div>
            <div>Impressions: 667</div>
          </div>
        </div>

        <div class="pop-up-sample display-flex">
          <div className="pop-up-poll">
            <button id="pop-up-poll" onClick={() => setActiveForm("poll")}>
              poll
            </button>
          </div>
          <div className="pop-up-qna">
            <button id="pop-up-qna" onClick={qna}>
              qna
            </button>
          </div>

          <div class="sliderbody">
            {activeForm == "poll" && (
              <div class="container">
                <div class="question">
                  <h1>Q.1 Question place holder for analysis ?</h1>
                  <div class="analysis display-flex">
                    <div class="attempted">
                      <h2>40</h2>
                      <p>people attempted the question</p>
                    </div>
                    <div class="correct">
                      <h2>40</h2>
                      <p>people answered correctly</p>
                    </div>
                    <div class="incorrect">
                      <h2>40</h2>
                      <p>people answered incorrectly</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeForm == "qna" && (
              <div class="container">
                <div class="question">
                  <h1>Q.1 Question place holder for analysis ?</h1>
                  <div class="analysis option display-flex">
                    <div class="op1">
                      <h2>40</h2>
                      <p>Option 1</p>
                    </div>
                    <div class="op2">
                      <h2>40</h2>
                      <p>Option 2</p>
                    </div>
                    <div class="op3">
                      <h2>40</h2>
                      <p>Option 3</p>
                    </div>
                    <div class="op4">
                      <h2>40</h2>
                      <p>Option 4</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
