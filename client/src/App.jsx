import { useEffect } from "react";
import Navigator from "./views/nav";
import { useDispatch } from "react-redux";
import CharacterContainer from "./componentes/CharacterContainer/CharacterContainer";
import { getCharacters } from "./redux/actions";
import './css/navar.css';
import 'animate.css';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return (
    <><Navigator /><div className="App">
      <CharacterContainer />
    </div></>
  );
}

export default App;
