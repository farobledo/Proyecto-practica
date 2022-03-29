import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CharacterContainer from "./componentes/CharacterContainer/CharacterContainer";
import Navbar from "./componentes/Navbar/Navbar";
import { getCharacters } from "./redux/actions";
import { Routes, Route } from "react-router-dom";
import Create from "./componentes/Create/Create";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharacterContainer />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
