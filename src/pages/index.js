import React from 'react';

import Layout from '../components/layout';
import Header from '../components/header';
import Education from '../components/education';

import '../styles.css';

const IndexPage = () => (
  <Layout>
    <Header />
    <Education />
    <h3>Experience</h3>
  </Layout>
)

export default IndexPage;
