import React from "react"

const Square = ({ square, index, handleSquares }) => {
  const handleSquares = () => {
    console.log(index)
  }
  return (
    <>
      <div className="square" onClick={handleSquares}>
        {square}
      </div>
    </>
  )
}
export default Square
