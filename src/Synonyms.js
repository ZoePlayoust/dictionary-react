import React from "react";
import "./Results.css";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <div className="synonyms">
        <span className="mb-1">Synonyms:</span>
        {props.synonyms.map(function (synonym, index) {
          return (
            <span className="text-capitalize" key={index}>
              - {synonym}
            </span>
          );
        })}
        <br />
      </div>
    );
  } else {
    return null;
  }
}
