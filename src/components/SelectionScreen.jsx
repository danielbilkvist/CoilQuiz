import { useState, useEffect } from "react";
import data from "../questions.json";
import Board from "./Board";
import "./selection-screen.css";
import RandomIcon from "../assets/icons/Random.svg";
import GeographyIcon from "../assets/icons/Geography.svg";
import NatureIcon from "../assets/icons/Nature.svg";
import HistoryIcon from "../assets/icons/History.svg";
import CultureIcon from "../assets/icons/Culture.svg";
import FoodIcon from "../assets/icons/Food n Drinks.svg";

const { themes } = data;

// Theme metadata with icons and descriptions
const themeMetadata = {
  everything: {
    icon: RandomIcon,
    subtitle: "Everything",
  },
  geography: {
    icon: GeographyIcon,
    subtitle: "Locations & Places",
  },
  nature: {
    icon: NatureIcon,
    subtitle: "Natural World",
  },
  history: {
    icon: HistoryIcon,
    subtitle: "Historical Events",
  },
  culture: {
    icon: CultureIcon,
    subtitle: "Arts & Culture",
  },
  "food&drinks": {
    icon: FoodIcon,
    subtitle: "Food & Beverages",
  },
};

export default function SelectionScreen() {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState(() => {
    const saved = localStorage.getItem("answeredQuestions");
    if (saved) {
      try {
        return new Set(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load answered questions from localStorage", e);
        return new Set();
      }
    }
    return new Set();
  });

  // Save answered questions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(
      "answeredQuestions",
      JSON.stringify(Array.from(answeredQuestions)),
    );
  }, [answeredQuestions]);

  const handleQuestionAnswered = (questionId) => {
    setAnsweredQuestions((prev) => new Set([...prev, questionId]));
  };

  if (selectedTheme) {
    return (
      <Board
        selectedTheme={selectedTheme}
        onBack={() => setSelectedTheme(null)}
        answeredQuestions={answeredQuestions}
        onQuestionAnswered={handleQuestionAnswered}
      />
    );
  }

  return (
    <div className="selection-screen">
      <header className="selection-header">
        <h1>
          <span className="netherlands">Netherlands</span>
          <span className="or"> or </span>
          <span className="denmark">Denmark</span>
        </h1>
      </header>

      <div className="card-grid">
        {Object.entries(themes).map(([themeName, themeColor]) => {
          const meta = themeMetadata[themeName] || {
            icon: "🎯",
            subtitle: "Quiz",
          };

          return (
            <div
              key={themeName}
              className="card"
              onClick={() => setSelectedTheme(themeName)}
            >
              <div
                className="card-icon"
                style={{ backgroundColor: themeColor }}
              >
                <img src={meta.icon} alt={themeName} />
              </div>
              <h3 className="card-title">
                {themeName.toUpperCase().replace("&", " & ")}
              </h3>
              <p className="card-subtitle">{meta.subtitle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
