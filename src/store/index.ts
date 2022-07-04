/*node-modules*/
import { configureStore } from '@reduxjs/toolkit';

/*store*/
import votingReducer from './slices/voting-slice';
import logsReducer from './slices/logs-slice';

const store = configureStore({
    reducer: {
        voting: votingReducer,
        action_logs: logsReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;