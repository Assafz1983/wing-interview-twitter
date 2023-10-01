import Button from "../../../styled-components/buttons";
import React from "react";

interface TweetButtonProps {
    buttonText: string;
    isValid: boolean;
    onclick: (event: any) => void;
}

const TweetButton: React.FC<TweetButtonProps> = ({ buttonText, isValid, onclick }) => {
    return (
        <Button onClick={onclick} $disabled={!isValid}>{buttonText}</Button>
    );
};

const MemoizedtweetButton = React.memo(TweetButton);

export default MemoizedtweetButton;