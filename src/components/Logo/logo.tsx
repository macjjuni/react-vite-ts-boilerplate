import { memo } from 'react';
import { Link } from 'react-router-dom';
import logoCss from '@/components/Logo/logo.css';

const logoTitle = import.meta.env.VITE_TITLE || 'Not Found Title';

function Logo() {
  return (
    <Link className={logoCss.wrapper} to={'/'}>
      {logoTitle}
    </Link>
  );
}

export default memo(Logo);
