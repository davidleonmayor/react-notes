// import { useState } from "react";
import './WinnerModal.css'

export default function WinnerModal({ show, resetGame, winner}) {
  const [showModal, setShowModal] = show;

  const handleModal = (show) => {
    setShowModal(!show);
  }
  // resetear el juego
  const handleResetGame = () => {
    resetGame(true);
    setShowModal(false);
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