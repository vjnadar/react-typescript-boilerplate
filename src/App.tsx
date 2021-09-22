import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './App.scss';
import logo from './assets/logo/logo.svg';

function App(): JSX.Element {
    const [message, setMessage] = useState('Learn React');
    useEffect(() => {
        let mounted=true;
        const axiosRequestFn = async () => {
            try {
                // this is a dummy request written for the sake of a test.
                const response = await axios.get('http://localhost:3030/dummyUrl');
                if(mounted)setMessage(response.data.message);
            } catch (error) {
                console.error(error);
            }
        };
        if (mounted) axiosRequestFn();
        return () => {
            mounted=false;
        };
    });
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p id="edit">
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    {message}
                </a>
            </header>
        </div>
    );
}
export default App;
