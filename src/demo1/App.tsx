import React from "react";

/* 
React component as a function;
Must return a HTML in XML form.
A.K.A Stateless component
*/

function App() {
    const title = "Hello, world";
    const subHeading = "Powered by React; developed by Deepak.";
    return (
        <div>
            <h1>{title.toUpperCase()}</h1>
            <hr />
            <p>{subHeading}</p>
        </div>
    )
}

export default App;
