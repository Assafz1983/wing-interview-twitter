import ITweet from "../entities/Tweet";
import useDateFormat from "../hooks/DateFormatHook";
import useLocalStorage from "../hooks/LocalStorageHook";
import Author from "../styled-components/Author";
import TweetDate from "../styled-components/Date";
import TweetDescription from "../styled-components/Description";
import NewTweet from "./NewTweet";
import Tweet from "./Tweet";


interface FeedProps {
  currentUser: string;
}

const Feed: React.FC<FeedProps> = ({ currentUser }) => {
    const [tweets, setTweets] = useLocalStorage('tweets', []);

    function addTweet(text: string) {
      const newTweet: ITweet = {
        author: currentUser,
        text: text,
        createdAt: new Date().getTime(),
        id: new Date().getTime()
      }
      const updatedTweets = [ newTweet, ...tweets];
      setTweets(updatedTweets);
    }
    
    return (
        <>
        <NewTweet currentUsername={currentUser} characterLimit={280} addTweetHandler={addTweet}></NewTweet>
        {tweets.map((tweet: ITweet) => (
          <Tweet key={tweet.id} tweet={tweet}></Tweet>
        ))}
        </>
    );
}

export default Feed;