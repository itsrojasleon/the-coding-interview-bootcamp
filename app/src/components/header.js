// import { Link } from 'gatsby';
import React from 'react';

import { Layout, Menu } from 'antd';
const { Header } = Layout;

export default function MyHeader() {
  return (
    <Header
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
        background: 'white',
      }}
      className="header"
    >
      <div className="logo" />
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
  );
}
