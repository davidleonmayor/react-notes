import { useState, useEffect } from "react";
import "./Board.css";

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

function Square({ id, value, grid, turn, winnerPlayer, seyWinner, modal /*, reset*/ }) {
  const [squares, updateGrid] = grid;
  const [currentTurn, updateTurn] = turn;

  const [showModal, setShowModal] = modal;

  useEffect(() => {
    checkWinner();
  }, [squares]);
  
  const handleClick = () => {
    // si el cuadrado ya esta seleccionado no hacer nada
    if (value || winnerPlayer) return;
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

    // Check for a tie
    if (squares.every(square => square !== null)) {
      seyWinner('Empate');
      setShowModal(true);
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

export  function Board({ grid, modal, winner }) {
  // para validar si la regilla ya a sido toda completada
  const [squares, setSquares] = grid
  const [turn, setTurn] = useState(0)
  const [winnerPlayer, setWinner] = winner;

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
            winnerPlayer={winnerPlayer}
            seyWinner={setWinner}
            modal={modal}
            // reset={reset}
            />
        )}
      </section>
      <p>Winer: {winner}</p>
    </span>
  )
}
