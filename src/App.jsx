import React from "react";
import Dictionary from "./Dictionary.jsx";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div>
      <div className="container">
        <header className="App-Header"></header>
        <h1>Dictionary App</h1>
        <Dictionary defaultKeyword="sunset" />
      </div>

      <footer>
        This page was coded by Deborah Chacko is open-sourced on{" "}
        <a
          href="https://github.com/Sapphire59"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github{" "}
        </a>
        and is hosted on{" "}
        <a
          href="https://dc-react-dictionary-app.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
