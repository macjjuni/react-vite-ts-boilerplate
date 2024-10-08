import { Outlet } from 'react-router';
import { Header, Main, Footer } from '@/layout';

export default function UserLayout() {
  return (
    <div>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}
