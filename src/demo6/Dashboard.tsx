import React from 'react'
import applyStyles from './applyStyles';

const Dashboard = () => (
    <h3>This is the Main Content area</h3>
);

export default applyStyles({ fontStyle: "italic" })(Dashboard)