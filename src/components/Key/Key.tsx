import { useEffect, useState } from "react";
import { useGameState } from "../../hooks/useGameState";
import { getColor, PIECE_SOURCE, PIECE_STATE } from "../../utils/Utils";

type KeyProps = {
    letter: string;
};

const Key = ({ letter }: KeyProps) => {
    const { submitKey, guesses, answer, currentGuess } = useGameState();
    const [keyState, setKeyState] = useState(PIECE_STATE.INITIAL);

    useEffect(() => {
        if (
            keyState === PIECE_STATE.CORRECT_POSITION ||
            keyState === PIECE_STATE.NOT_PRESENT
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
            setKeyState(PIECE_STATE.NOT_PRESENT);
        }

        const currentGuessIndex = currentGuess.indexOf(letter);
        const currentAnswerIndex = answer.indexOf(letter);

        if (currentGuessIndex === currentAnswerIndex) {
            setKeyState(PIECE_STATE.CORRECT_POSITION);
        } else if (currentAnswerIndex >= 0) {
            setKeyState(PIECE_STATE.PRESENT);
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
                backgroundColor: getColor(keyState, PIECE_SOURCE.KEY),
                padding: "0 .6rem",
                cursor: "pointer",
            }}
            onClick={() => {
                submitKey(letter);
            }}
        >
            {letter}
        </div>
    );
};

export default Key;
