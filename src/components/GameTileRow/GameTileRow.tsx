import GameTile from "../GameTile/GameTile";

const GameTileRow = () => {
    return (
        <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
            {[...Array(5).keys()].map((e: number) => (
                <GameTile key={e} />
            ))}
        </div>
    );
};

export default GameTileRow;
