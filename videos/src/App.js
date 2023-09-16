import logo from './logo.svg';
import './App.css';
import NewsFeed from './components/news-feed';
import UserDisplay from './components/UserDisplay';

function App() {

  const chrisMovies = [{title: "American Gangster", year: 2011}, {title: "Chicago", year: 5000}]

  function handleupdateChrisMovies () {
    
  }

  return (
    <div>
      {/* <NewsFeed/> */}
      <UserDisplay favoriteMovies={chrisMovies} userName="Chris" location='Las Vegas' />
      <UserDisplay favoriteMovies={[]} userName="Camille" location='Space'/>
    </div>
  );
}

export default App;
