import React, { useState } from 'react';
import Game from './components/Game';
import './styles/App.css';

const App: React.FC = () => {
    const [history, setHistory] = useState<Array<any>>([]);
    const [stepNumber, setStepNumber] = useState<number>(0);
    const [xIsNext, setXIsNext] = useState<boolean>(true);

    return (
        <div className="app">
            <h1>Tic Tac Toe</h1>
            <Game 
                history={history}
                stepNumber={stepNumber}
                xIsNext={xIsNext}
                setHistory={setHistory}
                setStepNumber={setStepNumber}
                setXIsNext={setXIsNext}
            />
        </div>
    );
};

export default App;