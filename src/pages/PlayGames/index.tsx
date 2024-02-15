import React, { useState } from "react";
import Board from '../../components/Games/Board'
import './index.less';


const PlayGames: React.FC = () => {
    // 步骤条
    const [history, setHistory] = useState([Array(9).fill(null)]);
    // 当前步骤
    const [currentMove, setCurentMove] = useState(0);
    // 当前是O or X
    const XIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquare: string[]) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquare]
        setHistory(nextHistory);
        setCurentMove(nextHistory.length - 1);
    }
    function jumpTo(nextMove: number) {
        setCurentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });
    return <div className="play-games-wrapper">
        <div className="container">
            <Board xIsNext={XIsNext} squares={currentSquares} onPlay={handlePlay} />
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    </div>
}

export default PlayGames;
