import ITweet from "../entities/Tweet";
import useLocalStorageArr from "../hooks/LocalStorageHook";
import Underline from "../styled-components/Underline";
import NewTweet from "./NewTweet/NewTweet";
import TweetList from "./TweetList/TweetList";



interface FeedProps {
  currentUser: string;
}

const Feed: React.FC<FeedProps> = ({ currentUser }) => {
    const [tweets, addNewTweet] = useLocalStorageArr('tweets', []);
    
    function addTweet(text: string) {
      const newTweet: ITweet = {
        author: currentUser,
        text: text,
        createdAt: new Date().getTime(),
        id: new Date().getTime()
      }
      addNewTweet(newTweet);
    }
    
    return (
        <>
        <NewTweet currentUsername={currentUser} characterLimit={280} addTweetHandler={addTweet}></NewTweet>
        <Underline></Underline>
        <div><TweetList tweets={tweets}></TweetList></div>
        </>
    );
}

export default Feed;