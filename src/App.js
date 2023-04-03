import React, { useState } from "react"
import Square from "./components/Square"
import "./App.css"

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXisNext] = useState(true)
  const winner = calculateWinner(squares)

  const handleClick = (i) => {
    const squaresCopy = [...squares]
    if (winner || squaresCopy[i]) return (squaresCopy[i] = xIsNext ? "🦁" : "O")
    setSquares(squaresCopy)
    setXisNext(!xIsNext)
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
    }
    return null
  }
  return (
    <>
      <h1>Tic Tac Toe</h1>
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
    </>
  )
}

export default App
