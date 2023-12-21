import React from "react";
import { WORD_SIZE } from "./constants";

export function Keyboard({ highlights, onSubmit }) {
  const [letters, setLetters] = React.useState([]);
  const isWordComplete = letters.length === WORD_SIZE;

  function submitWord(lettersToSubmit) {
    const word = lettersToSubmit.join("").toUpperCase()
    onSubmit(word);
    setLetters("");
  }

  function handleSelectLetter(letter) {
    const newLetters = [...letters, letter];
    if (newLetters.length === WORD_SIZE) {
      submitWord(newLetters);
    } else {
      setLetters(newLetters);
    }
  }

  function handleDeleteLetter() {
    if (letters.length > 0) {
      setLetters((l) => {
        const newLetters = [...l];
        newLetters.pop();
        return newLetters;
      });
    }
  }

  function handleEnterLetter() {
    if (letters.length !== WORD_SIZE) {
      window.alert(`Enter exactly ${WORD_SIZE} letters.`);
    } else {
      submitWord(letters);
    }
  }

  return (
    <div>
      <div className="keyboard">
        <div className="keyboard-row">
          <KeyboardLetter
            disabled={isWordComplete}
            letters={letters}
            letter="Q"
            onSelectLetter={handleSelectLetter}
          />
          <KeyboardLetter
            disabled={isWordComplete}
            letters={letters}
            letter="W"
            onSelectLetter={handleSelectLetter}
          />
          <KeyboardLetter
            disabled={isWordComplete}
            letters={letters}
            letter="E"
            onSelectLetter={handleSelectLetter}
          />
          <KeyboardLetter
            disabled={isWordComplete}
            letters={letters}
            letter="R"
            onSelectLetter={handleSelectLetter}
          />
          <KeyboardLetter
            disabled={isWordComplete}
            letters={letters}
            letter="T"
            onSelectLetter={handleSelectLetter}
          />
          <KeyboardLetter
            disabled={isWordComplete}
            letters={letters}
            letter="Y"
            onSelectLetter={handleSelectLetter}
          />
          <KeyboardLetter
            disabled={isWordComplete}
            letters={letters}
            letter="U"
            onSelectLetter={handleSelectLetter}
          />
          <KeyboardLetter
            disabled={isWordComplete}
            letters={letters}
            letter="I"
            onSelectLetter={handleSelectLetter}
          />
          <KeyboardLetter
            disabled={isWordComplete}
            letters={letters}
            letter="O"
            onSelectLetter={handleSelectLetter}
          />
          <KeyboardLetter
            disabled={isWordComplete}
            letters={letters}
            letter="P"
            onSelectLetter={handleSelectLetter}
          />
        </div>
        <div className="keyboard-row">
          <KeyboardLetter
            disabled={isWordComplete}
            letters={letters}
            letter="A"
            onSelectLetter={handleSelectLetter}
          />
          <KeyboardLetter
            disabled={isWordComplete}
            letters={letters}
            letter="S"
            onSelectLetter={handleSelectLetter}
          />
          <KeyboardLetter
            disabled={isWordComplete}
            letters={letters}
            letter="D"
            onSelectLetter={handleSelectLetter}
          />
          <KeyboardLetter
            disabled={isWordComplete}
            letters={letters}
            letter="F"
            onSelectLetter={handleSelectLetter}
          />
          <KeyboardLetter
            disabled={isWordComplete}
            letters={letters}
            letter="G"
            onSelectLetter={handleSelectLetter}
          />
          <KeyboardLetter
            disabled={isWordComplete}
            letters={letters}
            letter="H"
            onSelectLetter={handleSelectLetter}
          />
          <KeyboardLetter
            disabled={isWordComplete}
            letters={letters}
            letter="J"
            onSelectLetter={handleSelectLetter}
          />
          <KeyboardLetter
            disabled={isWordComplete}
            letters={letters}
            letter="K"
            onSelectLetter={handleSelectLetter}
          />
          <KeyboardLetter
            disabled={isWordComplete}
            letters={letters}
            letter="L"
            onSelectLetter={handleSelectLetter}
          />
        </div>
        <div className="keyboard-row">
          <KeyboardLetter
            disabled={isWordComplete}
            letters={letters}
            letter="ENTER"
            onSelectLetter={handleEnterLetter}
          />
          <KeyboardLetter
            disabled={isWordComplete}
            letters={letters}
            letter="Z"
            onSelectLetter={handleSelectLetter}
          />
          <KeyboardLetter
            disabled={isWordComplete}
            letters={letters}
            letter="X"
            onSelectLetter={handleSelectLetter}
          />
          <KeyboardLetter
            disabled={isWordComplete}
            letters={letters}
            letter="C"
            onSelectLetter={handleSelectLetter}
          />
          <KeyboardLetter
            disabled={isWordComplete}
            letters={letters}
            letter="V"
            onSelectLetter={handleSelectLetter}
          />
          <KeyboardLetter
            disabled={isWordComplete}
            letters={letters}
            letter="B"
            onSelectLetter={handleSelectLetter}
          />
          <KeyboardLetter
            disabled={isWordComplete}
            letters={letters}
            letter="N"
            onSelectLetter={handleSelectLetter}
          />
          <KeyboardLetter
            disabled={isWordComplete}
            letters={letters}
            letter="M"
            onSelectLetter={handleSelectLetter}
          />
          <KeyboardLetter
            disabled={isWordComplete}
            letters={letters}
            letter="⌫"
            onSelectLetter={handleDeleteLetter}
          />
        </div>
      </div>
      {isWordComplete && (
        <div>You have entered the maximum number of letters allowed.</div>
      )}
    </div>
  );
}

function KeyboardLetter({ onSelectLetter, letter, letters, disabled }) {
  return (
    <button
      disabled={disabled}
      className={`keyboard-letter ${letters.includes(letter) ? "used" : ""}`}
      onClick={() => {
        onSelectLetter(letter);
      }}
    >
      {letter}
    </button>
  );
}
