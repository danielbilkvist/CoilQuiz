import { useState, useMemo } from "react";
import data from "../../questions.json";
import QuestionModal from "./QuestionModal";
import "./board.css";

const { themes, questions } = data;

export default function Board() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set());

  // Organize questions by theme (category)
  const categories = useMemo(() => {
    const grouped = {};
    questions.forEach((q) => {
      if (!grouped[q.theme]) {
        grouped[q.theme] = [];
      }
      grouped[q.theme].push(q);
    });
    return grouped;
  }, []);

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

  const categoryList = Object.keys(categories);

  return (
    <div className="board-container">
      <div className="board">
        {categoryList.map((category) => (
          <div key={category} className="category-column">
            <div
              className="category-header"
              style={{
                backgroundColor: themes[category] || "#333",
              }}
            >
              <h3>{category.toUpperCase()}</h3>
            </div>
            <div className="questions-column">
              {categories[category].map((question, index) => {
                const isAnswered = answeredQuestions.has(question.id);
                return (
                  <button
                    key={question.id}
                    className={`question-button ${isAnswered ? "answered" : ""}`}
                    onClick={() => handleQuestionClick(question)}
                    disabled={isAnswered}
                    style={{
                      backgroundColor: isAnswered
                        ? "#e0e0e0"
                        : themes[question.theme],
                      borderColor: themes[question.theme],
                    }}
                  >
                    {isAnswered ? "✓" : index + 1}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
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
