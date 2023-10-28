import React, { useState } from "react";
import { calculateWinner } from "./utils";
import Board from "./Board";
import './styles/game2.css'
const style = {
 
  info: {
    fontSize: "2rem",
    opacity: "0.5",
    textShadow: "5px 5px black",
  },
};

const Game2 = () => {
  //board state initial = [null,null,null,null,null,null,null,null,null]
  const [board, setBoard] = useState(Array(9).fill(null));
  //state to track next turn
  const [xTurn, setXTurn] = useState(true);
  //variable to find winner (otherwise equals to null)
  const winner = calculateWinner(board);

  //everytime checks if winner is present or clicked on marked square then just returns
  //otherwise update board array's clicked index value with 'X' or 'O'
  
  const handleClick = (i) => {
    const tmpBoard = [...board];
    if (!!winner || !!tmpBoard[i]) return;
    
    tmpBoard[i] = xTurn ? "X" : "O";
    setBoard(tmpBoard);
    setXTurn(!xTurn);
    
  };

  const resetBoard = () => (
    
        <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
       
  );

  return (
    <div className="tic">
      <p style={style.info}>
        {winner ? (winner!="Draw" ? "Winner: " + winner : "DRAW") : "Next Player: " + (xTurn ? "X" : "O") }
      </p>
      <Board squares={board} handleClick={handleClick} />
      <div>{resetBoard()}</div>
    </div>
  );
};

export default Game2;