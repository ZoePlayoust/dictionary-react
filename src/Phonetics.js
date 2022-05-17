import React from "react";
import "./Results.css";
export default function Phonetics(props) {
  console.log(props);
  if (props.phonetics.audio) {
    return (
      <div className="phonetics ml-5">
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
