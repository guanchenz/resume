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
        <div style={{ width: '8px', lineHeight: 'normal' }} />
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
                            web {
                                name
                                link
                            }
                            email
                            github {
                                name
                                link
                            }
                            linkedin {
                                name
                                link
                            }
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
                    <h1 class='margin-bottom-large' style={{
                        marginRight: 12
                    }}>
                        {node.name}
                    </h1>
                    <h4 class='primary profile'>{node.title}</h4>
                </div>

                <div className={'row-align-start'}>
                    <div className={'column-default'}>
                        <HeaderItem>
                            <Web/>
                            <a href={node.web.link}>
                                {node.web.name}
                            </a>
                        </HeaderItem>
                        <HeaderItem>
                            <Gmail />
                            <p>{node.email}</p>
                        </HeaderItem>
                    </div>

                    <div className={'column-default'}>
                        <HeaderItem>
                            <Github />
                            <a
                                href={node.github.link}
                                style={{
                                    color: 'inherit',
                                    fontSize: 12,
                                    fontWeight: 'normal',
                                    textDecoration: 'none'
                                }}
                            >
                                {node.github.name}
                            </a>
                        </HeaderItem>
                        <HeaderItem>
                            <Cellphone />
                            <p>{node.phone}</p>
                        </HeaderItem>
                    </div>

                    <div className={'column-default'}>
                        <HeaderItem>
                            <LinkedIn />
                            <a
                                href={node.linkedin.link}
                                style={{
                                    color: 'inherit',
                                    fontSize: 12,
                                    fontWeight: 'normal',
                                    textDecoration: 'none'
                                }}
                            >
                                {node.linkedin.name}
                            </a>
                        </HeaderItem>
                    </div>
                </div>
            </div>
        )}
    />
);

export default Header;
