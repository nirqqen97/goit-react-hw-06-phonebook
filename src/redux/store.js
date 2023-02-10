import {createStore, combineReducers} from 'redux';
import { userReducer } from './users/users.reducer';
import {initUsersState} from "./users/users.init-state";

const initState = {
    users:initUsersState
}

const rootReducer = combineReducers({
    users: userReducer
})
const reducer = (state = 0, action) => state

export const store = createStore(rootReducer,initState)
