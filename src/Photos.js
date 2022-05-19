import React from "react";
import "./Results.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <div className="Photos row">
        {props.photos.map(function (photo, index) {
          return (
            <div className="col-4">
              {" "}
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img
                  src={photo.src.landscape}
                  className="img-fluid img"
                  key={index}
                  alt={photo.alt}
                />
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
