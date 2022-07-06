/*node-modules*/
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

/*store*/
import votingReducer from './slices/voting-slice';
import logsReducer from './slices/logs-slice';
import breedsReducer from './slices/breeds-slice';

const reducers = combineReducers({
    voting: votingReducer,
    action_logs: logsReducer,
    breeds: breedsReducer
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['breeds', 'action_logs']
};

const persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;