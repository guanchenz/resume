import React from 'react';
import { StaticQuery, graphql } from 'gatsby';


const Projects = () => (
    <StaticQuery
        query={graphql`
            query {
                allProjectsJson {
                    edges {
                        node {
                            date
                            location
                            employer
                            title
                            tasks {
                                task
                                details
                            }
                            type
                        }
                    }
                }
            }
        `}
        render={data => (
            <div class='section'>
                <h2 class='title'>Projects</h2>
                {
                    data.allProjectsJson.edges
                        .map((edge, idx) => {
                            return (
                                <div
                                    key={`project-${idx}`}
                                    style={{
                                        marginBottom: '8px',
                                    }}
                                >
                                    <div className={'row-space-between'}>
                                        <p style={{ fontSize: 10, color: '#1565c0' }}>{edge.node.date}</p>
                                        <p style={{ fontSize: 10, color: '#1565c0' }}>{edge.node.location}</p>
                                    </div>
                                    <h4 className={'heading'}>{edge.node.employer}</h4>
                                    <h4 className={'subheading'}>{edge.node.title}</h4>
                                    {
                                        edge.node.tasks.map(({task, details}) => {
                                            return (
                                                <p key={task}>{details}</p>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                }
            </div>
        )}
    />
);

export default Projects;