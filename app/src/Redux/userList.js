import axios from 'axios'

const ADD_AUTHOR = 'ADD_AUTHOR'


const addAuthor = (author) => {
  return {
    type: ADD_AUTHOR,
    author
  }
};

export const fetchAddToList = (author) => {

  return async (dispatch) => {
    try {
        console.log('FECH ADD TO LIST', author)
       // const addScreenName = author['screen_name']
      // const { data } = await axios.get(`http://localhost:4000/api/authors/${addScreenName}`)
        //  dispatch(addAuthor(author))

    } catch (err) {
      console.log(err);
    }
  }
};

// Take a look at app/redux/index.js to see where this reducer is

const initialState = [];

export default function UserListReducer(state = initialState, action) {
  switch (action.type){
    case ADD_AUTHOR:
      return [...state, action.author]
    default:
      return state;
  }
}
