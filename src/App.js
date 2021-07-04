import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import './app.scss';

import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer'
import Home from './views/home/Home';

function App() {
    return (
        <Router>

            {/* Navigation */}
            <Navigation />

            {/*Views / Pages*/}
            <Switch>

                {/*Router has been left in code for future use when setting up a projects page*/}
                {/* Projects Pages */}
                {/*<Route path="/projects">*/}
                {/*    Projects*/}
                {/*</Route>*/}

                {/* Home Page */}
                <Route path="/">
                    <Home />
                </Route>

            </Switch>

            {/*Footer*/}
            <Footer />

        </Router>
    );
}

export default App;
