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

function Square({ id, value, grid, turn, winerPlayer, seyWinner, show, reset }) {
  const [squares, updateGrid] = grid;
  const [currentTurn, updateTurn] = turn;

  // resetear el juego
  // const [resetGame, setResetGame] = reset;
  const [showModal, setShowModal] = show;


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
        setShowModal(true);
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

export  function Board({ show, reset, winnerState }) {
  // para validar si la regilla ya a sido toda completada
  const [squares, setSquares] = useState(grid)
  const [turn, setTurn] = useState(0)
  const [winner, setWinner] = winnerState;

  return (
    <span>
      <section className="board">
        {squares.map((value, index) =>
          <Square
            key={index}
            id={index}
            value={value}
            grid={[squares, setSquares]}
            turn={[turn, setTurn]}
            winerPlayer={winner}
            seyWinner={setWinner}
            show={show}
            reset={reset}
            />
        )}
      </section>
      <p>Winer: {winner}</p>
    </span>
  )
}