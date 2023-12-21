import React from "react";

export function Guesses({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ label, id}) => <p class="guess" key={id}>{label}</p>)}
    </div>
  );
}
