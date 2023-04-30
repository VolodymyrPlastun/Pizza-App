import { Outlet } from 'react-router-dom';
import Header from '../Header';
import { LayoutBox } from './Layout.styled';

const Layout = () => {
  return (
    <LayoutBox>
      <Header />
      <Outlet />
    </LayoutBox>
  );
};

export default Layout;
