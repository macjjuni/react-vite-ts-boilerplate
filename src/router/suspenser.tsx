import {
  ReactNode,
  ReactElement,
  Suspense,
  LazyExoticComponent,
  ComponentType
} from 'react';

export default function suspenser(
  Component: LazyExoticComponent<ComponentType>, // props가 없는 Lazy로 로드한 컴포넌트 타입
  loader: ReactNode // 로딩 중 보여줄 UI
): ReactElement {
  return (
    <Suspense fallback={loader}>
      <Component />
    </Suspense>
  );
}
