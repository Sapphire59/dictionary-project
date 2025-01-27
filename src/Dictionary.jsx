import React, { useState } from "react";

import axios from "axios";

import Results from "./Results.jsx";
import Photos from "./Photos.jsx";
import "./Dictionary.css";

function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [loaded, setLoaded] = useState(false);
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState([]);

  function handleImages(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    setResults(response.data[0]);

    let apiKey = "7eot7c9e36304bbfae357f4a433400e3";
    let apiUrl = `https://api.shecodes.io/images/v1/search?query=${response.data.word}&key=${apiKey}`;
    axios
      .get(apiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(handleImages);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let apiKey = "7eot7c9e36304bbfae357f4a433400e3";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <label>What word do you want to look up?</label>
            <input
              type="search"
              placeholder="Search for a word"
              defaultValue={props.defaultKeyword}
              autoFocus={true}
              className="form-control search-input"
              onChange={handleKeywordChange}
            />
          </form>
          <small className="hint">i.e. sunrise, sports, food, birds</small>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading!";
  }
}

export default Dictionary;
