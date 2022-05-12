import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import Results from "./Results";

export default function Search() {
  let [keyWord, setKeyWord] = useState("");
  let [result, setResult] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    //documentation https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setResult(response.data[0]);
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
      <Results results={result} />
    </div>
  );
}
