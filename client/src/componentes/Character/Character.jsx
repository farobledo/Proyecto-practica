import React from "react";
import styles from "./Character.module.css";

function Character({ char }) {
  return (
    <div className={styles.Character}>
      <h2>{char.name}</h2>
      <p>{char.id}</p>
      <img src={char.image} alt={char.name} title={char.name} />
    </div>
  );
}

export default Character;
