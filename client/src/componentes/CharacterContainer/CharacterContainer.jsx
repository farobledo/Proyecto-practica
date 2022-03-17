import React from "react";
import { useSelector } from "react-redux";
import Character from "../Character/Character";

function CharacterContainer() {
  const characters = useSelector((state) => state.characters);

  return (
    <div>
      {characters &&
        characters.map((character) => {
          return <Character key={character.id} char={character} />;
        })}
    </div>
  );
}

export default CharacterContainer;
