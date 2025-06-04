import { Outlet } from 'react-router';
import Header from './Header';

function Layout() {
  return (
    <>
      <Header />
      <main className="pt-[74px]">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
