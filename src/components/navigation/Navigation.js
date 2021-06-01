import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './Navigation.scss';

class Navigation extends Component {

    render() {
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
            </nav>
        )
    }

}

export default Navigation;