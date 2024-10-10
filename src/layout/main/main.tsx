import { ReactNode, memo } from 'react';
import './main.scss';

function Main({ children }: { children: ReactNode }) {
  return <main className={'main'}>{children}</main>;
}
export default memo(Main);
