import { initUsersState } from "./users.init-state";

export const userReducer = (state = initUsersState,{type,payload}) =>{
    switch (type) {
        case "SEARCH":
            return{...state, search: payload};
        case "DELETE":
            return {...state, data : state.data.filter(contact => contact.id !== payload.id) };
        case "ADD":
            return {...state, data : payload};
        default:
            return state;
    }
};