import {
  LogoutOutlined,
  ProfileOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Dropdown, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
const items = [
  {
    key: '/profile',
    label: 'My Profile',
    icon: <ProfileOutlined />,
  },
  {
    type: 'divider',
  },
  {
    key: '/setting',
    label: 'Settings',
    icon: <SettingOutlined />,
  },
  {
    key: '/logout',
    label: 'Logout',
    icon: <LogoutOutlined />,
  },
];

const Auth = () => {
  const navigate = useNavigate();

  const onClick = (e) => {
    if (e.key === '/logout') {
      console.log('logging out');
      navigate('/login');
    }
    else {
      navigate(e.key);
    }
  }

  return (
    <Dropdown
      menu={{
        items,
        onClick: onClick,
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <Avatar
            shape="square"
            size="large"
            icon={<UserOutlined />}
            style={{ marginRight: '15px' }}
          />
        </Space>
      </a>
    </Dropdown>
  );
};

export default Auth;
