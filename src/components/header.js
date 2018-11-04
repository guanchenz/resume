import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Web from '../../assets/web.svg';
import Github from '../../assets/github-circle.svg';
import LinkedIn from '../../assets/linkedin-box.svg';
import Gmail from '../../assets/gmail.svg';
import Cellphone from '../../assets/cellphone.svg';

const HeaderItem = ({ children }) => (
    <div className={'row-default'}>
        {children[0]}
        <div style={{ width: '8px' }} />
        {children[1]}
        <div style={{ width: '8px' }} />
    </div>
);

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

                <div className={'row-align-start'}>
                    <div className={'column-default'}>
                        <HeaderItem>
                            <Web/>
                            <p>{node.web}</p>
                        </HeaderItem>
                        <HeaderItem>
                            <Gmail />
                            <p>{node.email}</p>
                        </HeaderItem>
                    </div>

                    <div className={'column-default'}>
                        <HeaderItem>
                            <Github />
                            <p>{node.github}</p>
                        </HeaderItem>
                        <HeaderItem>
                            <Cellphone />
                            <p>{node.phone}</p>
                        </HeaderItem>
                    </div>

                    <div className={'column-default'}>
                        <HeaderItem>
                            <LinkedIn />
                            <p>{node.linkedin}</p>
                        </HeaderItem>
                    </div>
                </div>
            </div>
        )}
    />
);

export default Header;
