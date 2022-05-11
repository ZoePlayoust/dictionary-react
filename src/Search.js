import React, { useState } from "react";
import "./Search.css";
import axios from "axios";

export default function Search() {
  let [keyWord, setKeyWord] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    //documentation https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response);
  }
  function handleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }

  return (
    <div className="Search  mb-5">
      <form onSubmit={handleSubmit}>
        <div
          className="
         search-elements"
        >
          {" "}
          <input
            type="search"
            className="search-bar "
            onChange={handleKeyWordChange}
          />
          <input type="submit" value="Search" className=" search-button" />
        </div>
      </form>
    </div>
  );
}
