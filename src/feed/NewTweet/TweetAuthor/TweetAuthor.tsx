import Author from "../../../styled-components/Author";
import React from "react";

interface TweetAuthorProps {
    authorName: string;
}

// memoizing the author name is this is not changing at all. It will always be the curret user. No point in re-rendering it


const TweetAuthor: React.FC<TweetAuthorProps> = ({ authorName }) => {
    return (
        <Author $underline>{authorName}</Author>
    );
};

const MemoizedTweetAuthor = React.memo(TweetAuthor);

export default MemoizedTweetAuthor;