import React, { createContext, useContext, useState } from "react";
import { useCounter } from "react-use";

export type Guess = {
    submitted: boolean;
    letters: string[];
};

type GameStateContext = {
    guesses: Array<Guess>;
    answer: string;
    submitGuess: () => void;
    submitLetter: (letter: string) => void;
    removeLetter: () => void;
    currentGuess: string[];
};

const getDefaultGuesses = (): Array<Guess> => {
    const emptyGuess = Array(5).fill("");

    return Array(5).fill({ submitted: false, letters: emptyGuess });
};

const gameStateContext = createContext<GameStateContext>({
    guesses: getDefaultGuesses(),
    answer: "",
    submitLetter: () => undefined,
    removeLetter: () => undefined,
    submitGuess: () => undefined,
    currentGuess: [],
});

export const useGameState = () => {
    return useContext(gameStateContext);
};

export const GameStateProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const gameState = useProviderGameState();
    return (
        <gameStateContext.Provider value={gameState}>
            {children}
        </gameStateContext.Provider>
    );
};

const useProviderGameState = (): GameStateContext => {
    const answer = "RATED"; // TODO: get random word from list
    const [guesses, setGuesses] = useState(getDefaultGuesses());
    const [guessRowIndex, { inc: incGuessRowIndex }] = useCounter(0);
    const [currentGuess, setCurrentGuess] = useState<string[]>([]);
    const [gameWon, setGameWon] = useState(false);
    const [
        guessLetterIndex,
        {
            inc: incGuessLetterIndex,
            dec: decGuessLetterIndex,
            reset: resetGuessLetterIndex,
        },
    ] = useCounter(0);

    const submitLetter = (letter: string) => {
        if (gameWon || letter === "" || guessLetterIndex >= 5) {
            return;
        }

        const newGuess: Array<Guess> = JSON.parse(JSON.stringify(guesses));
        newGuess[guessRowIndex].letters[guessLetterIndex] = letter;
        setGuesses(newGuess);
        incGuessLetterIndex();
    };

    const removeLetter = () => {
        if (gameWon || guessLetterIndex === 0) {
            return;
        }

        const newGuess = JSON.parse(JSON.stringify(guesses));
        newGuess[guessRowIndex].letters[guessLetterIndex - 1] = "";
        setGuesses(newGuess);
        decGuessLetterIndex();
    };

    const submitGuess = () => {
        if (gameWon || guessRowIndex > 5 || guessLetterIndex < 5) {
            return;
        }

        const word = guesses[guessRowIndex].letters.reduce(
            (prev: string, curr: string) => prev + curr,
            ""
        );

        // TODO: Check word against actual words list. Trigger Unknown word toast

        if (word === answer) {
            // TODO: submit answer. Trigger successful toast and freeze game
            const newGuess: Array<Guess> = JSON.parse(JSON.stringify(guesses));
            newGuess[guessRowIndex].submitted = true;
            setGuesses(newGuess);
            setCurrentGuess(newGuess[guessRowIndex].letters);
            setGameWon(true);
        } else {
            resetGuessLetterIndex();
            incGuessRowIndex();
            const newGuess: Array<Guess> = JSON.parse(JSON.stringify(guesses));
            newGuess[guessRowIndex].submitted = true;
            setGuesses(newGuess);
            setCurrentGuess(newGuess[guessRowIndex].letters);
        }
    };

    return {
        guesses,
        submitLetter,
        removeLetter,
        submitGuess,
        answer,
        currentGuess,
    };
};
