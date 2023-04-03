import React, { useState } from "react"
import Square from "./components/Square"
import "./App.css"

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState("X")

  
  const handleClick = (i)=> {
    // console.log(i)
    let newSquares = [...squares]
     newSquares[i] = turn
    setSquares(newSquares)
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
