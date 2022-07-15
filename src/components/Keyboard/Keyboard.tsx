import { keyboardRows } from "../../utils/Utils";
import Key from "../Key/Key";

const Keyboard = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2px",
            }}
        >
            {keyboardRows.map((row, index) => (
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
