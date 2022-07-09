/*node-modules*/
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

/*store*/
import {RootState} from '../index';

/*models*/
import {Action} from '../../models/common';

interface LogState {
    userActions: Action[]
}

const initialState: LogState = {
    userActions: []
}

export const logsSlice = createSlice({
    name: 'logs',
    initialState,
    reducers: {
        addActionLog: {
            reducer: (state, action: PayloadAction<Action>) => {
                state.userActions.push(action.payload)
            },
            prepare: (payload: Omit<Action, "created_at" | "id">) => {
                return {
                    payload: {
                        ...payload,
                        id: uuidv4(),
                        created_at: new Date(Date.now()).toUTCString()
                    },
                }
            }
        },
    },
});

export const {addActionLog} = logsSlice.actions;

export const selectActionLogs = (state: RootState) => [...state.action_logs.userActions].reverse();

export default logsSlice.reducer;