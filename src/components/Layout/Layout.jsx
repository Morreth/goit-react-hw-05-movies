import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
