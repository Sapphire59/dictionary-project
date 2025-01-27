import React from "react";

import Synonyms from "./Synonyms.jsx";
import "./Meaning.css";

function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.results.map(function (results, index) {
          return (
            <div key={index}>
              <div className="definition">{definition.definition}</div>

              <br />
              <div className="example">{definition.example}</div>

              <Synonyms synonyms={props.meaning.synonyms} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Meaning;
