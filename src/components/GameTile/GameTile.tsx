import { getColor, PIECE_SOURCE, PIECE_STATE } from "../../utils/Utils";

export type GameTileProps = {
    letter?: string;
    state?: PIECE_STATE;
};

const GameTile = ({ letter, state = PIECE_STATE.INITIAL }: GameTileProps) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFF",
                fontSize: "2.5rem",
                height: "4rem",
                width: "4rem",
                backgroundColor: getColor(state, PIECE_SOURCE.TILE),
                border: "1px solid #3A3A3C",
            }}
        >
            {letter}
        </div>
    );
};

export default GameTile;
