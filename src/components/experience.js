import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ItemLayout from './itemLayout';


const Experience = () => (
    <StaticQuery
        query={graphql`
            query {
                allExperienceJson {
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
                        }
                    }
                }
            }
        `}
        render={data => (
            <>
            <h3>Work Experience</h3>
            {
                data.allExperienceJson.edges.map((edge, idx) => (
                    <ItemLayout
                        id={`experience-item-${idx}`}
                        node={edge.node}
                    />
                ))
            }
            </>
        )}
    />
);

export default Experience;