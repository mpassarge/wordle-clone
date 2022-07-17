import "./App.css";
import Game from "./components/Game";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar
            />
            <Game />
        </>
    );
}

export default App;
