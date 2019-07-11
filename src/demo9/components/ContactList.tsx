import React, { Component } from 'react';
import ContactCard from './ContactCard';
import loading from './loading';
import { connect } from 'react-redux';
import { getAllContacts } from '../actions/contactActions'

class ContactList extends Component<any> {
    componentDidMount() {
        this.props.getAllContacts()
    }
    render() {
        const contactCards = this.props.contacts.map((c: any) => <ContactCard
            key={c.id}
            contact={c}
        />)
        return (
            <div className="row">
                {contactCards}
            </div>
        );
    }
}

/* 
connect -> takes 2 parameters
1. List of all required states from redux store (injected as props)
2. List of all required thunk actions (injected as props)
*/

const stateAsProps = (rootReducer: any) => ({
    contacts: rootReducer.contactsReducer,
})

const actionAsProps = {
    getAllContacts
}

export default connect(stateAsProps, actionAsProps)(ContactList);
// export default connect(stateAsProps, actionAsProps)(loading('contacts')(ContactList));