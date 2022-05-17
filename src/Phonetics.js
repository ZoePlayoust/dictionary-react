import React from "react";
import "./Results.css";
export default function Phonetics(props) {
  if (props.phonetics.audio && props.phonetics.text) {
    return (
      <div className="phonetics pl-3">
        <a href={props.phonetics.audio} target="blank">
          <i class="fa-solid fa-headphones-simple audio"></i>
        </a>
        {props.phonetics.text}
      </div>
    );
  } else {
    return null;
  }
}
