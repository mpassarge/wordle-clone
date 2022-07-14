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

export { TILE_STATE, keyboardRows, availableKeys };
