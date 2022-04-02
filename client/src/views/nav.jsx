import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCharacters, getCharByName } from "../redux/actions";
import '../css/navar.css';
import 'animate.css';

function Nav() {
   
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getCharacters());
    }, [dispatch]);


  return (
    <div className="Nav">

    <div class="card text-center">
      <div class="card-header">
       <h1 class="animate__animated animate__zoomInRight"><h1>Bienvenidos</h1></h1>
      </div>
      <div class="card-body">
        <h3 class="card-title animate__animated animate__zoomInUp">The Rick and Morty API</h3>
        <p class="card-text animate__animated animate__zoomInLeft">La API de Rick and Morty es una API REST(ish) y GraphQL basada en el programa de televisión Rick and Morty . Tendrás acceso a cientos de personajes, imágenes, lugares y episodios. La API de Rick and Morty está llena de información canónica como se ve en el programa de televisión..</p>
        <nav class="navbar navbar-light bg-danger">
      <div class="container-fluid">
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button onClick={() => dispatch(getCharByName("rick"))} class="btn btn-outline-success" type="submit">Buscar Personajes</button>
        </form>
      </div>
    </nav>
      </div>
      <div class="card-footer text-muted ">
        <h4 class=" animate__animated animate__fadeInUp">Full Stacks 2022</h4>
      </div>
    </div>
    
    
    <br></br><br></br>
        
         
        </div>
  );
}
export default Nav;