import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [defaultValue, setDefaultvalue] = useState("coal");
  let [keyWord, setKeyWord] = useState(defaultValue);
  let [result, setResult] = useState(null);
  let [loaded, setloaded] = useState(false);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function handleHint(event) {
    setDefaultvalue(event.target.id);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${event.target.id}`;
    console.log(keyWord);
    axios.get(apiUrl).then(handleResponse);
  }

  function search() {
    //documentation https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }

  function load() {
    setloaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Search  mb-5">
        <section>
          <form onSubmit={handleSubmit}>
            <div
              className="
         search-elements
         ml-5"
            >
              {" "}
              <input
                type="search"
                className="search-bar mb-2 "
                onChange={handleKeyWordChange}
                defaultValue="Enter your word here"
              ></input>
              <input
                type="submit"
                value="Search"
                className=" search-button mb-2 btn btn-dark"
              />
            </div>
          </form>
          <div className="mb-3 hint ">
            <span className="hint-example">Examples: </span>
            <button className=" btn btn-dark" onClick={handleHint} id="wine">
              wine{" "}
            </button>
            <button className=" btn btn-dark" onClick={handleHint} id="beach">
              beach{" "}
            </button>
            <button className=" btn btn-dark" onClick={handleHint} id="sun">
              Sun{" "}
            </button>
          </div>
        </section>

        <Results results={result} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
