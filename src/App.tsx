/*node-modules*/
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";
import { persistStore } from 'redux-persist';

/*global-styles*/
import GlobalStyles from './global-styles';

/*store*/
import store from './store';

/*components*/
import {Layout} from './components/Common';

const persistedStore= persistStore(store);


const App = () => {
    return (
        /*<React.StrictMode>*/
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistedStore}>
            <BrowserRouter>
                <GlobalStyles/>
                <Layout/>
            </BrowserRouter>
            </PersistGate>
        </Provider>
        /*</React.StrictMode>*/
    );
}

export default App;
