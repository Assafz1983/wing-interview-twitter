import React from "react";
import Counter from "../../../styled-components/Counter";


interface CharCounterProps {
    count: number;
    characterLimit: number
}

const CharCounter: React.FC<CharCounterProps> = ({ count, characterLimit }) => {
    if (count > characterLimit) {
        count = characterLimit - count;
    }
    return (
        <Counter $negative={count < 0}>{count}</Counter>
    );
};

export default CharCounter;