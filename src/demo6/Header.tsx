import React from 'react'
import applyStyles from './applyStyles';

/* In the future, when decorators will be introduced, this is how HOCs look like:
@applyStyles({ backgroundColor: "blue"})
*/
const Header = ({ title }: { title: string }) => (
    <div>
        <h1>{title}</h1>
        <hr />
        <p>Powered by React</p>
    </div>
);

export default applyStyles({ backgroundColor: "blue" })(Header)