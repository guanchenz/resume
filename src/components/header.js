import React from 'react';
import { StaticQuery, graphql } from 'gatsby';


const Header = () => (
    <StaticQuery
        query={graphql`
            query {
                allHeaderItemsJson {
                    edges {
                        node {
                            name
                            title
                            web
                            email
                            github
                            linkedin
                            phone
                        }
                    }
                }
            }
        `}
        render={({ allHeaderItemsJson: {
            edges: [{ node }] 
        }}) => (
            <div className={'row-space-between'}>
                <div className={'column-default'}>
                    <h2 style={{
                        marginRight: 12
                    }}>
                        {node.name}
                    </h2>
                    <h4>{node.title}</h4>
                </div>

                <div className={'column-default'}>
                    <div>
                        <p>{node.web}</p>
                    </div>

                    <div className={'row-default'}>
                        <div
                            className={'column-default'}
                            style={{ marginRight: 24 }}
                        >
                            <p>{node.github}</p>
                            <p>{node.linkedin}</p>
                        </div>
                        <div className={'column-default'}>
                            <p>{node.email}</p>
                            <p>{node.phone}</p>
                        </div>
                    </div>
                </div>
            </div>
        )}
    />
);

export default Header;
