import React from "react";
import "./Results.css";

export default function Phonetics(props) {
  function playAudio(event) {
    event.preventDefault();
    var audioPlayer = event.currentTarget.previousElementSibling;
    audioPlayer.play();
  }

  if (props.phonetics.audio && props.phonetics.text) {
    return (
      <div className="phonetics mb-2">
        <div className="phonetic-block">
          <div className="audio-player">
            <audio controls className="d-none" src={props.phonetics.audio}>
              Your browser does not support the
              <code>audio</code> element.
            </audio>

            <button onClick={playAudio}>
              <i className="fa-solid fa-play icon"></i>
            </button>
          </div>{" "}
          <div className="pronunciation"> {props.phonetics.text}</div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
