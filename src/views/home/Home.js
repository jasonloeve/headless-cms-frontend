import axios from 'axios';
import React, { Component } from 'react';

import './Home.scss';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: false
        }
    }

    // Get data from Craft CMS

    getData(){
        const query = `{ping}`;
        const content = { query: query };
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

        // Dev only, checking data is fetched

        console.log('data',data);

        return (
            <main>
                {data && (
                    <React.Fragment>
                        {data.ping}
                    </React.Fragment>
                )}
            </main>
        )
    }

    // Function to be last

    componentDidMount(){
        this.getData();
    }

}

export default Home;
