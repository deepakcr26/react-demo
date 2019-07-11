import React, { Component } from "react";

export class App extends Component {
    /* Member Variable */
    title: string;
    subHeading: string;

    constructor(props: any) {
        super(props);
        this.title = "Hello, World!";
        this.subHeading = "Powered by React; Developed by Deepak."
    }
    /* A Class based component must define a function called render,
    that must return a JSX representing it's UI */
    render() {
        return (
            /* div>h2{Hello, World}+hr+p{Powered by React} */
            <div>
                <h2>{this.title}</h2>
                <hr />
                <p>{this.subHeading}</p>
            </div>
        )
    }
}

export default App
