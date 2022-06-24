enum TILE_STATE {
    CORRECT_POSITION = "CORRECT_POSITION",
    INITIAL = "INITIAL",
    NOT_PRESENT = "NOT_PRESENT",
    PRESENT = "PRESENT",
}

const getTileColor = (state?: TILE_STATE, defaultColor?: string) => {
    if (!state && defaultColor) {
        return defaultColor;
    }
    switch (state) {
        case TILE_STATE.CORRECT_POSITION:
            return "#538D4E";
        case TILE_STATE.INITIAL:
            return "#3A3A3C";
        case TILE_STATE.NOT_PRESENT:
            return "#121213";
        case TILE_STATE.PRESENT:
            return "#b59f3b";
        default:
            return "#3A3A3C";
    }
};

export { getTileColor, TILE_STATE };
