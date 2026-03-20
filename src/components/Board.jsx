import { useState, useMemo } from "react";
import data from "../questions.json";
import QuestionModal from "./QuestionModal";
import "./board.css";
import BackIcon from "../assets/icons/Back.svg";
import RandomIcon from "../assets/icons/Random.svg";
import GeographyIcon from "../assets/icons/Geography.svg";
import NatureIcon from "../assets/icons/Nature.svg";
import HistoryIcon from "../assets/icons/History.svg";
import CultureIcon from "../assets/icons/Culture.svg";
import FoodIcon from "../assets/icons/Food n Drinks.svg";

const { themes, questions } = data;

const themeMetadata = {
  general: { icon: RandomIcon },
  geography: { icon: GeographyIcon },
  nature: { icon: NatureIcon },
  history: { icon: HistoryIcon },
  culture: { icon: CultureIcon },
  "food&drinks": { icon: FoodIcon },
};

export default function Board({ selectedTheme, onBack }) {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set());

  // Get questions for the selected theme
  const themeQuestions = useMemo(() => {
    if (!selectedTheme) return [];
    return questions.filter((q) => q.theme === selectedTheme);
  }, [selectedTheme]);

  const handleQuestionClick = (question) => {
    if (!answeredQuestions.has(question.id)) {
      setSelectedQuestion(question);
    }
  };

  const handleAnswerSelected = () => {
    if (selectedQuestion) {
      setAnsweredQuestions((prev) => new Set([...prev, selectedQuestion.id]));
      setSelectedQuestion(null);
    }
  };

  const themeColor = themes[selectedTheme] || "#333";
  const metadata = themeMetadata[selectedTheme] || { icon: "🎯" };

  return (
    <div className="board-container">
      <button
        className="emoji-back-button"
        onClick={onBack}
        style={{ backgroundColor: themeColor }}
      >
        <img src={BackIcon} alt="Back" />
      </button>

      <div className="theme-header" style={{ backgroundColor: themeColor }}>
        <img src={metadata.icon} alt={selectedTheme} className="theme-icon" />
        <h1 className="theme-title">
          {selectedTheme.toUpperCase().replace("&", " & ")}
        </h1>
      </div>

      <div className="questions-grid">
        {themeQuestions.map((question, index) => {
          const isAnswered = answeredQuestions.has(question.id);
          return (
            <button
              key={question.id}
              className={`grid-question-button ${isAnswered ? "answered" : ""}`}
              onClick={() => handleQuestionClick(question)}
              disabled={isAnswered}
              style={{
                backgroundColor: isAnswered ? "#e0e0e0" : themeColor,
                borderColor: themeColor,
              }}
            >
              {isAnswered ? "✓" : index + 1}
            </button>
          );
        })}
      </div>

      {selectedQuestion && (
        <QuestionModal
          question={selectedQuestion}
          onClose={() => setSelectedQuestion(null)}
          onAnswered={handleAnswerSelected}
        />
      )}
    </div>
  );
}
