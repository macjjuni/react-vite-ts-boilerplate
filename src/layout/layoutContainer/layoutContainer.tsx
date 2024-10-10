import { Outlet } from 'react-router';
import { Header, Main, Footer } from '@/layout';
import './layoutContainer.scss';

export default function Layout() {
  return (
    <div className={'layout__container'}>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}
