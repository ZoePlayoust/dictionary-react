import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";
import TypeWriterEffect from "react-typewriter-effect";

export default function App() {
  return (
    <div className="App  ">
      <div className="container mt-5">
        <header className="mt-2 mb-2">
          <div className="row">
            <div className="col-auto mx-auto">
              <TypeWriterEffect
                textStyle={{ fontFamily: "Courier Prime" }}
                startDelay={100}
                cursorColor="black"
                text="Dictionary"
                typeSpeed={100}
              />
            </div>
          </div>
        </header>
        <main>
          <Dictionary />
        </main>
      </div>
      <footer className="text-center mt-3 mb-3">
        <a
          href="https://github.com/ZoePlayoust/dictionary-react"
          target="blank"
          rel="noreferrer"
        >
          Coded
        </a>{" "}
        by{" "}
        <a
          href="https://www.linkedin.com/in/zo%C3%A9-playoust-467b68116/"
          target="_blank"
          rel="noreferrer"
        >
          Zoé Playoust
        </a>
      </footer>
    </div>
  );
}
