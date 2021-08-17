import './App.css';
import {
  withRouter,
  Route,
 NavLink,
 Switch
} from 'react-router-dom'
import { connect } from 'react-redux';
import SearchAuthor  from './Components/SearchAuthor'
import { Login, Signup } from './Components/AuthForm'
import Home from './Components/Home'
import React from 'react';

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src="https://www.pinclipart.com/picdir/big/158-1588390_blue-twitter-logo-transparent-clipart.png" className="App-logo" alt="logo" />
          <h3 className="App-header-name">SOCIAL FAVS</h3>        
        </header>
            <div>
            {this.props.auth.id? (
                          <nav>
                          <NavLink to="/" style={{ marginLeft: '1rem', fontSize: '20px'}}>Home</NavLink>
                          <NavLink to="/search" style={{ marginLeft: '1rem', fontSize: '20px' }}>Search</NavLink>
                          <NavLink to="/search" style={{ marginLeft: '1rem', fontSize: '20px' }}>Main</NavLink>
                          <NavLink to="/login" style={{ marginLeft: '1rem', fontSize: '20px' }}>Logout</NavLink>
                        </nav>
  
              ):
              <nav>
              <NavLink to="/" style={{ marginLeft: '1rem', fontSize: '20px'}}>Home</NavLink>
              <NavLink to="/login" style={{ marginLeft: '1rem', fontSize: '20px' }}>Login</NavLink>
              <NavLink to="/signup" style={{ marginLeft: '1rem', fontSize: '20px' }}>Sign up</NavLink>
            </nav> 
            } 
            <Switch>
              <Route exact path="/" component={Home} /> 
              <Route path="/search" component={SearchAuthor} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
            </Switch>  
            </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
      auth: state.auth
  }
}

export default withRouter(connect(mapState, null)(App))
