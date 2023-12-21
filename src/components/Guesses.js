import React from "react";
import { range } from "../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../constants";
import { checkGuess } from "../game-helpers";

export function Guesses({ answer, guesses }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((idx) => {
        const maybeGuess = guesses[idx];
        const renderedGuess =
          maybeGuess == null ? (
            <EmptyGuess />
          ) : (
            <GuessedWord
              guessValidationResult={checkGuess(maybeGuess.label, answer)}
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

function GuessedWord({ guessValidationResult }) {
  return (
    <p className="guess">
      {guessValidationResult.map(({ letter, status }) => <span className={`cell ${status}`}>{letter}</span>)}
    </p>
  );
}
