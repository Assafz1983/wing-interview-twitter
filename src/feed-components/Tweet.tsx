import React, { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import ITweet from "../entities/Tweet";
import useDateFormat from "../hooks/DateFormatHook";
import Author from "../styled-components/Author";
import TweetDate from "../styled-components/Date";
import TweetDescription from "../styled-components/Description";
import Underline from "../styled-components/Underline";
import TweetContainer from "../styled-components/TweetContainer";

interface TweetProps {
    tweet: ITweet;
}
const Tweet: React.FC<TweetProps> = ({tweet}) => {
    const dateFormatter = useDateFormat('HH:mm a · MMM dd, yyyy');

    return (
        <TweetContainer>
            <Author>{tweet.author}</Author>
            <TweetDescription>{tweet.text}</TweetDescription>
            <TweetDate>{dateFormatter(tweet.createdAt)}</TweetDate>
            <Underline></Underline>
        </TweetContainer>
    );
}

export default Tweet;