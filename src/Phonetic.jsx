import React from "react";

import "./Phonetic.css";

function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <span>
          <h3>{props.phonetic}</h3>
        </span>
      </div>
    );
  } else {
    return null;
  }
}

export default Phonetic;
