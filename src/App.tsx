import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Game from "./components/Game/Game";

function App() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Game />
        </div>
    );
}

export default App;
