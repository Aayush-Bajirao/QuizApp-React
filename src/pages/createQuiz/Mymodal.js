import "./Mymodal.css";

const Mymodal = ({ closeModal }) => {
  return (
    <div>
      <div class="modal-wrapper"></div>
      <div class="modal-container">
        <div class="quiz-name-type">
          <input class="quiz-name" placeholder="Quiz name"></input>

          <div class="display-flex buttons">
            <p class="quiz-type">Quiz Type</p>
            <button class="qna-button">Q & A</button>
            <button class="poll-type-button">Poll Type</button>
          </div>
          <div class="action-buttons">
            <button class="cancel" onClick={closeModal}>
              Cancel
            </button>
            <button class="continue">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mymodal;
