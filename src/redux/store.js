// import { userReducer } from './users/users.reducer';
import { persistStore, persistReducer,FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {configureStore, combineReducers } from "@reduxjs/toolkit";
import {initUsersState} from "./users/users.init-state";
import {userReducer} from "./users/users.slice";

const persistConfig = {
    key: 'root',
    storage,
    whitelist : ["data"]
  }
   
const initState = {
    users:initUsersState
}

const rootReducer = combineReducers({
    users: userReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    preloadedState: initState,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),});

export const persistor = persistStore(store)
