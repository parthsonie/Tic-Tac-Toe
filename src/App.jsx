import React, { useState } from 'react'
import './App.css'
import Block from './Components/Block'

function App() {
  const [state, setState] = useState(Array(9).fill(null))
  const [currentturn, setCurrentturn] = useState("X")
  const [result ,setResult] = useState(null)

  const check = (board) =>{
    const win =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(let i=0 ; i < win.length ; i++){
      const[a,b,c] = win[i];
      if( board[a] !== null &&
  board[a] === board[b] &&
  board[a] === board[c])
        return true;
    } 
    return false
  }

  const handleClick = (index) => {
    if (state[index] !== null) return

    const stateCopy = Array.from(state)
    stateCopy[index] = currentturn

    setState(stateCopy)

    const win = check(stateCopy);
    if(win){
      setResult(true);
      return
    }
    setCurrentturn(currentturn === "X" ? "O" : "X")
  }

  return (
    <div>
      <div className='Heading'><h2>Tic-Tac-Toe</h2></div>
      <div className="board">
      <div className="row">
        <Block onClick={() => handleClick(0)} value={state[0]} />
        <Block onClick={() => handleClick(1)} value={state[1]} />
        <Block onClick={() => handleClick(2)} value={state[2]} />
      </div>

      <div className="row">
        <Block onClick={() => handleClick(3)} value={state[3]} />
        <Block onClick={() => handleClick(4)} value={state[4]} />
        <Block onClick={() => handleClick(5)} value={state[5]} />
      </div>

      <div className="row">
        <Block onClick={() => handleClick(6)} value={state[6]} />
        <Block onClick={() => handleClick(7)} value={state[7]} />
        <Block onClick={() => handleClick(8)} value={state[8]} />
      </div>
    </div>
    <div className='result'>
      <h3>{result?currentturn:""} {result?"Won":""}</h3>
    </div>
    </div>
  )
}

export default App