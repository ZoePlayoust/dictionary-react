import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms";

export default function Definitions(props) {
  return (
    <div className="definitions ml-5 mr-5">
      <br />
      <h3 className="part-of-speech">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {index + 1}. {definition.definition} <br />
              <em className="example">{definition.example}</em>
              <br />
            </p>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
