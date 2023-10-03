import React from "react";


interface CharCounterProps {
    count: number;
}

const CharCounter: React.FC<CharCounterProps> = ({ count }) => {
    return (
        <div>{count}</div>
    );
};

export default CharCounter;