import { useState } from 'react'
import { Board } from './Board'
import WinnerModal  from './WinnerModal'
import './Board.css'
import './App.css'

function App() {
  // const [resetGame, setResetGame] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(0)
  const [winnerPlayer, setWinnerPlayer] = useState(null)
  
  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setTurn(0);
    setWinnerPlayer(null);
  };

  // TODO: resetear el juego
  return (
    <main>
      <h1>Tic Tac Toe</h1>
      <Board grid={[squares, setSquares]} modal={[showModal, setShowModal]} winner={[winnerPlayer, setWinnerPlayer]} />
      <WinnerModal modal={[showModal, setShowModal]}  winner={[winnerPlayer, setWinnerPlayer]} resetGame={resetGame} />
    </main>
  )
}

export default App
