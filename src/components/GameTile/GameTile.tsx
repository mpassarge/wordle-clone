import { TILE_STATE } from "../../utils/Utils";

export type GameTileProps = {
    letter?: string;
    state?: TILE_STATE;
};

const getTileColor = (state?: TILE_STATE) => {
    switch (state) {
        case TILE_STATE.CORRECT_POSITION:
            return "#538D4E";
        case TILE_STATE.INITIAL:
            return "#121213";
        case TILE_STATE.NOT_PRESENT:
            return "#818384";
        case TILE_STATE.PRESENT:
            return "#b59f3b";
        default:
            return "#121213";
    }
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
                border: "1px solid #3A3A3C",
            }}
        >
            {letter}
        </div>
    );
};

export default GameTile;
