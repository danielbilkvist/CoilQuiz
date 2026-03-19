import { useState } from "react";
import data from "../../questions.json";
import "./question-modal.css";

const { themes } = data;

export default function QuestionModal({ question, onClose, onAnswered }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleAnswered = () => {
    onAnswered();
    setShowAnswer(false);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <div
          className="modal-header"
          style={{ backgroundColor: themes[question.theme] }}
        >
          <h2>{question.theme.toUpperCase()}</h2>
        </div>

        <div className="modal-body">
          <div className={`modal-question ${showAnswer ? "hide" : ""}`}>
            <h3>{question.title}</h3>
          </div>

          {question.image && (
            <div className="modal-image">
              <img src={question.image} alt={question.title} />
            </div>
          )}

          {showAnswer && (
            <div className="modal-answer">
              <p>Answer:</p>
              <h3>{question.answer}</h3>
            </div>
          )}
        </div>

        <div className="modal-footer">
          {!showAnswer ? (
            <button
              className="btn btn-primary"
              onClick={() => setShowAnswer(true)}
              style={{ backgroundColor: themes[question.theme] }}
            >
              Show Answer
            </button>
          ) : (
            <>
              <button
                className="btn btn-secondary"
                onClick={() => setShowAnswer(false)}
              >
                Back
              </button>
              <button
                className="btn btn-success"
                onClick={handleAnswered}
                style={{ backgroundColor: themes[question.theme] }}
              >
                Done
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
