/*node-modules*/
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

/*global-styles*/
import GlobalStyles from './global-styles';

/*store*/
import store from './store';

/*components*/
import Layout from './components/Layout';

const App = () => {
    return (
        <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <GlobalStyles/>
                <Layout/>
            </BrowserRouter>
        </Provider>
        </React.StrictMode>
    );
}

export default App;
