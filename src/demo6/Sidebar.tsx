import React from 'react'
import applyStyles from './applyStyles';

const Sidebar = () => (
    /* div>ul.list-group>li.list-group-item{Menu item $}*5 */
    <div>
        <h1 className="text-center">Main Menu</h1>
        <ul className="list-group">
            <li className="list-group-item">Menu item 1</li>
            <li className="list-group-item">Menu item 2</li>
            <li className="list-group-item">Menu item 3</li>
            <li className="list-group-item">Menu item 4</li>
            <li className="list-group-item">Menu item 5</li>
        </ul>
    </div>
);

const styles = {
    backgroundColor: "blue",
    colr: "red !important"
}

export default applyStyles(styles)(Sidebar)