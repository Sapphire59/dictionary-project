import React from "react";

function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noopener noreferrer">
        Listen
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}

export default Phonetic;
