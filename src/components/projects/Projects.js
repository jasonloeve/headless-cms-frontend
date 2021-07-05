import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import purify from 'dompurify';

import './projects.scss';

class Projects extends Component {

    render() {

        const data = this.props.data;

        return (
            <React.Fragment>

                {data.map((project, index) => {
                    return(
                        <div className="" key={index}>
                            <img className="" src={project.thumbnail.url} alt={project.title} />
                            {project.title}
                            <div dangerouslySetInnerHTML={{__html:purify.sanitize(project.richText.content) }} />
                        </div>
                    )
                })}

            </React.Fragment>

        )
    }

}

export default Projects;
