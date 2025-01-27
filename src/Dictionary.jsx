import React, { useState } from "react";

import axios from "axios";

import Results from "./Results.jsx";
import "./Dictionary.css";

function Dictionary(props) {
  let [keyword, setKeyword] = useState("props.defaultKeyword ");

  let [results, setResults] = useState(null);

  let [loaded, seatLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiKey = "7eot7c9e36304bbfae357f4a433400e3";

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleResponse);
    console.log(apiUrl);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    seatLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>

          <div className="hint">Hint: sunset, animals, flowers, food...</div>
        </section>

        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}

export default Dictionary;
