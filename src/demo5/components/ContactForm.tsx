import React, { Component, Fragment, SyntheticEvent } from 'react';

class ContactForm extends Component<any> {
    initialState = {
        name: "",
        gender: "Male",
        email: "",
        phone: "",
        city: "Bengaluru",
        picture: "/assets/images/defaultProfilePic.png"
    }
    state = this.initialState
    inputHandler = ({ target }: { target: any }) => {
        this.setState({ [target.name]: target.value })
    }

    submitHandler = (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.addContact(this.state)
        this.setState(this.initialState)
    }

    render() {
        return (
            <Fragment>
                <h3 className="text-center">Enter contact details</h3>
                <form className="form" onSubmit={this.submitHandler}>
                    <div>
                        <label htmlFor="phone">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.inputHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="text"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.inputHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input
                            id="phone"
                            name="phone"
                            type="text"
                            className="form-control"
                            value={this.state.phone}
                            onChange={this.inputHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="city">City</label>
                        <input
                            id="city"
                            name="city"
                            type="text"
                            className="form-control"
                            value={this.state.city}
                            onChange={this.inputHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="picture">Picture URL</label>
                        <input
                            id="picture"
                            name="picture"
                            type="text"
                            className="form-control"
                            value={this.state.picture}
                            onChange={this.inputHandler}
                        />
                    </div>
                    <br />
                    <button className="btn btn-primary">Save Details</button>
                </form>
            </Fragment>
        );
    }
}

export default ContactForm;