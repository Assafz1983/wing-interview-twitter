import { useRef, useState } from "react";
import Author from "../styled-components/Author";
import NewTweetContainer from "../styled-components/RoundedContainer";
import TweetButton from "../styled-components/buttons";
import TextArea from "../styled-components/TextArea";
import FlexboxEnd from "../styled-components/Flexbox";
import Separator from "../styled-components/Separator";


interface NewTweetProps {
    currentUsername: string;
    characterLimit: number;
    addTweetHandler: (text: string) => void;
}

const NewTweet: React.FC<NewTweetProps> = ({ currentUsername, characterLimit, addTweetHandler }) => {
    console.log(currentUsername);
    console.log(characterLimit);
    const textAreaFocus = useRef<HTMLTextAreaElement>(null);
    const [text, setText] = useState('');
    const [isValid, setIsValid] = useState(false);

    function validateText(text: string) {
        return text.length > 0 && text.length <= characterLimit;
    }

    function handleTextareaChange(event: any) {
        const newText = event.target.value;
        setText(newText);
        setIsValid(validateText(newText));

        
    }

    function addTweet(event: any) {
        addTweetHandler(text);
        setText('');
        setTimeout(() => {
            if (textAreaFocus.current) {
                textAreaFocus.current.focus();
            }
        }, 300);
    }

    return (
        <NewTweetContainer>
            <Author $underline>{currentUsername}</Author>
            
            <TextArea
                ref={textAreaFocus}
                autoFocus
                maxRows={4}
                minRows={1}
                placeholder="What would you like to tweet today?"
                $valid={isValid}
                $empty={text.length === 0}
                value={text}
                onChange={handleTextareaChange}/>
            <FlexboxEnd>
                <div>{text.length}</div>
                <Separator></Separator>
                <TweetButton onClick={addTweet} $disabled={!isValid}>Tweet</TweetButton>
            </FlexboxEnd>
            
                
        </NewTweetContainer>
    );
}

export default NewTweet;