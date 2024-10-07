/* eslint-disable react/prop-types */
import {
  DatabaseOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
const { Sider } = Layout;

const Sidebar = ({ collapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const onClick = (e) => {
    navigate(e.key);
  }

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
        onClick={onClick}
        items={[
          {
            key: '/',
            icon: <DatabaseOutlined />,
            label: 'Dashbaord',
          },
          {
            key: '/user',
            icon: <UserOutlined />,
            label: 'User',
          },
        ]}
      />
    </Sider>
  );
};

export default Sidebar;
