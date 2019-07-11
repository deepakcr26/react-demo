import React from 'react'
import AppContext from '../AppContext';
/* 
USAGE example:
export default consume("contacts")(Header)
export default consume("deleteContact", "editContact", "additionalInfo")(ContactCard)
*/

export default (...hocProps: Array<string>) => (OldComp: any) => (props: any) => (
    <AppContext.Consumer>
        {
            (store: any) => {
                let newProps = { ...props };
                hocProps.forEach(p => newProps[p] = store[p])
                return <OldComp {...newProps} />
            }
        }
    </AppContext.Consumer>
);
