import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import '../styles.css';


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
                <h3>Education</h3>
                <ul>
                    {
                        data.allEducationJson.edges.map((edge, idx) => (
                            <li key={`education-${idx}`}>
                                <div className={'column-default'}>
                                    <p style={{ fontSize: 10, color: '#1565c0' }}>{`${edge.node.yearStart} - ${edge.node.yearEnd}`}</p>
                                    <b>{edge.node.school}</b>
                                    <p>{edge.node.degree}</p>
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
