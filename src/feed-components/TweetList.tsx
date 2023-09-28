import { useMemo } from "react";
import ITweet from "../entities/Tweet";
import Tweet from "./Tweet";


interface TweetListProps {
    tweets: ITweet[];
}

const TweetList: React.FC<TweetListProps> = ({ tweets }) => {
    console.log('tweet list is rendered');
    const memoizedTweets = useMemo(() => {
        return tweets.map((tweet: ITweet) => <Tweet key={tweet.id} tweet={tweet}></Tweet>)
      }, [tweets]);
    

      return (
        <>
            {memoizedTweets}
        </>
      );
}

export default TweetList;