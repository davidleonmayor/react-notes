import { useState } from 'react'
import { Board } from './Board'
import './Board.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Tic Tac Toe</h1>
      <Board />
    </main>
  )
}

export default App
