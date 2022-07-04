import React, { useState, useEffect, useCallback } from "react";

import { useGameState } from "../../hooks/useGameState";
import { TILE_STATE } from "../../utils/Utils";

type KeyProps = {
    letter: string;
};

const getTileColor = (state?: TILE_STATE) => {
    switch (state) {
        case TILE_STATE.CORRECT_POSITION:
            return "#538D4E";
        case TILE_STATE.INITIAL:
            return "#818384";
        case TILE_STATE.NOT_PRESENT:
            return "#121213";
        case TILE_STATE.PRESENT:
            return "#b59f3b";
        default:
            return "#818384";
    }
};

const Key = ({ letter }: KeyProps) => {
    const {
        submitLetter,
        removeLetter,
        submitGuess,
        guesses,
        answer,
        currentGuess,
    } = useGameState();
    const [keyState, setKeyState] = useState(TILE_STATE.INITIAL);

    useEffect(() => {
        if (
            keyState === TILE_STATE.CORRECT_POSITION ||
            keyState === TILE_STATE.NOT_PRESENT
        ) {
            return;
        }

        const submittedGuesses = new Set(
            Array.prototype.concat.apply(
                [],
                guesses
                    .filter((guess) => guess.submitted)
                    .map((guess) => guess.letters)
            )
        );

        if (!submittedGuesses.has(letter)) {
            return;
        }

        if (!answer.includes(letter)) {
            setKeyState(TILE_STATE.NOT_PRESENT);
        }

        const currentGuessIndex = currentGuess.indexOf(letter);
        const currentAnswerIndex = answer.indexOf(letter);

        if (currentGuessIndex === currentAnswerIndex) {
            setKeyState(TILE_STATE.CORRECT_POSITION);
        } else if (currentAnswerIndex >= 0) {
            setKeyState(TILE_STATE.PRESENT);
        }
    }, [guesses, keyState, setKeyState, letter, answer, currentGuess]);

    return (
        <div
            style={{
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid grey",
                borderRadius: "35%",
                height: "3rem",
                width: "1.5rem",
                backgroundColor: getTileColor(keyState),
                padding: "0 .6rem",
                cursor: "pointer",
            }}
            onClick={() => {
                if (letter === "Enter") {
                    submitGuess();
                } else if (letter === "Del") {
                    removeLetter();
                } else {
                    submitLetter(letter);
                }
            }}
        >
            {letter}
        </div>
    );
};

const Keyboard = () => {
    const keyboardRows = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Del"],
    ];

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2px",
            }}
        >
            {keyboardRows.map((row, index) => (
                <div
                    key={index}
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "2px",
                    }}
                >
                    {row.map((letter) => (
                        <Key key={letter} letter={letter} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Keyboard;
