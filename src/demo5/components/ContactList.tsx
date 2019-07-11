import React from 'react';
import ContactCard from './ContactCard';
import loading from './loading';

const ContactList = ({ contacts, deleteContact }: { contacts: any, deleteContact: (id: number) => void }) => {
    const contactCards = contacts.map((c: any) => <ContactCard
        key={c.id}
        contact={c}
        deleteContact={deleteContact}
    />)
    return (
        <div className="row">
            {contactCards}
        </div>
    );
}

export default loading('contacts')(ContactList);