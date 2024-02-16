import axios from "axios";
import { useEffect, useState } from "react";

import logo from "./assets/logo/logo.svg";

function App(): JSX.Element {
    const [message, setMessage] = useState("Learn React!");
    useEffect(() => {
        let mounted = true;
        async function axiosRequestFn() {
            try {
                // this is a dummy request written for the sake of a test.
                const response = await axios.get("http://localhost:3030/dummyUrl");
                setMessage(response.data.message);
            } catch (error) {
                // Error thats never going to happen in production!
            }
        }
        if (process.env.NODE_ENV === "test" && mounted) {
            axiosRequestFn();
        }
        return () => {
            mounted = false;
        };
    }, []);
    return (
        <div className="text-center font-montserrat">
            <header className="bg-appGrey min-h-screen flex flex-col items-center justify-center text-white text-[calc(10px + 2vmin)]">
                <img src={logo} className="animate-spin-slow h-[40vmin] pointer-events-none" alt="logo" />
                <p id="edit" data-testid="edit">
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="text-linkBlue hover:underline" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    {message}
                </a>
            </header>
        </div>
    );
}
export default App;
