import React, { Component } from 'react';

import './hero.scss';

class Hero extends Component {

    render() {

        const data = this.props.data;

        return (
            <section className="hero" style={{ backgroundImage: `url(${data.background})` }}>
                {data.heading}
                {data.text}
            </section>
        )
    }

}

export default Hero;