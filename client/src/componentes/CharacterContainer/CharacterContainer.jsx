import React from "react";
import { useSelector } from "react-redux";
import Character from "../Character/Character";
import styles from "./CharacterContainer.module.css";

function CharacterContainer() {
  const characters = useSelector((state) => state.characters);

  return (
    <div className={styles.Container}>
      {characters &&
        characters.map((character) => {
          return <Character key={character.id} char={character} />;
        })}
    </div>
  );
}

export default CharacterContainer;
