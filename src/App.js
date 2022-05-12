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
      </div>
      <footer className="text-center mt-3 mb-3">Coded by Zoé Playoust</footer>
    </div>
  );
}

export default App;
