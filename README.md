# Memory Card Game

A simple memory card game built with **React** and **Vite**.

## How to Play

- Click on a card to score a point.
- Don't click the same card twice in a round!
- If you click a card you've already clicked, your score resets and the game restarts.
- Try to get the highest score possible!

## Features

- Fetches random Harry Potter character cards from an open API.
- Responsive layout: cards adjust their size to fit the screen.
- Scoreboard displays your current score and high score.
- Modern React (functional components, hooks).
- Fast development with Vite.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**  
   Go to [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Project Structure

```
src/
  components/
    Card.jsx
    GameBoard.jsx
    ScoreBoard.jsx
  styles/
    GameBoard.css
    ScoreBoard.css
  App.jsx
  App.css
  main.jsx
  index.css

```

## Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Harry Potter API](https://hp-api.onrender.com/)

## Credits

- Card images and character data from the [HP API](https://hp-api.onrender.com/).
- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/).

---

Enjoy playing and improving your memory!
