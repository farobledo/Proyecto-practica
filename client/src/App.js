import { useDispatch } from "react-redux";
import CharacterContainer from "./componentes/CharacterContainer/CharacterContainer";
import { actionPratice, getCharacters } from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(actionPratice())}>HOLA</button>
      <button onClick={() => dispatch(getCharacters())}>
        Traer personajes
      </button>
      <CharacterContainer />
    </div>
  );
}

export default App;
