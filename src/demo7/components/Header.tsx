import React from 'react'
import AppContext from '../AppContext';

const Header = () => (
    <AppContext.Consumer>
        {
            (context: any) => (
                <div>
                    <h1 className="alert alert-info">AddressBook App - V1.0</h1>
                    <hr />
                    <p>Powered by React. There are {context.contacts.length} contacts in your AddressBook</p>
                </div>
            )
        }
    </AppContext.Consumer>
);

export default Header;