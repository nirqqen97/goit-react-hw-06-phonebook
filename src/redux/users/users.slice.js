import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistReducer} from 'redux-persist'
import {initUsersState} from "./users.init-state";

export const usersSlice = createSlice({
    
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

export const {usersSearchAction,usersDeleteAction,usersAddAction} = usersSlice.actions;

const persistConfig = {
    key: 'root',
    storage,
    whitelist : ["data"]
  }
   
  export const userReducer = persistReducer(persistConfig, usersSlice.reducer)






