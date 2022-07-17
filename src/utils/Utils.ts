enum PIECE_STATE {
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

enum PIECE_SOURCE {
    KEY,
    TILE,
}

const getColor = (state: PIECE_STATE, source: PIECE_SOURCE) => {
    if (state === PIECE_STATE.CORRECT_POSITION) {
        return COLORS.GREEN;
    }

    if (state === PIECE_STATE.PRESENT) {
        return COLORS.YELLOW;
    }

    if (source === PIECE_SOURCE.KEY) {
        if (state === PIECE_STATE.NOT_PRESENT) {
            return COLORS.BLACK;
        } else {
            return COLORS.GREY;
        }
    }

    if (source === PIECE_SOURCE.TILE) {
        if (state === PIECE_STATE.NOT_PRESENT) {
            return COLORS.GREY;
        } else {
            return COLORS.BLACK;
        }
    }

    console.error(
        `Failed to get proper color for state: ${state} and source ${source}`
    );
    return PIECE_STATE.INITIAL;
};

export { PIECE_STATE, PIECE_SOURCE, keyboardRows, availableKeys, getColor };
