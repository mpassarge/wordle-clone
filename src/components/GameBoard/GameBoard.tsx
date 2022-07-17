import { useGameState } from "../../hooks/useGameState";
import GameTileRow from "../GameTileRow";

const GameBoard = () => {
    const { guesses } = useGameState();
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            {guesses.map(
                ({ letters }: { letters: string[] }, index: number) => (
                    <GameTileRow
                        letters={letters}
                        showState={guesses[index].submitted}
                        key={index}
                    />
                )
            )}
        </div>
    );
};

export default GameBoard;
