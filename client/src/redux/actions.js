import axios from "axios";
export const GET_CHARACTERS = "get_characters";
export const GET_CHAR_BY_NAME = "get_char_by_name";

export const getCharacters = () => async (dispatch) => {
  let { data } = await axios.get("https://rickandmortyapi.com/api/character");
  return dispatch({ type: GET_CHARACTERS, payload: data.results });
};

export const getCharByName = (name) => async (dispatch) => {
  let { data } = await axios.get(
    `https://rickandmortyapi.com/api/character/?name=${name}`
  );
  return dispatch({ type: GET_CHAR_BY_NAME, payload: data.results });
};
