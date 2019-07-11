import React from 'react'
import { connect } from 'react-redux';

const Header = ({ contacts }: { contacts?: any }) => (
    <div>
        <h1 className="alert alert-info">AddressBook App - V1.0</h1>
        <hr />
        <p>Powered by React. There are {contacts.length} contacts in your AddressBook</p>
    </div>
);

const stateAsProps = (rootReducer: any) => ({
    contacts: rootReducer.contactsReducer
})

export default connect(stateAsProps)(Header);