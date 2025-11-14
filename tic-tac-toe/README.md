# Tic Tac Toe

This is a simple Tic Tac Toe game built with React and TypeScript. The game allows two players to take turns marking the spaces in a 3×3 grid with their respective symbols (X and O). The game checks for a winner or a draw after each turn.

## Project Structure

```
tic-tac-toe
├── src
│   ├── index.tsx          # Entry point of the application
│   ├── App.tsx            # Main App component managing game state
│   ├── components          # Contains all React components
│   │   ├── Game.tsx       # Game component with game logic
│   │   ├── Board.tsx      # Board component displaying the grid
│   │   └── Square.tsx     # Square component for individual squares
│   ├── hooks               # Custom hooks
│   │   └── useLocalStorage.ts # Hook for managing local storage
│   ├── utils               # Utility functions
│   │   └── gameLogic.ts    # Game logic functions
│   └── styles              # CSS styles
│       └── App.css        # Styles for the application
├── package.json            # npm configuration file
├── tsconfig.json           # TypeScript configuration file
└── README.md               # Project documentation
```

## Getting Started

To run the Tic Tac Toe game locally, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd tic-tac-toe
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the game.

## Features

- Two-player mode
- Game state persistence using local storage
- Winner and draw detection

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.