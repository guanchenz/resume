import React from 'react';
import { StaticQuery, graphql } from 'gatsby';


const Publications = () => (
    <StaticQuery
        query={graphql`
            query {
                allPublicationsJson {
                    edges {
                        node {
                            title
                            publisher
                            year
                            type
                            link
                        }
                    }
                }
            }
        `}
        render={data => (
            <div class='section'>
            <h2 class='title'>Selected Publications</h2>
            {
                data.allPublicationsJson.edges
                    .filter(edge => {
                        return ['Journal paper', 'Dissertation'].includes(edge.node.type)
                    })
                    .slice(0, 2)
                    .map((edge, idx) => {
                        return (
                            <div
                                key={`publication-${idx}`}
                                style={{
                                    marginBottom: '8px',
                                    lineHeight: 'normal'
                                }}
                            >
                                <div className={'row-space-between'}>
                                    <p style={{ fontSize: 10, color: '#1565c0' }}>{edge.node.publisher}</p>
                                    <p style={{ fontSize: 10, color: '#1565c0' }}>{edge.node.year}</p>
                                </div>
                                <a href={edge.node.link}>
                                    {edge.node.title}
                                </a>
                            </div>
                        )
                })
            }
            </div>
        )}
    />
);

export default Publications;