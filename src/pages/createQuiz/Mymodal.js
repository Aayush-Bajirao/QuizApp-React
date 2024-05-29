import "./Mymodal.css";
import { useState } from "react";
import QuestionModal from "./QuestionModal";

const Mymodal = ({ closeModal }) => {
  const [isActive, setIsActive] = useState();
  const [showModal2, setShowModal2] = useState(false);

  const closeModal2 = () => setShowModal2(false);

  const handleDisplay = () => {
    setShowModal2(true);
  };

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div>
      <div class="modal-wrapper"></div>
      <div class="modal-container">
        <div class="quiz-name-type">
          <input class="quiz-name" placeholder="Quiz name"></input>

          <div class="display-flex buttons">
            <p class="quiz-type">Quiz Type</p>
            <button
              onClick={handleClick}
              class="qna-button"
              style={{
                backgroundColor: isActive ? "#60B84B" : "white",
                color: isActive ? "white" : "#757575",
              }}
            >
              Q & A
            </button>
            <button
              onClick={handleClick}
              class="poll-type-button"
              style={{
                backgroundColor: isActive ? "white" : "#60B84B",
                color: isActive ? "#757575" : "white",
              }}
            >
              Poll Type
            </button>
          </div>
          <div class="action-buttons">
            <button class="cancel" onClick={closeModal}>
              Cancel
            </button>
            <button onClick={handleDisplay} class="continue">
              Continue
            </button>
            {showModal2 && <QuestionModal closeModal2={closeModal2} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mymodal;
