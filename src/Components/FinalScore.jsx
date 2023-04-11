import React, { useContext } from "react";
import { FishContext, initialFishes } from "../App";

// ! Do Not Add Props Here
export const FinalScore = () => {
  const { correctCount } = useContext(FishContext);

  return (
    <div id="final-score">
      <h1>Your Final Score Was</h1>
      <div id="score">
        <p>{correctCount}</p>
        <hr />
        <p>{initialFishes.length}</p>
      </div>
    </div>
  );
};
