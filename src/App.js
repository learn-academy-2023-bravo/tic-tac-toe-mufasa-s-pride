import React, { useState } from "react"
import Square from "./components/Square"
import "./App.css"

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState("🐗")
  const [winner, setWinner] = useState(null)

  const handleClick = (i) => {
    if (squares[i] !== null || calculateWinner(squares)) {
      return
    }
    let newSquares = [...squares]
    newSquares[i] = turn
    setSquares(newSquares)
    setWinner(calculateWinner(newSquares))
    newSquares[i] = turn === "🐗" ? "🦁" : "🐗"

    setSquares(newSquares)
    setTurn(newSquares[i])
    console.log(i)
  }
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a]
      }
      if (squares.every((squares) => squares !== null)) {
        return "No player"
      }
    }
    return null
  }

  const champion = calculateWinner(squares)
  let status
  if (champion) {
    status = `${champion} Wins!`
    alert(status)
  } else {
    status = { turn }
  }
  const gameRestart = () => {
    window.location.reload()
  }
  return (
    <>
    <div className="background">

      <h1 className="header">Tic Tac Toe</h1>

      <div className="board">
        {squares.map((square, index) => {
          return (
            <Square
            square={square}
            index={index}
            key={index}
            handleClick={handleClick}
            />
            )
          })}
      </div>
      <div>
        <button className="button" onClick={gameRestart}>
          Play Again
        </button>
      </div>
    </div>
    </>
  )
}

export default App
