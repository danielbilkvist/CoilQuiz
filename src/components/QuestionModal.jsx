import { useState } from "react";
import data from "../questions.json";
import "./question-modal.css";

const { themes } = data;

export default function QuestionModal({ question, onClose, onAnswered }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(true);
    // Call the flag if it exists and is a function
    if (question.flag && typeof question.flag === "function") {
      question.flag();
    }
  };

  const handleAnswered = () => {
    onAnswered();
    setShowAnswer(false);
  };

  // Handle both local paths and URLs
  const getImageSrc = (imagePath) => {
    if (!imagePath) return "";
    // If it's a full URL, use as-is
    if (imagePath.startsWith("http")) {
      return imagePath;
    }
    // If it's a local path, prepend the base URL
    return import.meta.env.BASE_URL + imagePath.replace(/^\//, "");
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

          {!showAnswer && question.image && (
            <div className="modal-image">
              <img src={getImageSrc(question.image)} alt={question.title} />
            </div>
          )}

          {showAnswer && (
            <>
              {question.flag && (
                <div className="modal-image">
                  <img src={getImageSrc(question.flag)} alt="flag" />
                </div>
              )}
              <div className="modal-answer">
                <p>Answer:</p>
                <h3>{question.answer}</h3>
              </div>
            </>
          )}
        </div>

        <div className="modal-footer">
          {!showAnswer ? (
            <button
              className="btn btn-primary"
              onClick={handleShowAnswer}
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
