import React, { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
    // { setCategories }
  const [inputValue, setInputValue] = useState("");
  // const [inputValue, setInputValue] = useState("Inuyasha");

  const onInputChange = ({ target }) => {
    // console.log(target.value);
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(inputValue);
        if( inputValue.trim().length <= 1) return;

        // setCategories( categories => [ inputValue, ...categories ]);
        setInputValue('');
        onNewCategory( inputValue.trim() );
  };

  return (
    <>
      <form onSubmit={onSubmit} aria-label="form">
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
AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}