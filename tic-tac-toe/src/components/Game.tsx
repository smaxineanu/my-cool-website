import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../utils/gameLogic';

const Game: React.FC = () => {
    const [history, setHistory] = useState<Array<{ squares: Array<string> }>>([{ squares: Array(9).fill(null) }]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);

    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);
    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

    const handleClick = (i: number) => {
        const newHistory = history.slice(0, stepNumber + 1);
        const current = newHistory[newHistory.length - 1];
        const squares = current.squares.slice();

        if (winner || squares[i]) {
            return;
        }

        squares[i] = xIsNext ? 'X' : 'O';
        setHistory(newHistory.concat([{ squares }]));
        setStepNumber(newHistory.length);
        setXIsNext(!xIsNext);
    };

    const jumpTo = (step: number) => {
        setStepNumber(step);
        setXIsNext(step % 2 === 0);
    };

    return (
        <div>
            <div className="status">{status}</div>
            <Board squares={current.squares} onClick={handleClick} />
            <div>
                {history.map((step, move) => {
                    const desc = move ? `Go to move #${move}` : 'Go to game start';
                    return (
                        <button key={move} onClick={() => jumpTo(move)}>
                            {desc}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Game;