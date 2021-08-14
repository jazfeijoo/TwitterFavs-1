import axios from 'axios'

const SEARCH_AUTHOR = 'SEARCH_AUTHOR'

const searchAuthor = (author) => {
  return {
    type: SEARCH_AUTHOR,
    author
  }
};

//const serverPORT4000 = axios.create({baseURL: 'http://localhost:4000'})

export const fetchSearchAuthor = (searchState) => {
  return async (dispatch) => {
    try {
        const searchScreenName = searchState['screen_name']
       const { data } = await axios.get(`http://localhost:4000/api/authors/${searchScreenName}`)
       console.log('THIS IS DATA:', data);

       dispatch(searchAuthor(data))
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
    default:
      return state;
  }
}
