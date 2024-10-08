import { ReactNode, memo } from 'react';

function Main({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
export default memo(Main);
