import React from "react";


interface CharCounterProps {
    count: number;
}

const CharCounter: React.FC<CharCounterProps> = ({ count }) => {
    return (
        <div>{count}</div>
    );
};

const MemoizedCharCount = React.memo(CharCounter);

export default MemoizedCharCount;