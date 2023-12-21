import React from "react";

export function GameBanner({ isWin, answer, numGuesses }) {
  if (isWin) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{numGuesses > 1 ? <> {numGuesses} guesses</> : <> one guess</>}</strong>.
        </p>
      </div>
    );
  } else {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer.toUpperCase()}</strong>.
        </p>
      </div>
    );
  }
}
