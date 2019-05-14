import React from 'react';
import { StaticQuery, graphql } from 'gatsby';


const Skills = () => (
    <StaticQuery
        query={graphql`
            query {
                allSkillsJson {
                    edges {
                        node {
                            category
                            items
                        }
                    }
                }
            }
        `}
        render={data => (
            <div class='section'>
            <h2 class='title'>Skills</h2>
            {
                data.allSkillsJson.edges.map((edge, idx) => {
                    return (
                        <div
                            className='column-default'
                            key={`skill-${idx}`}
                            style={{ marginBottom: '8px' }}
                        >
                            <b>{edge.node.category}</b>
                            <p>{edge.node.items.join(', ')}</p>
                        </div>
                    )
                })
            }
            </div>
        )}
    />
);

export default Skills;