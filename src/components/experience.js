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
                                hidden
                            }
                        }
                    }
                }
            }
        `}
        render={data => (
            <>
            <h2 class='title'>Work Experience</h2>
            {
                data.allExperienceJson.edges.map((edge, idx) => (
                    <ItemLayout
                        key={`experience-item-${idx}`}
                        node={edge.node}
                    />
                ))
            }
            </>
        )}
    />
);

export default Experience;