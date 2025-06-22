import React from 'react'

/**
 * Card component renders an individual card with image and name.
 * @param {Object} card - Card data containing image and name.
 * @param {Function} onClick - Callback for when the card is clicked.
 */
export default function Card({ card, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={card.image} alt={card.name} />
      <p>{card.name}</p>
    </div>
  )
}