import { useKey } from "react-use";
import { useGameState } from "../../hooks/useGameState";
import { availableKeys } from "../../utils/Utils";
import GameBoard from "../GameBoard/GameBoard";
import Keyboard from "../Keyboard/Keyboard";

const Game = () => {
    const { submitKey } = useGameState();

    const handleSubmit = (e: KeyboardEvent) => {
        submitKey(e.key);
    };

    useKey((keyboardEvent) => {
        console.log(keyboardEvent.key);

        return availableKeys.includes(keyboardEvent.key.toUpperCase());
    }, handleSubmit);

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}
        >
            <GameBoard />
            <br />
            <Keyboard />
        </div>
    );
};

export default Game;
