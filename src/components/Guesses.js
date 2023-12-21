import React from "react";
import { range } from "../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../constants";

export function Guesses({ guessesValidations }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((idx) => {
        const maybeGuessValidation = guessesValidations[idx];
        const renderedGuess =
          maybeGuessValidation == null ? (
            <EmptyGuess />
          ) : (
            <GuessedWord
              guessValidation={maybeGuessValidation}
            />
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

function GuessedWord({ guessValidation }) {
  return (
    <p className="guess">
      {guessValidation.map(({ letter, status }, idx) => <span className={`cell ${status}`} key={idx}>{letter}</span>)}
    </p>
  );
}
