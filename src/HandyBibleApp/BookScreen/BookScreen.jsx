import React, { useState } from 'react';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  BookFilled,
  BookOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import newLogo from '../../Assets/newmowdlogo.png';
import OldTestamentBook from './OldTestamentBook';
import NewTestamentBook from './NewTestamentBook';

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedItem, setSelectedItem] = useState('1'); // Default selected item

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleMenuClick = (item) => {
    setSelectedItem(item.key);
  };

  const getContentComponent = () => {
    switch (selectedItem) {
      case '1':
        return <OldTestamentBook />;
      case '2':
        return <NewTestamentBook />;
      default:
        return null;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          selectedKeys={[selectedItem]}
          onClick={handleMenuClick}
          items={[
            {
              key: '1',
              icon: <BookFilled />,
              label: 'Old Testament',
            },
            {
              key: '2',
              icon: <BookOutlined />,
              label: 'New Testament',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <span>
            {' '}
            <img src={newLogo} style={{ width: '15%', height: '60%' }} alt="" />
            The Holy Bible
          </span>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {getContentComponent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
