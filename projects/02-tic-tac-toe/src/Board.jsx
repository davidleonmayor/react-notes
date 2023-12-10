import { useState, useEffect } from "react";
import "./Board.css";


// tabla
const grid = Array(9).fill(null);
const winningCombinations = [
  [0, 1, 2], // primera fila
  [3, 4, 5], // segunda fila
  [6, 7, 8], // tercera fila
  [0, 3, 6], // primera columna
  [1, 4, 7], // segunda columna
  [2, 5, 8], // tercera columna
  [0, 4, 8], // diagonal
  [2, 4, 6], // diagonal
];

<<<<<<< HEAD
function Square({ id, value, grid, turn, winerPlayer, seyWinner }) {
=======
function Square({ id, value, grid, turn, seyWinner }) {
>>>>>>> cf31d2c6661e72ea15db7af5e58842d71e2e6922
  const [squares, updateGrid] = grid;
  const [currentTurn, updateTurn] = turn;

  useEffect(() => {
    checkWinner();
  }, [squares]);
  
  const handleClick = () => {
    // si el cuadrado ya esta seleccionado no hacer nada
    if (value || winerPlayer) return;
    else {
      if (currentTurn === 0) {
        const newGrid = [...squares];
        newGrid[id] = "O";
        updateGrid(newGrid);
        updateTurn(1);
      } else {
        const newGrid = [...squares];
        newGrid[id] = "X";
        updateGrid(newGrid);
        updateTurn(0);
      }
    }
    checkWinner()
  }

  // comprobar si hay un ganador
  const checkWinner = () => {
    for (let i=0; i<winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        seyWinner(squares[a]);
      }
    }
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  )
}

export  function Board() {
  // para validar si la regilla ya a sido toda completada
  const [squares, setSquares] = useState(grid)
  const [turn, setTurn] = useState(0)
  const [winner, setWinner] = useState(null)

  return (
    <span>
      <section className="board">
        {squares.map((value, index) =>
<<<<<<< HEAD
          <Square key={index} id={index} value={value} grid={[squares, setSquares]} turn={[turn, setTurn]} winerPlayer={winner} seyWinner={setWinner} />
=======
          <Square key={index} id={index} value={value} grid={[squares, setSquares]} turn={[turn, setTurn]} seyWinner={setWinner} />
>>>>>>> cf31d2c6661e72ea15db7af5e58842d71e2e6922
        )}
      </section>
      <p>Winer: {winner}</p>
    </span>
  )
}