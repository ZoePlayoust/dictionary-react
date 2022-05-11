import "./App.css";
import React from "react";
import Search from "./Search";

function App() {
  return (
    <div className="App  ">
      <div className="container">
        <header className="mt-5 mb-5"> Dictionary</header>
        <main>
          <Search />
        </main>
        <footer className="text-center">Coded by Zoé Playoust</footer>
      </div>
    </div>
  );
}

export default App;
