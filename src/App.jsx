import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>
          <span className="dutch">Dutch</span>
          <span className="or"> or </span>
          <span className="danish">Danish</span>
        </h1>
      </header>
      <Board />
    </div>
  );
}

export default App;
