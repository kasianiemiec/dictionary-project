import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meanins(props) {
  console.log(props.meaning);
  if (props.meaning.example) {
    return (
      <div className="Meaning">
        <div className="noun">
          <em>{props.meaning.partOfSpeech}</em>
        </div>
        <p className="definition">{props.meaning.definition}</p>
        <p className="example">"{props.meaning.example}"</p>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    );
  } else {
    return (
      <div className="Meaning">
        <div className="noun">
          <em>{props.meaning.partOfSpeech}</em>
        </div>
        <p className="definition">{props.meaning.definition}</p>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    );
  }
}
