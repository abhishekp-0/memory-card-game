import React, { useState } from 'react'
import '../styles/ScoreBoard.css'

/**
 * ScoreBoard component displays the current score and high score.
 * @param {number} score - The current score passed from the parent component.
 */
export default function ScoreBoard({ score }) {
  // Local state to track the highest score achieved
  const [hiScore, setHiScore] = useState(0);

  // Update high score if the current score exceeds it
  score > hiScore && setHiScore(score);

  return (
    <header className="score-board">
      <div className="score-left">
        <p>Score: {score}</p>
      </div>
      <h1>Memory Game</h1>
      <div className="score-right">
        <p>High Score: {hiScore}</p>
      </div>
    </header>
  )
}