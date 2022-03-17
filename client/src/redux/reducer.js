import { GET_CHARACTERS, PRUEBA } from "./actions";

const initialState = {
  texto: "",
  characters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRUEBA:
      return { ...state, texto: state.texto + "prueba" };
    case GET_CHARACTERS:
      console.log(action.payload);
      return { ...state, characters: [...state.characters, ...action.payload] };
    default:
      return state;
  }
};

export default rootReducer;
