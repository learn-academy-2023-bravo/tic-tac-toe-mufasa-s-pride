import React from "react"

const Square = ({ square, index, handleClick }) => {
  // const handleSquares = () => {
  //   // console.log(index)
  // }
  return (
    <>
      <div className="square" onClick={() => handleClick(index)}>
        {square}
      </div>
    </>
  )
}
export default Square
