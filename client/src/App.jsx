import { useEffect } from "react";
import Navigator from "./views/nav";
import { useDispatch } from "react-redux";
import CharacterContainer from "./componentes/CharacterContainer/CharacterContainer";
<<<<<<< HEAD
import { getCharacters } from "./redux/actions";
import './css/navar.css';
import 'animate.css';

=======
import Navbar from "./componentes/Navbar/Navbar";
import { getCharacters } from "./redux/actions";
import { Routes, Route } from "react-router-dom";
import Create from "./componentes/Create/Create";
>>>>>>> d65cd23374070b48d9f0d8bc375fc69edb4523ca

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return (
<<<<<<< HEAD
    <><Navigator /><div className="App">
      <CharacterContainer />
    </div></>
=======
    <div className="App">
      <Routes>
        <Route path="/" element={<CharacterContainer />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
>>>>>>> d65cd23374070b48d9f0d8bc375fc69edb4523ca
  );
}

export default App;
