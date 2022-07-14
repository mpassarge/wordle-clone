import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useCounter } from "react-use";
import { containsWord, getRandomWord } from "../utils/words";

export type Guess = {
    submitted: boolean;
    letters: string[];
};

type GameStateContext = {
    guesses: Array<Guess>;
    answer: string;
    currentGuess: string[];
    submitKey: (key: string) => void;
};

const getDefaultGuesses = (): Array<Guess> => {
    const emptyGuess = Array(5).fill("");

    return Array(5).fill({ submitted: false, letters: emptyGuess });
};

const gameStateContext = createContext<GameStateContext>({
    guesses: getDefaultGuesses(),
    answer: "",
    submitKey: () => undefined,
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
    const [answer, setAnswer] = useState("");

    const [guesses, setGuesses] = useState(getDefaultGuesses());
    const [guessRowIndex, { inc: incGuessRowIndex }] = useCounter(0);
    const [currentGuess, setCurrentGuess] = useState<string[]>([]);
    const [gameOver, setGameOver] = useState(false);
    const [
        guessLetterIndex,
        {
            inc: incGuessLetterIndex,
            dec: decGuessLetterIndex,
            reset: resetGuessLetterIndex,
        },
    ] = useCounter(0);

    useEffect(() => {
        if (answer === "") {
            setAnswer(getRandomWord());
        }
    }, [answer]);

    const submitKey = (key: string) => {
        if (key.toUpperCase() === "DEL" || key.toUpperCase() === "BACKSPACE") {
            removeLetter();
        } else if (
            key.toUpperCase() === "ENTER" ||
            key.toUpperCase() === "RETURN"
        ) {
            submitGuess();
        } else {
            submitLetter(key.toUpperCase());
        }
    };

    const submitLetter = (letter: string) => {
        if (gameOver || letter === "" || guessLetterIndex >= 5) {
            return;
        }

        const newGuess: Array<Guess> = JSON.parse(JSON.stringify(guesses));
        newGuess[guessRowIndex].letters[guessLetterIndex] = letter;
        setGuesses(newGuess);
        incGuessLetterIndex();
    };

    const removeLetter = () => {
        if (gameOver || guessLetterIndex === 0) {
            return;
        }

        const newGuess = JSON.parse(JSON.stringify(guesses));
        newGuess[guessRowIndex].letters[guessLetterIndex - 1] = "";
        setGuesses(newGuess);
        decGuessLetterIndex();
    };

    const submitGuess = () => {
        if (gameOver) {
            return;
        }

        if (guessLetterIndex < 5) {
            toast.error("Not enough letters.");
            return;
        }
        const word = guesses[guessRowIndex].letters.reduce(
            (prev: string, curr: string) => prev + curr,
            ""
        );

        if (!containsWord(word)) {
            toast.error("Not a word. Try again.");
            return;
        }

        if (word === answer) {
            const newGuess: Array<Guess> = JSON.parse(JSON.stringify(guesses));
            newGuess[guessRowIndex].submitted = true;
            setGuesses(newGuess);
            setCurrentGuess(newGuess[guessRowIndex].letters);
            setGameOver(true);
            toast.success(`Congradulation!`);
        } else {
            resetGuessLetterIndex();
            incGuessRowIndex();
            const newGuess: Array<Guess> = JSON.parse(JSON.stringify(guesses));
            newGuess[guessRowIndex].submitted = true;
            setGuesses(newGuess);
            setCurrentGuess(newGuess[guessRowIndex].letters);
        }

        if (guessRowIndex >= 5 || guessRowIndex + 1 >= 5) {
            toast.error(answer);
            setGameOver(true);
        }
    };

    return {
        guesses,
        submitKey,
        answer,
        currentGuess,
    };
};
