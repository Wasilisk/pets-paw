import React from 'react';
import {BrowserRouter} from "react-router-dom";
import GlobalStyles from './global-styles';
import Layout from "./components/Layout";

const App = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <GlobalStyles/>
                <Layout/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default App;
