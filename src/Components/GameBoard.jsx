import React, { useState, useContext } from "react";
import { FishContext } from "../App";
import "./styles/game-board.css";

// ! Do not add props to gameboard
export const GameBoard = () => {
  const { nextFishToName, guessWithFishName } = useContext(FishContext);
  const [fishGuess, setFishGuess] = useState("");

  const handleOnChange = ({ target: { value } }) => {
    setFishGuess(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    guessWithFishName(fishGuess);
    setFishGuess("");
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={handleSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={fishGuess}
          onChange={handleOnChange}
        />
        <input type="submit" style={{ cursor: "pointer" }} />
      </form>
    </div>
  );
};
