import './App.css';
import TweetButton from './styled-components/buttons';
import Author from './styled-components/Author';
import NewTweet from './feed-components/NewTweet';
import Feed from './feed-components/Feed';





function App() {
  
  return (
    
    <div className="App">
      <h1>Welcome to My Twitter!</h1>
      <Feed currentUser="Assaf Azulai"></Feed>
    </div>
  );
}

export default App;
