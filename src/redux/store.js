// import { userReducer } from './users/users.reducer';
import {initUsersState} from "./users/users.init-state";
import {configureStore, combineReducers } from "@reduxjs/toolkit";
import {userReducer} from "./users/users.slice";


const initState = {
    users:initUsersState
}

const rootReducer = combineReducers({
    users: userReducer
})

export const store = configureStore({
    reducer:rootReducer,
    devTools: true,
    preloadedState: initState,})
