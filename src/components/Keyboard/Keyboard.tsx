import { getTileColor, TILE_STATE } from "../../utils/Utils";

type KeyProps = {
    letter: string;
    state?: TILE_STATE;
};

const Key = ({ letter, state }: KeyProps) => {
    return (
        <div
            style={{
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid grey",
                borderRadius: "35%",
                height: "3rem",
                width: "1.5rem",
                backgroundColor: getTileColor(state, "#818384"),
                padding: "0 .6rem",
                cursor: "pointer",
            }}
            onClick={() => {
                console.log(letter);
            }}
        >
            {letter}
        </div>
    );
};
const Keyboard = () => {
    const letters = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Del"],
    ];

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2px",
            }}
        >
            {letters.map((row, index) => (
                <div
                    key={index}
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "2px",
                    }}
                >
                    {row.map((letter) => (
                        <Key key={letter} letter={letter} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Keyboard;
