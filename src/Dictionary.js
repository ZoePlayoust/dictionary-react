import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
export default function Dictionary() {
  let [defaultValue, setDefaultvalue] = useState("typewriter");
  let [keyWord, setKeyWord] = useState(defaultValue);
  let [result, setResult] = useState(null);
  let [loaded, setloaded] = useState(false);
  let [photos, setPhotos] = useState(null);
  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function handleHint(event) {
    setDefaultvalue(event.target.id);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${event.target.id}`;
    console.log(keyWord);
    axios.get(apiUrl).then(handleResponse);
    let pexelsApiKey =
      "563492ad6f917000010000019a393949c72f44bb897f7f2eb94a0247";
    let pexelsUrl = `https://api.pexels.com/v1/search/?per_page=9&query=${event.target.id}`;
    axios
      .get(pexelsUrl, { headers: { Authorization: `Bearer ${pexelsApiKey}` } })
      .then(handlePexelsResponse);
  }

  function search() {
    //documentation https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f917000010000019a393949c72f44bb897f7f2eb94a0247";
    let pexelsUrl = `https://api.pexels.com/v1/search/?per_page=9&query=${keyWord}`;
    axios
      .get(pexelsUrl, { headers: { Authorization: `Bearer ${pexelsApiKey}` } })
      .then(handlePexelsResponse);
  }
  function handlePexelsResponse(response) {
    console.log(response.data.photos);
    setPhotos(response.data.photos);
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
                defaultValue=" "
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
            <button className=" btn " onClick={handleHint} id="wine">
              wine{" "}
            </button>
            <button className=" btn " onClick={handleHint} id="beach">
              beach{" "}
            </button>
            <button className=" btn " onClick={handleHint} id="sun">
              sun{" "}
            </button>
          </div>
        </section>

        <Results results={result} />
        <section>
          <Photos photos={photos} />
        </section>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
