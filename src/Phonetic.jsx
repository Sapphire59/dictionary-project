import React from "react";
import "./Phonetic.css";

function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noopener noreferrer">
        Listen
      </a>

      <span className="text"> {props.phonetic.text}</span>
    </div>
  );
}

export default Phonetic;
