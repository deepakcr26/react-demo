import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

const baseUrl = 'http://localhost:4000/contacts/'

class App extends Component {
    state = { contacts: [] }

    async componentDidMount() {
        const resp = await fetch(baseUrl);
        const contacts = await resp.json();
        this.setState({ contacts })
    }

    deleteContact = async (id: number) => {
        await fetch(baseUrl + id, { method: "DELETE" })
        let contacts = [...this.state.contacts]
        const index = contacts.findIndex((c: any) => c.id === id)
        if (index !== -1) {
            contacts.splice(index, 1)
            this.setState({ contacts })
        }
    }

    addContact = async (contact: any) => {
        const resp = await fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify(contact),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const newContact = await resp.json()
        const newContacts = [newContact, ...this.state.contacts]
        this.setState({ contacts: newContacts })
    }

    render() {
        return (
            <div className="container">
                <Header />
                {/* .row>.col*2 */}
                <div className="row">
                    <div className="col-md-3">
                        <ContactForm
                            addContact={this.addContact}
                        />
                    </div>
                    <div className="col-md-9">
                        <ContactList
                            contacts={this.state.contacts}
                            deleteContact={this.deleteContact}
                        />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;