// import { useState } from "react";
import './WinnerModal.css'

export default function WinnerModal({ modal, winner, setWinner, resetGame}) {
  const [ showModal, setShowModal ] = modal; 
  const [ winnerPlayer ] = winner;
  // const [setSquares] = grid;

  const handleModal = (show) => {
    setShowModal(!show);
  }

  // resetear el juego
  const handleResetGame = () => {
    setShowModal(false); // ocultar el modal
    resetGame() // resetear el tablero
    setWinner(null); // resetear el ganador
  }

  return (
    <section style={{display: showModal===false ? "none" : "block"}}>
      <div id="myModal" className="modal" style={{display: showModal===false ? "none" : "block"}}>
        <div className="modal-content">
          <span onClick={() => handleModal(showModal)} className="close">&times;</span>
          <p>Whiner: {winner}</p>
        </div>
        <button onClick={handleResetGame} id="myBtn">Re-game</button>
      </div>
    </section>
  )
}