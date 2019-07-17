import React from 'react';
import { SEO, Layout, Content } from '../components';

export default function() {
  return (
    <Layout>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      <Content>
        {/* <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
          <Image />
        </div> */}
        <br />
      </Content>
    </Layout>
  );
}
