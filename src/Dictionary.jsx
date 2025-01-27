import React, { useState } from "react";

import axios from "axios";

import Results from "./Results.jsx";
import Photos from "./Photos.jsx";
import "./Dictionary.css";

function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);

  let [results, setResults] = useState(null);
  const [definition, setDefinition] = useState(null);

  let [loaded, setLoaded] = useState(false);

  let { photos, setPhotos } = useState([]);

  function handleImages(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    setDefinition(response.data);

    let apiKey = "7eot7c9e36304bbfae357f4a433400e3";

    let apiUrl = `https://api.shecodes.io/images/v1/search?query=${response.data.word}&key=${apiKey}`;

    axios
      .get(apiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(handleImages);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
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

          <div className="hint">i.e: sunset, animals, flowers, food...</div>
        </section>

        <Result definition={definition} />

        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}

export default Dictionary;
