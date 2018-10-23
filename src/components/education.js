import React from 'react';
import { StaticQuery, graphql } from 'gatsby';


const Education = () => (
    <StaticQuery
        query={graphql`
            query {
                allEducationJson {
                    edges {
                        node {
                            school
                            yearStart
                            yearEnd
                            degree
                            location
                        }
                    }
                }
            }
        `}
        render={data => (
            <div>
                <h2>Education</h2>
                <ul>
                    {
                        data.allEducationJson.edges.map((edge, idx) => (
                            <li key={`education-${idx}`}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <b>{edge.node.school}</b>
                                        <p>{edge.node.degree}</p>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <b>{edge.node.location}</b>
                                        <p>{`${edge.node.yearStart}-${edge.node.yearEnd}`}</p>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )}
    />
);

export default Education;
