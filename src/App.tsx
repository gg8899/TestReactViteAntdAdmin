import React from 'react';
import { Outlet } from "react-router-dom";
import { Layout } from 'antd';
import SildeMenu from '@/components/SildeMenu/index.tsx'

const { Content } = Layout;
import './App.less'

const App: React.FC = () => (
  <div className="wrapper">
    <Layout>
      <SildeMenu />
      <Layout>
        <Content >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  </div>
);

export default App;