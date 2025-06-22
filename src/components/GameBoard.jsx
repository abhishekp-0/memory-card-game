import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import '../styles/GameBoard.css';

/**
 * GameBoard component handles fetching cards, tracking clicked cards,
 * and rendering the card grid for the memory game.
 * @param {Function} handleScore - Callback to update the score in the parent component.
 */
export default function GameBoard({ handleScore }) {
    // State to store all fetched cards
    const [cards, setCards] = useState([]);
    // State to track names of cards clicked in the current round
    const [clickedCards, setClickedCards] = useState([]);

    // Fetch cards from the Harry Potter API on component mount
    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await fetch('https://hp-api.onrender.com/api/characters');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                // Only include cards with a valid image
                setCards(data.filter(card => card.image && card.image.length > 0));
            } catch (error) {
                // Fallback card if API fetch fails
                console.log("Could not fetch cards:", error);
                setCards([{ "name": "Could not Fetch data", "link": "../assets/react.svg" }]);
            }
        };
        fetchCards();
    }, []);

    /**
     * Handles logic when a card is clicked.
     * - If card was already clicked, reset the round and score.
     * - Otherwise, add card to clicked list and update score.
     * @param {Object} card - The card object that was clicked.
     */
    const handleCardClick = (card) => {
        if (clickedCards.includes(card.name)) {
            // Card already clicked: reset round and score
            console.log('Card already clicked:', card.name);
            setClickedCards([]);
            handleScore(0);
        } else {
            // Card not clicked: add to clicked list and increment score
            setClickedCards(prevClickedCards => [...prevClickedCards, card.name]);
            console.log('Card clicked:', card.name);
            handleScore(clickedCards.length + 1);
        }
    };

    /**
     * Returns a random selection of cards from the array.
     * @param {Array} arr - Array of card objects.
     * @param {number} num - Number of cards to select.
     * @returns {Array} - Randomly selected cards.
     */
    const getRandomCards = (arr, num) => {
        if (!arr || arr.length === 0) {
            return [];
        }
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    };

    // Select 5 random cards to display each round
    const cardsToDisplay = cards.length > 0 ? getRandomCards(cards, 5) : [];

    return (
        <>
            <div className="game-board">
                {cardsToDisplay.map((card) => (
                    <Card
                        className="card"
                        card={card}
                        key={card.id || card.name}
                        onClick={() => handleCardClick(card)}
                    />
                ))}
            </div>
            <p>Round: {clickedCards.length + 1}/25</p>
        </>
    );
}