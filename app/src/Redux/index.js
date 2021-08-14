import { combineReducers } from 'redux';
import SearchAuthorReducer from './searchAuthor';

const appReducer = combineReducers({
  searchAuthor: SearchAuthorReducer

});

export default appReducer;