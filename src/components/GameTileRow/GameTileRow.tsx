import { useGameState } from "../../hooks/useGameState";
import { TILE_STATE } from "../../utils/Utils";
import GameTile from "../GameTile/GameTile";

export type GameTilwRowProps = {
    letters: Array<string>;
    showState: boolean;
};

const getTileState = (
    answer: string,
    letter: string,
    index: number
): TILE_STATE => {
    if (letter === "") {
        return TILE_STATE.INITIAL;
    }

    if (answer.charAt(index) === letter) {
        return TILE_STATE.CORRECT_POSITION;
    } else if (answer.includes(letter)) {
        return TILE_STATE.PRESENT;
    } else {
        return TILE_STATE.NOT_PRESENT;
    }
};

const GameTileRow = ({ letters, showState }: GameTilwRowProps) => {
    const { answer } = useGameState();
    return (
        <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
            {letters.map((e: string, index: number) => {
                return (
                    <GameTile
                        key={index}
                        letter={e}
                        state={
                            showState
                                ? getTileState(answer, e, index)
                                : undefined
                        }
                    />
                );
            })}
        </div>
    );
};

export default GameTileRow;
