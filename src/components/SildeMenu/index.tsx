import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { HomeOutlined, ManOutlined, MessageOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import './index.less'
const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem(<Link to="home">首页</Link>, '/home', <HomeOutlined />),
  getItem(<Link to="orderList">订单管理</Link>, '/orderList', <ManOutlined />),
  getItem(<Link to="other">待定</Link>, '/other', <MessageOutlined />),
];



const SildeMenu: React.FC = () => {
  const location = useLocation();
  const [path, setPath] = useState('home')
  useEffect(() => {
    setPath(location.pathname)
    
  }, [location])
  const onClick: MenuProps['onClick'] = ({ key }) => {
    // console.log(`/${key}`);
  };
  return (
    <div className='wrapper'>
      <Sider className='siderStyle'>
        <Menu
          onClick={onClick}
          selectedKeys={[path]}
          mode="inline"
          items={items}
        />
      </Sider>
    </div>
  )
};

export default SildeMenu;