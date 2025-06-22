import React, { useState } from 'react';
import ScoreBoard from './components/ScoreBoard.jsx'
import GameBoard from './components/GameBoard.jsx'
import './App.css'

function App() {
  const [score,setScore]=useState(0);

  const handleScore=(currentScore) => {
    if(currentScore === 0) {
      setScore(0);
      alert("Game Over!");
    }
    setScore(currentScore);
  }

  return (
    <>
        <ScoreBoard score={score} />
        <GameBoard handleScore={handleScore}/>
        
    </>
  )
}

export default App
