import React from "react";

export default function Synonyms(props) {

  if (props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        Synonyms:
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return (
              <li className="text-capitalize" key={index}>
                {synonym}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
