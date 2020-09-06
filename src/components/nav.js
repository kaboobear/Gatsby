import React from 'react';
import {Link} from 'gatsby';

const Navigation = () => (
    <ul className="navigation-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
    </ul>
)

export default Navigation;