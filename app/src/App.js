import './App.css';
import {
  Route,
 NavLink
} from 'react-router-dom'
import SearchAuthor  from './Components/SearchAuthor'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://www.pinclipart.com/picdir/big/158-1588390_blue-twitter-logo-transparent-clipart.png" className="App-logo" alt="logo" />
        <h3 className="App-header-name">TWITTER FAVS</h3>
      </header>
          <div>
          <nav>
          <NavLink to="/" style={{ marginLeft: '1rem', fontSize: '20px'}}>Home</NavLink>
          <NavLink to="/search" style={{ marginLeft: '1rem', fontSize: '20px' }}>Search</NavLink>
          <NavLink to="/login" style={{ marginLeft: '1rem', fontSize: '20px' }}>Login</NavLink>
          <NavLink to="/login" style={{ marginLeft: '1rem', fontSize: '20px' }}>Sign up</NavLink>
        </nav>
          <Route exact path="/search" component={SearchAuthor} />
          </div>
    </div>
  );
}

export default App;
