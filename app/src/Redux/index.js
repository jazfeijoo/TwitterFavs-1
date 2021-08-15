import { combineReducers } from 'redux';
import SearchAuthorReducer from './searchAuthor';
import auth from './auth'

const appReducer = combineReducers({
  searchAuthor: SearchAuthorReducer,
  auth: auth

});

export default appReducer;