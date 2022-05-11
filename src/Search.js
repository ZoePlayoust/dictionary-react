import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [keyWord, setKeyWord] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    alert(keyWord);
  }
  function handleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }

  return (
    <div className="Search  mb-3">
      <form onSubmit={handleSubmit}>
        <div className="row search-elements">
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
