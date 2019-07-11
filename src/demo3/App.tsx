import React, { Component } from 'react'

export class App extends Component {

    isUpper = true;
    state = { name: "Deepak CR" };

    toggleCase = () => {
        if (this.isUpper) {
            /* 
            this.state.name = this.state.name.toLowerCase();
            This is a direct mutation, which doesn't affect lifeCycle
            */
            this.setState({ name: this.state.name.toLowerCase() });
            /* 
            this.setState => is a React function, that can call render function.
            Here React modifies the state 
            */
        } else {
            this.setState({ name: this.state.name.toUpperCase() });
        }
        this.isUpper = !this.isUpper;
        console.log("Name: ", this.state.name)
    }
    render() {
        console.log(this);
        return (
            <div>
                <h1>Hello {this.state.name}</h1>
                <button onClick={this.toggleCase}>Toggle case</button>
            </div>
        );
    }
}

export default App
