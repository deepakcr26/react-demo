import React from 'react';

const ContactCard = ({ contact, deleteContact }: { contact: any, deleteContact: (id: number) => void }) => (
    <div className="card col-md-3">
        <img src={contact.picture} alt={contact.name} className="card-img-top" />
        <div className="card-body">
            <div className="card-title">
                {contact.name}
                <button
                    className="btn btn-link text-danger"
                    onClick={() => {
                        if (window.confirm("Are you Sure?")) {
                            deleteContact(contact.id);
                        }
                    }}
                >X</button>
            </div>
            <div className="card-text">{contact.email}</div>
            <div className="card-text">{contact.phone}</div>
        </div>
    </div>
);

export default ContactCard;
