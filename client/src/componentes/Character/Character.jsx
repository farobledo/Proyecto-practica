import React from "react";

function Character({ char }) {
  return (
    <div>
      <h2>{char.name}</h2>
      <p>{char.id}</p>
      <img src={char.image} alt={char.name} />
    </div>
  );
}

export default Character;
