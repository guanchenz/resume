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
                        }
                    }
                }
            }
        `}
        render={data => (
            <>
            <h3>Selected Publications</h3>
            {
                data.allPublicationsJson.edges
                    .filter(edge => {
                        return ['journal', 'thesis'].includes(edge.node.type)
                    })
                    .slice(0,3)
                    .map((edge, idx) => {
                        return (
                            <div
                                key={`publication-${idx}`}
                                style={{
                                    marginBottom: '8px',
                                }}
                            >
                                <div className={'row-space-between'}>
                                    <p style={{ fontSize: 10, color: '#1565c0' }}>{edge.node.publisher}</p>
                                    <p style={{ fontSize: 10, color: '#1565c0' }}>{edge.node.year}</p>
                                </div>
                                <p>{edge.node.title}</p>
                            </div>
                        )
                })
            }
            </>
        )}
    />
);

export default Publications;