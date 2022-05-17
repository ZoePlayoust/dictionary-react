import React from "react";
import Meanings from "./Meanings";
import "./Results.css";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <section>
          <h2 className="searched-word mt-3 ml-5"> {props.results.word}</h2>
          {props.results.phonetics.map(function (phonetics, index) {
            return (
              <div key={index} className="phonetics ml-5">
                <Phonetics phonetics={phonetics} />
              </div>
            );
          })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index} className="meanings">
              <Meanings meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
