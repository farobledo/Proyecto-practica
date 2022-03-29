import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCharacters, getCharByName } from "../../redux/actions";

function SearchBar() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input) dispatch(getCharByName(input));
    dispatch(getCharacters());
  };

  return (
    <div>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="search"
          placeholder="Buscar por nombre..."
          onChange={handleOnChange}
        />
        <input type="submit" value="Buscar" />
      </form>
    </div>
  );
}

export default SearchBar;
