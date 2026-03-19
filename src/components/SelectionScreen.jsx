import { useState } from "react";
import data from "../questions.json";
import Board from "./Board";
import "./selection-screen.css";

const { themes } = data;

// Theme metadata with icons and descriptions
const themeMetadata = {
  general: {
    icon: "/src/assets/icons/Random.svg",
    subtitle: "General Knowledge",
  },
  geography: {
    icon: "/src/assets/icons/Geography.svg",
    subtitle: "Locations & Places",
  },
  nature: {
    icon: "/src/assets/icons/Nature.svg",
    subtitle: "Natural World",
  },
  history: {
    icon: "/src/assets/icons/History.svg",
    subtitle: "Historical Events",
  },
  culture: {
    icon: "/src/assets/icons/Culture.svg",
    subtitle: "Arts & Culture",
  },
  "food&drinks": {
    icon: "/src/assets/icons/Food n Drinks.svg",
    subtitle: "Food & Beverages",
  },
};

export default function SelectionScreen() {
  const [selectedTheme, setSelectedTheme] = useState(null);

  if (selectedTheme) {
    return (
      <Board
        selectedTheme={selectedTheme}
        onBack={() => setSelectedTheme(null)}
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
