import React from "react";
import { range } from "../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../constants"

export function Guesses({ guesses }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((idx) => {
        const maybeGuess = guesses[idx];
        const renderedGuess =
          maybeGuess == null ? (
            <EmptyGuess />
          ) : (
            <GuessedWord guess={maybeGuess} />
          );
        return <React.Fragment key={idx}>{renderedGuess}</React.Fragment>;
      })}
    </div>
  );
}

function EmptyGuess() {
  return (
    <p className="guess">
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
    </p>
  );
}

function GuessedWord({ guess }) {
  const { label } = guess;
  return (
    <p className="guess">
      <span className="cell">{label[0]}</span>
      <span className="cell">{label[1]}</span>
      <span className="cell">{label[2]}</span>
      <span className="cell">{label[3]}</span>
      <span className="cell">{label[4]}</span>
    </p>
  );
}
