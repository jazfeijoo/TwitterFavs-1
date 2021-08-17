import { combineReducers } from 'redux';
import SearchAuthorReducer from './searchAuthor';
import auth from './auth'
import UserListReducer from './userList'

const appReducer = combineReducers({
  searchAuthor: SearchAuthorReducer,
  auth: auth,
  userList: UserListReducer

});

export default appReducer;