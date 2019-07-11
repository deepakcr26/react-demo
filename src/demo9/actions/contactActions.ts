import { FETCH_CONTACTS, ADD_CONTACT, DELETE_CONTACT } from "./types";

const baseUrl = 'http://localhost:4000/contacts/';

/*
A thunk action is a function that returns another function that
receievs 'dispatch' from redux, which can used to dispatch an action
*/

function getAllContacts1() {
    return function (dispatch: any) {
        let data: any = []
        dispatch({ type: FETCH_CONTACTS, contacts: data })
    }
}

export const getAllContacts = () => async (dispatch: any) => {
    let resp = await fetch(baseUrl);
    let contacts = await resp.json();
    dispatch({ type: FETCH_CONTACTS, contacts })
}

export const addContact = (contact: any) => async (dispatch: any) => {
    const reqOpts = {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' }
    };
    let resp = await fetch(baseUrl, reqOpts);
    let data = await resp.json();
    dispatch({ type: ADD_CONTACT, contact: data })
}

export const deleteContact = (id: number) => async (dispatch: any) => {
    await fetch(baseUrl + id, { method: 'DELETE' });
    dispatch({ type: DELETE_CONTACT, id })
}
