import React from "react";

import Meaning from "./Meaning.jsx";

import Phonetic from "./Phonetic.jsx";

import "./Results.css";

function Results(props) {
  if (props.results) {
    return (
      <div className="Result">
        <section>
          <h1>{props.results.word}</h1>
          <Phonetic phonetic={props.results.phonetic} />
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Results;
