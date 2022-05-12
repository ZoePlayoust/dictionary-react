import React from "react";
import "./Meanings.css";

export default function Definitions(props) {
  return (
    <div className="definitions ">
      <br />
      <h3 className="part-of-speech">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {index + 1}. {definition.definition}
              <br />
              <em className="example">{definition.example}</em>
            </p>
            <br />
          </div>
        );
      })}
    </div>
  );
}
