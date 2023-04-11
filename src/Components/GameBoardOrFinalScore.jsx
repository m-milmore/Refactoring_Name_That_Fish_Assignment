import React, { useContext } from "react";
import { FishContext } from "../App";
import { GameBoard } from "./GameBoard";
import { FinalScore } from "./FinalScore";

export const GameBoardOrFinalScore = () => {
  const { answersLeft } = useContext(FishContext);

  return <>{answersLeft.length === 0 ? <FinalScore /> : <GameBoard />}</>;
};
