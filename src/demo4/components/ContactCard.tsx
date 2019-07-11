import React, { Component } from 'react';

class ContactCard extends Component<any> {
    render() {
        const { contact, deleteContact } = this.props
        console.log(this.props)
        // .card>(img.card-img-top+(.card-body>.card-title))
        return (
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
    }
}

export default ContactCard;
