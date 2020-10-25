import React from "react";

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        name="search"
        placeHolder={props.placeholder}
        value={props.criteria}
        onChange={props.handleChange}
      ></input>
    </div>
  );
};
export default SearchBar;
