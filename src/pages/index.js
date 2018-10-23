import React from 'react';

import Layout from '../components/layout';
import Education from '../components/education';

const IndexPage = () => (
  <Layout>
    <div>
      <h1 style={{ marginBottom: 8 }}>Guanchen Zhang</h1>
      <h3>Engineer | Data Scientist</h3>
    </div>
    <Education />
  </Layout>
)

export default IndexPage;
