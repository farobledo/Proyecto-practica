import axios from "axios";
export const PRUEBA = "prueba";
export const GET_CHARACTERS = "get_characters";

export function actionPratice() {
  return { type: PRUEBA };
}

export const getCharacters = () => async (dispatch) => {
  let { data } = await axios.get("https://rickandmortyapi.com/api/character");
  return dispatch({ type: GET_CHARACTERS, payload: data.results });
};
