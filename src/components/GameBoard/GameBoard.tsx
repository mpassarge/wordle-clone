import GameTileRow from "../GameTileRow/GameTileRow";

const GameBoard = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            {[...Array(5).keys()].map((e: number) => (
                <GameTileRow key={e} />
            ))}
        </div>
    );
};

export default GameBoard;
