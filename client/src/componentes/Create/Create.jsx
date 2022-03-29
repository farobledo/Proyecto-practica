import React, { useState } from "react";

function Create() {
  const handleSelect = () => {};
  const [input, setInput] = useState({
    name: "",
    status: "",
  });
  return (
    <div>
      <form action="">
        <input type="text" placeholder="Nombre.." />
        <select name="" id="" onChange={handleSelect}>
          <option value="">Vivo</option>
          <option value="">Muerto</option>
          <option value="">No se sabe</option>
        </select>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default Create;
