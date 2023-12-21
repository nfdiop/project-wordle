import React from "react";

export function GuessInput({ onSubmit, disabled }){
    const [inputValue, setInputValue] = React.useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("🚀 ~ file: GuessInput.js:9 ~ handleSubmit ~ inputValue:", inputValue)
        onSubmit(inputValue)
        setInputValue("")
    }

    return (
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input id="guess-input" type="text" value={inputValue} onChange={(event) => {
                const value = event.target.value;
                setInputValue(value.toUpperCase())
            }} pattern=".{5}" minLength={5} maxLength={5} autoComplete="off" title="Please enter exactly 5 characters" disabled={disabled} />
        </form>
    )
}
