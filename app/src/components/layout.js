import { Layout } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';

const MyLayout = ({ children }) => {
  return (
    <Layout>
      <Header />
      {children}
    </Layout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyLayout;
