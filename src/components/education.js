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
                            achievement
                            location
                        }
                    }
                }
            }
        `}
        render={data => (
            <div class='section'>
                <h2 class='title'>Education</h2>
                {
                    data.allEducationJson.edges.map((edge, idx) => (
                            <div
                                className={'column-default'}
                                key={`education-${idx}`}
                                style={{ marginBottom: '8px' }}
                            >
                                <p style={{ fontSize: 10, color: '#1565c0' }}>{`${edge.node.yearStart} - ${edge.node.yearEnd}`}</p>
                                <h4 class='heading'>{edge.node.school}</h4>
                                <b>{edge.node.degree}</b>
                                <p>{edge.node.achievement}</p>
                            </div>
                    ))
                }
            </div>
        )}
    />
);

export default Education;
