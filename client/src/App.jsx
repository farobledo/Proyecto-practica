import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CharacterContainer from "./componentes/CharacterContainer/CharacterContainer";
import { getCharacters, getCharByName } from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return (
    <div className="App">
      <button onClick={() => dispatch(getCharByName("rick"))}>
        Traeme todos los Ricks
      </button>
      <CharacterContainer />
    </div>
  );
}

export default App;
