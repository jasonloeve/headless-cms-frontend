import React, { Component } from 'react';
// import { Link } from "react-router-dom";

import './projects.scss';

class Projects extends Component {

    render() {

        const data = this.props.data;

        return (
            <React.Fragment>

                {data.map(project => {
                    return(
                        <div className="">
                            <img className="" src={project.thumbnail.url} alt={project.title} />
                            {project.title}
                            <div dangerouslySetInnerHTML={{ __html: project.richText.content }} />
                        </div>
                    )
                })}

            </React.Fragment>

        )
    }

}

export default Projects;
