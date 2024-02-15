import React from "react";
import './index.less';
/* 
    棋盘。
*/
interface SquareProps {
    value: string,
    onSquareClick: () => void,
}
const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
    return <>
        <button className="square" onClick={onSquareClick}>{value}</button>
    </>
}

export default Square;
