import React from "react";
import { useSelector } from "react-redux";
import Character from "../Character/Character";
import Navbar from "../Navbar/Navbar";
import styles from "./CharacterContainer.module.css";

function CharacterContainer() {
  const characters = useSelector((state) => state.characters);

  return (
    <div className={styles.Container}>
      <Navbar />
      {characters &&
        characters.map((character) => {
          return <Character key={character.id} char={character} />;
        })}
    </div>
  );
}

export default CharacterContainer;
