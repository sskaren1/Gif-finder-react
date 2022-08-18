import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
    // { setCategories }
  const [inputValue, setInputValue] = useState("Inuyasha");

  const onInputChange = ({ target }) => {
    // console.log(target.value);
    setInputValue(target.value);
  };

  const onSubmit = () => {
    event.preventDefault();
    // console.log(inputValue);

    if (inputValue.trim().length <= 1) return;

    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory( inputValue.trim() );
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Buscar gifs"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    </>
  );
};

// export default AddCategory;
