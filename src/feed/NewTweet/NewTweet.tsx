import { useRef, useState } from "react";
import RoundedContainer from "../../styled-components/RoundedContainer";
import TextArea from "../../styled-components/TextArea";
import FlexboxEnd from "../../styled-components/Flexbox";
import Separator from "../../styled-components/Separator";
import React from "react";
import MemoizedtweetButton from "./TweetButton/TweetButton";
import CharCount from "./CharCounter/CharCounter";
import MemoizedTweetAuthor from "./TweetAuthor/TweetAuthor";


interface NewTweetProps {
    currentUsername: string;
    characterLimit: number;
    addTweetHandler: (text: string) => void;
}

const NewTweet: React.FC<NewTweetProps> = ({ currentUsername, characterLimit, addTweetHandler }) => {
    const textArea = useRef<HTMLTextAreaElement>(null);
    const [text, setText] = useState('');


    const validateText = React.useCallback((text: string) => {
        return text.length > 0 && text.length <= characterLimit;
    }, []);

    const handleTextareaChange = React.useCallback((event: any) => {
        const newText = event.target.value;
        setText(newText);
    }, []);

    // in order to benefit from the addTweet - we are wrapping the handler with a useCallback so it will not cause a re-rendering of the button
    // in order for that - we need to read the text directly from the textInput rather than from the store to save the dependency
    const addTweet = React.useCallback(() => {
        const tweetText = textArea.current?.value; 
        if (tweetText) {
            addTweetHandler(tweetText);
        }
        setText('');
        setTimeout(() => {
            if (textArea.current) {
                textArea.current.focus();
            }
        }, 100);
    }, [])

    return (
        <RoundedContainer>
            <MemoizedTweetAuthor authorName={currentUsername}></MemoizedTweetAuthor>
            
            <TextArea
                ref={textArea}
                autoFocus
                maxRows={4}
                minRows={1}
                placeholder="What would you like to tweet today?"
                $valid={validateText(text)}
                $empty={text.length === 0}
                value={text}
                onChange={handleTextareaChange}/>
            <FlexboxEnd>
                <CharCount count={text.length}></CharCount>
                <Separator></Separator>
                <MemoizedtweetButton isValid={validateText(text)} buttonText="Tweet" onclick={addTweet}></MemoizedtweetButton>
            </FlexboxEnd>
            
                
        </RoundedContainer>
    );
}


export default NewTweet;