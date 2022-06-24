import GameBoard from "../GameBoard/GameBoard";
import Keyboard from "../Keyboard/Keyboard";

const Game = () => {
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
