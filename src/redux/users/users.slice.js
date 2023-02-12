import { createSlice } from "@reduxjs/toolkit";

import {initUsersState} from "./users.init-state";

export const usersSlice = () => createSlice({
    name : 'users',
    initialState: initUsersState,
    reducers : {
        usersSearchAction: (state,{payload}) => {
            return{...state, search: payload}
            
        },
        usersDeleteAction : (state,{payload}) =>{
             return {...state, data : state.data.filter(contact => contact.id !== payload.id)}
        },
        usersAddAction : (state,{payload}) =>{
            return {...state, data: [...state.data, payload]};
        }
    }
})

export const userReducer = usersSlice.reducers;

export const {usersSearchAction,usersDeleteAction,usersAddAction} = usersSlice.actions;



