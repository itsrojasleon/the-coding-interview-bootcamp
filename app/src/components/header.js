import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Layout, Menu } from 'antd';
import { Nav, Logo } from '../styles/components';

const { Header } = Layout;

const TitleAndDescription = ({ data }) => {
  const title = data.site.siteMetadata.title;
  const description = data.site.siteMetadata.description;

  return (
    <Header
      className="header"
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
        background: 'white',
      }}
    >
      <Nav>
        <Logo to="/">{title}</Logo>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">Nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Nav>
    </Header>
  );
};

const MyHeader = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => <TitleAndDescription data={data} />}
    />
  );
};

export default MyHeader;
