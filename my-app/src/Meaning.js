import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  console.log(props.meaning);
  if (props.meaning.example) {
    return (
      <div className="Meanings">
        <h4>{props.meaning.partOfSpeech}</h4>
        <p>
          <strong>Definition: </strong>
          {props.meaning.definition}
        </p>
        <br />
        <p>
          <strong>Example: </strong> <em>{props.meaning.example}</em>
        </p>
        <br />
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    );
  } else {
    return (
      <div className="Meanings">
        <h4>{props.meaning.partOfSpeech}</h4>
        <p>
          <strong>Definition: </strong>
          {props.meaning.definition}
        </p>

        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    );
  }
}
