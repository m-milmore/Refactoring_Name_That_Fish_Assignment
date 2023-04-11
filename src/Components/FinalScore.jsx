import React from "react";
const correctCount = 0;
const totalCount = 0;

// ! Do Not Add Props Here
export const FinalScore = () => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{correctCount}</p>
      <hr />
      <p>{totalCount}</p>
    </div>
  </div>
);
