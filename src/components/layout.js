import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

// import './layout.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      const [Header, Left, Right] = children;

      return (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          
          <div
            style={{
              padding: '0.5rem',
              display: 'grid',
              gridTemplateColumns: '1fr 1.5fr',
              gridTemplateRows: 'auto auto',
              gridGap: '14px',
              // height: '100%'
            }}
          >
            <div
              style={{
                gridRow: '1/2',
                gridColumn: '1/3'
              }}
            >
              {Header}
            </div>
            
            <div
              style={{
                gridRow: '2/3',
                gridColumn: '1/2'
              }}
            >
              {Left}
            </div>

            <div
              style={{
                gridRow: '2/3',
                gridColumn: '2/3'
              }}
            >
              {Right}
            </div>
          </div>
        </>
    )}}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
