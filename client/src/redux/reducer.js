import { GET_CHARACTERS, GET_CHAR_BY_NAME } from "./actions";

const initialState = {
  characters: [],
  searchResults: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHAR_BY_NAME:
      return { ...state, characters: action.payload };
    case GET_CHARACTERS:
      return { ...state, characters: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
