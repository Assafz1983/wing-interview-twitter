import ITweet from "../../entities/Tweet";
import MemoizedTweet from "./Tweet/Tweet";


interface TweetListProps {
    tweets: ITweet[];
}

const TweetList: React.FC<TweetListProps> = ({ tweets }) => {

      return (
        <>
            {tweets.map((tweet: ITweet) => <MemoizedTweet key={tweet.id} tweet={tweet}></MemoizedTweet>)}
        </>
      );
}

export default TweetList;