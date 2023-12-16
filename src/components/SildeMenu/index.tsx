import React from 'react';
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
  getItem('首页', 'home', <HomeOutlined />),
  getItem('订单管理', 'orderList', <ManOutlined />),
  getItem('待定', 'other', <MessageOutlined />),
];



const SildeMenu: React.FC = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', location,e);
  };
  return (
    <div className='wrapper'>
      <Sider className='siderStyle'>
        <Menu
          onClick={onClick}
          defaultSelectedKeys={['home']}
          mode="inline"
          items={items}
        />
      </Sider>
    </div>
  )
};

export default SildeMenu;