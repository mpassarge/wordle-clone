import logo from "./logo.svg";
import "./App.css";
import Game from "./components/Game/Game";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar
            />
            <Game />
        </div>
    );
}

export default App;
