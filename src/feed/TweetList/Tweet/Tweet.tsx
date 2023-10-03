import React from "react";
import ITweet from "../../../entities/Tweet";
import Author from "../../../styled-components/Author";
import TweetDate from "../../../styled-components/Date";
import TweetDescription from "../../../styled-components/Description";
import Underline from "../../../styled-components/Underline";
import TweetContainer from "../../../styled-components/TweetContainer";
import { DATE_FORMAT } from "../../../utils/date-utils";
import { format } from "date-fns";



// memoizing the rendering of a single tweet component so it will not render the whole item every time the whole list is chnaged

interface TweetProps {
    tweet: ITweet;
}
const Tweet: React.FC<TweetProps> = ({tweet}) => {
    
    return (
        <>
        <TweetContainer>
            <Author>{tweet.author}</Author>
            <TweetDescription>{tweet.text}</TweetDescription>
                <TweetDate>{format(tweet.createdAt, DATE_FORMAT)}</TweetDate>
        </TweetContainer>
        <Underline></Underline>
        </>
    );
}

const MemoizedTweet = React.memo(Tweet);

export default MemoizedTweet;