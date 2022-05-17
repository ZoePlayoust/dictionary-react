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
          <Dictionary keyword="Charcoal" />
        </main>
      </div>
      <footer className="text-center mt-3 mb-3">Coded by Zoé Playoust</footer>
    </div>
  );
}
