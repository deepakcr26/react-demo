import { FETCH_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from "../actions/types";

/*
Reducer is invoked by REDUX,
whenever an action is dispatched and passes 
current state in the store and action itself as arguments
State can be an array or an object
*/

/* 
Based on the action.type, the reducer is supposed to return the 
new (modified) state to the store
*/
export default (currentState: any = [], action: any) => {
    switch (action.type) {
        case FETCH_CONTACTS:
            action.contacts.sort((a: any, b: any) => b.id - a.id)
            return [...action.contacts];
        case DELETE_CONTACT:
            let data = [...currentState]
            const index = data.findIndex(d => d.id === action.id)
            data.splice(index, 1);
            return data;
        case ADD_CONTACT:
            return [action.contact, ...currentState];
        default:
            return currentState;
    }
}