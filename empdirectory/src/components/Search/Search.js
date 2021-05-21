import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form className="form-group">
        <label htmlFor= "search">Search:</label>
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search"
        id="search"
      ></input>
      <button
        onCLick={props.handleFormSubmit}
        className="btn btn-outline-secondary"
        type="button"
        id="button"
      >
        Search Now
      </button>
    </form>
  );
}

export default SearchForm;