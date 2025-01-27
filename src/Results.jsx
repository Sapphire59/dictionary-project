import React from "react";

import Meaning from "./Meaning.jsx";

import Phonetic from "./Phonetic.jsx";

import "./Results.css";

function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.definition.word}</h2>
          <Phonetic phonetic={props.definition.phonetic} />
          {props.definition.meanings.map(function (meaning, index) {
            return (
              <section key={index}>
                <Meaning meaning={meaning} />
              </section>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}

export default Results;
