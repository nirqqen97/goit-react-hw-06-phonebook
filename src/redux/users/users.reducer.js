// import { createReducer } from "@reduxjs/toolkit";
// import { usersAddAction, usersDeleteAction, usersSearchAction } from "./users.action";
// import { initUsersState } from "./users.init-state";

// export const userReducer = createReducer(initUsersState, (builder) =>{
//     builder.addCase(usersSearchAction,   (state,{payload}) =>
//     {return{...state, search: payload}})
//     .addCase(usersDeleteAction,(state, {payload}) =>{
//         return {...state, data : state.data.filter(contact => contact.id !== payload.id)}
//     }).addCase(usersAddAction,(state, {payload}) =>{
//         return {...state, data: [...state.data, payload]};
//     })
// })


// export const userReducer = (state = initUsersState,{type,payload}) =>{
//     switch (type) {
//         case "SEARCH":
//             return{...state, search: payload};
//         case "DELETE":
//             return {...state, data : state.data.filter(contact => contact.id !== payload.id) };
//             case "ADD":
//                 return {...state, data: [...state.data, payload]};
//         default:
//             return state;
//     }
// }; 