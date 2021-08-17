import axios from 'axios'

const SEARCH_AUTHOR = 'SEARCH_AUTHOR'
const CLEAR_AUTHOR = 'CLEAR_AUTHOR'

const searchAuthor = (author) => {
  return {
    type: SEARCH_AUTHOR,
    author
  }
};

const clearAuthor = () => {
  return {
    type: CLEAR_AUTHOR,
  }
};

//const serverPORT4000 = axios.create({baseURL: 'http://localhost:4000'})

export const fetchSearchAuthor = (searchState, history) => {
  return async (dispatch) => {
    try {
        const searchScreenName = searchState['screen_name']
       const { data } = await axios.get(`http://localhost:4000/api/authors/${searchScreenName}`)
       dispatch(searchAuthor(data))
       history.push('/search')
    } catch (err) {
      console.log(err);
    }
  }
};

export const fetchClearSearchAUthor = () => {
  return async (dispatch) => {
    try {
       dispatch(clearAuthor())
    } catch (err) {
      console.log(err);
    }
  }
};



// Take a look at app/redux/index.js to see where this reducer is

const initialState = {};

export default function SearchAuthorReducer(state = initialState, action) {
  switch (action.type){
    case SEARCH_AUTHOR:
      return action.author
    case CLEAR_AUTHOR:
      return initialState  
    default:
      return state;
  }
}
