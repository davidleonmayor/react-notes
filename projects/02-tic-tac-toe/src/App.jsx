import { useState } from 'react'
import { Board } from './Board'
import WinnerModal  from './WinnerModal'
import './Board.css'
import './App.css'

function App() {
  const [resetGame, setResetGame] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [turn, setTurn] = useState(0)
  const [winner, setWinner] = useState(null)



  return (
    <main>
      <h1>Tic Tac Toe</h1>
      <Board show={[showModal, setShowModal]} reset={[resetGame, setResetGame]}  winnerState={[winner, setWinner]} />
      <WinnerModal show={[showModal, setShowModal]} reset={[resetGame, setResetGame]} winner={winner}/>
    </main>
  )
}

export default App
