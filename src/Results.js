import React from "react";
import Meanings from "./Meanings";
import "./Results.css";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <h2 className="searched-word mt-3 "> {props.results.word}</h2>
        {props.results.phonetics.map(function (phonetics, index) {
          return (
            <div key={index} className="phonetics">
              <Phonetics phonetics={phonetics} />
            </div>
          );
        })}
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index} className="meanings">
              <Meanings meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
