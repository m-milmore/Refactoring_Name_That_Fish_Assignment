import React, { useState, createContext } from "react";
import { ScoreBoard } from "./Components/ScoreBoard";
import { GameBoardOrFinalScore } from "./Components/GameBoardOrFinalScore";
import { Images } from "./assets/images";
import "./App.css";
import "./Components/styles/final-score.css";

export const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export const FishContext = createContext();

const FishProvider = ({ children }) => {
  const [nextFishToName, setNextFishToName] = useState(initialFishes[0]);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [answersLeft, setAnswersLeft] = useState(() =>
    initialFishes.map((fish) => fish.name)
  );

  const guessWithFishName = (fishGuess) => {
    setAnswersLeft((prev) =>
      prev.filter((fish) => fish !== nextFishToName.name)
    );
    nextFishToName.name === fishGuess
      ? setCorrectCount((prev) => prev + 1)
      : setIncorrectCount((prev) => prev + 1);
    const currentIndex = initialFishes.findIndex(
      ({ name }) => name === nextFishToName.name
    );
    currentIndex + 1 < initialFishes.length &&
      setNextFishToName(initialFishes[currentIndex + 1]);
  };

  return (
    <FishContext.Provider
      value={{
        correctCount,
        incorrectCount,
        answersLeft,
        nextFishToName,
        guessWithFishName,
      }}
    >
      {children}
    </FishContext.Provider>
  );
};

function App() {
  return (
    <div className="App">
      <FishProvider>
        <ScoreBoard />
        <GameBoardOrFinalScore />
      </FishProvider>
    </div>
  );
}

export default App;
