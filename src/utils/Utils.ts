enum TILE_STATE {
    CORRECT_POSITION = "CORRECT_POSITION",
    INITIAL = "INITIAL",
    NOT_PRESENT = "NOT_PRESENT",
    PRESENT = "PRESENT",
}

const keyboardRows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Del"],
];

const availableKeys = [
    ...keyboardRows
        .map((keyboardRow) => keyboardRow.map((key) => key.toUpperCase()))
        .flat(),
    "BACKSPACE", // TODO: Find better way to do this...
];

const COLORS = {
    GREEN: "#538D4E",
    GREY: "#818384",
    BLACK: "#121213",
    YELLOW: "#b59f3b",
};

export enum SOURCE {
    KEY,
    TILE,
}

export const getColor = (state: TILE_STATE, source: SOURCE) => {
    if (state === TILE_STATE.CORRECT_POSITION) {
        return COLORS.GREEN;
    }

    if (state === TILE_STATE.PRESENT) {
        return COLORS.YELLOW;
    }

    if (source === SOURCE.KEY) {
        if (state === TILE_STATE.NOT_PRESENT) {
            return COLORS.BLACK;
        } else {
            return COLORS.GREY;
        }
    }

    if (source === SOURCE.TILE) {
        if (state === TILE_STATE.NOT_PRESENT) {
            return COLORS.GREY;
        } else {
            return COLORS.BLACK;
        }
    }

    throw Error("Something went wrong with getting color!");
};

export { TILE_STATE, keyboardRows, availableKeys };
