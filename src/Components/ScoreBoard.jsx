import React, { useContext } from "react";
import { FishContext } from "../App";
import "./styles/score-board.css";

// ! do not add props to scoreboard
export const ScoreBoard = () => {
  const { correctCount, incorrectCount, answersLeft } = useContext(FishContext);

  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
};
