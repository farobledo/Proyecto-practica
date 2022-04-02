import React from "react";
import styles from "./Character.module.css";
import 'animate.css';

function Character({ char }) {
  return (
    <div className={styles.hover}>
      <h2 className="animate__animated animate__fadeInLeftBig">{char.name}</h2>
      <p>{char.id}</p>
      <img src={char.image} alt={char.name} title={char.name} />
    </div>
  );
}

export default Character;

