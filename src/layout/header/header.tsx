import { memo } from 'react';
import Logo from '@/components/Logo/logo';
import './header.scss';

function Header() {
  return (
    <header className={'header'}>
      <Logo />
    </header>
  );
}

export default memo(Header);
