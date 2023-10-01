import Author from "../../../styled-components/Author";
import React from "react";

interface TweetAuthorProps {
    authorName: string;
}

const TweetAuthor: React.FC<TweetAuthorProps> = ({ authorName }) => {
    return (
        <Author $underline>{authorName}</Author>
    );
};

const MemoizedTweetAuthor = React.memo(TweetAuthor);

export default MemoizedTweetAuthor;