import { memo } from 'react';
import { Link } from 'react-router-dom';

const logoTitle = import.meta.env.VITE_TITLE || 'Not Found Title';

function Logo() {
  return (
    <Link className={'logo'} to={'/'}>
      {logoTitle}
    </Link>
  );
}

export default memo(Logo);
