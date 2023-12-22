import { useState } from 'react'
import { Board } from './Board'
import WinnerModal  from './WinnerModal'
// import MiduSolution  from './midu/Solution'
import MiduSolution  from './midu-solution/Solution'

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

  return (
    <main>
      <section>
        <h1>Tic Tac Toe</h1>
        <Board grid={[squares, setSquares]} modal={[showModal, setShowModal]} winner={[winnerPlayer, setWinnerPlayer]} />
        <WinnerModal modal={[showModal, setShowModal]}  winner={[winnerPlayer, setWinnerPlayer]} resetGame={resetGame} />
      </section>
      <section>
        <h1>Midu solution</h1>
        {/* <MiduSolution /> */}
      </section>
    </main>
  )
}

export default App
