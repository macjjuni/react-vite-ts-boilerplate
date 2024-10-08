import { memo } from 'react';
import Logo from '@/components/Logo';

function Header() {
  return (
    <header>
      <Logo />
    </header>
  );
}

export default memo(Header);
