import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { GuessInput } from "../GuessInput";
import { Guesses } from "../Guesses";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess, isGuessValid } from "../../game-helpers";
import { GameBanner } from "./GameBanner";
import { Keyboard } from "../../Keyboard";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const { guessesValidations, isWordFound } = (() => {
    const guessesValidationsInternal = [];
    let isWordFoundInternal = false;

    // Check the validity of letters and whether the guess is valid
    guesses.forEach(({ guess }) => {
      const result = checkGuess(guess, answer);
      isWordFoundInternal = isWordFoundInternal || isGuessValid(result);
      guessesValidationsInternal.push(result);
    });

    return {
      guessesValidations: guessesValidationsInternal,
      isWordFound: isWordFoundInternal,
    };
  })();
  const isGameFinished =
    isWordFound || guesses.length === NUM_OF_GUESSES_ALLOWED;

  const addGuess = (guess) => {
    setGuesses((guesses) => [...guesses, { id: crypto.randomUUID(), guess }]);
  };

  return (
    <>
      {isGameFinished && (
        <GameBanner
          answer={answer}
          isWin={isWordFound}
          numGuesses={guesses.length}
        />
      )}
      <Guesses guessesValidations={guessesValidations} />
      <GuessInput onSubmit={addGuess} disabled={isGameFinished} />
      <Keyboard onSubmit={addGuess}/>
    </>
  );
}

export default Game;
