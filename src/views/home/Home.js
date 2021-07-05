import axios from 'axios';
import React, { Component } from 'react';

import Hero from '../../components/hero/Hero';
import Projects from '../../components/projects/Projects';

import { GET_HOME_QUERY } from '../../graphql/Home';

import './home.scss';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: false
        }
    }

    // Get data from Craft CMS
    getData(){
        const content = { query: GET_HOME_QUERY }; // Detached query in graphql directory
        const headers = {
            'Authorization': 'Bearer ' + process.env.REACT_APP_API_KEY,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        axios.post(process.env.REACT_APP_API_URL, content, { headers })
            .then(response => this.setState({ data: response.data.data }))
            .catch(error => {
                this.setState({ errorMessage: error.message });
                console.error('There was an error!', error);
            });
    }

    render() {

        const data = this.state.data;

        // Dev - Data check
        console.log('data',data);

        return (
            <React.Fragment>

                {data && (
                    <React.Fragment>

                        {/*Hero Component*/}
                        <Hero data={{ background: data.hero[0].backgroundImage, heading: data.hero[0].heading, text: data.hero[0].shortDescription }} />

                        {/*Projects Component - TODO: detach iteration to make more global*/}
                        <Projects data={data.projects} />

                    </React.Fragment>
                )}

            </React.Fragment>
        )
    }

    componentDidMount(){
        this.getData();
    }

}

export default Home;
