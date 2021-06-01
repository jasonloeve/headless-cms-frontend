import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import './App.scss';

import Navigation from "./components/navigation/Navigation";
import Home from './views/home/Home';

function App() {
    return (
        <Router>

            {/* Navigation */}
            <Navigation />

            {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
            <Switch>

                {/* Portfolio Page */}
                <Route path="/portfolio">
                    Portfolio
                </Route>

                {/* Home Page */}
                <Route path="/">
                    <Home />
                </Route>

            </Switch>

        </Router>
    );
}

export default App;
