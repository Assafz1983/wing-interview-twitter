import ITweet from "../entities/Tweet";
import useLocalStorage from "../hooks/LocalStorageHook";
import NewTweet from "./NewTweet";

import MemoizedNewTweet from "./TweetList";


interface FeedProps {
  currentUser: string;
}

const Feed: React.FC<FeedProps> = ({ currentUser }) => {
    const [tweets, setTweets] = useLocalStorage('tweets', []);
    console.log('feed is rendered');
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
        <MemoizedNewTweet tweets={tweets}></MemoizedNewTweet>
        </>
    );
}

export default Feed;