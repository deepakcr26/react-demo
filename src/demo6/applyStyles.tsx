import React, { Component } from 'react';

/* applyStyles is not a HOC by itself, but it returns a HOC */
export function applyStyles_1(customStyles?: any) {
    return function hoc(OldComponent: any) {
        return class NewComponent extends Component<any> {
            render() {

                const defaultStyles = {
                    ...customStyles,
                    border: '1px solid gray',
                    padding: '50px'
                }
                return <div style={defaultStyles}>
                    <OldComponent {...this.props} />
                </div>
            }
        }
    }
}

const applyStyles = (customStyles?: any) => (OldComponent: any) => (props: any) => {

    const defaultStyles = {
        ...customStyles,
        border: '1px solid gray',
        padding: '50px'
    }
    return <div style={defaultStyles}>
        <OldComponent {...props} />
    </div>
}

/* 
let someHOC = (hocProps) => (OldComp) => NewComp;
let someHOC = (hocProps) => (OldComp) => (props) => JSX;
*/

export default applyStyles;