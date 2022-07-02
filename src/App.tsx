import React from 'react';
import GlobalStyles from './global-styles';
import {MainMenu} from "./components/MainMenu";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <GlobalStyles/>
                <MainMenu/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default App;
