import React from 'react';

import Layout from '../components/layout';
import Header from '../components/header';
import Education from '../components/education';
import Skills from '../components/skills';
import Experience from '../components/experience';

import '../styles.css';

const IndexPage = () => (
  <Layout>
    <Header />
    <div className='column-default'>
      <Education />
      <Skills />
    </div>
    <Experience />
  </Layout>
)

export default IndexPage;
