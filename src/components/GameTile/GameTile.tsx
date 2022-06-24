import { getTileColor, TILE_STATE } from "../../utils/Utils";

export type GameTileProps = {
    letter?: string;
    state?: TILE_STATE;
};

const GameTile = ({ letter, state = TILE_STATE.INITIAL }: GameTileProps) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFF",
                fontWeight: "300",
                fontSize: "2.5rem",
                height: "4rem",
                width: "4rem",
                textAlign: "center",
                backgroundColor: getTileColor(state),
            }}
        >
            {letter}
        </div>
    );
};

export default GameTile;
