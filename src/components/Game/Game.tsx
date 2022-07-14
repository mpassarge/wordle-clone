import { useKey } from "react-use";
import { useGameState } from "../../hooks/useGameState";
import GameBoard from "../GameBoard/GameBoard";
import Keyboard from "../Keyboard/Keyboard";

const Game = () => {
    const { submitKey } = useGameState();

    const handleSubmit = (e: KeyboardEvent) => {
        submitKey(e.key);
    };

    // TODO: Extract submit letter to be only function exposed from useGameState
    useKey(() => true, handleSubmit); // TODO: Update predicate to only check known letters

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
