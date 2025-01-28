import React from "react";

import Meaning from "./Meaning.jsx";

import Phonetic from "./Phonetic.jsx";

import "./Results.css";

function Result(props) {
  if (props.definition) {
    return (
      <div className="Result">
        <section>
          <h2>{props.definition.word}</h2>
          <Phonetic phonetic={props.definition.phonetic} />
        </section>

        {props.definition.meanings.map(function (meaning, index) {
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

export default Result;
