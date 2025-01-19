import React, { useState } from "react";

import axios from "axios";

import Results from "./Results.jsx";
import "./Dictionary.css";

function Dictionary() {
  let [keyword, setKeyword] = useState(" ");

  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);

    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "7eot7c9e36304bbfae357f4a433400e3";

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
      </form>

      <Results results={results} />
    </div>
  );
}

export default Dictionary;
