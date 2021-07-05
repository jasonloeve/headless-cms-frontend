import React, { Component } from 'react';
// import { Link } from "react-router-dom";

import './navigation.scss';

class Navigation extends Component {

    render() {
        return (
            <nav>
                <div className="brand">
                    Logo
                </div>
                {/*<Link to="/">Home</Link>*/}
                {/*<Link to="/projects">Projects</Link>*/}
            </nav>
        )
    }

}

export default Navigation;