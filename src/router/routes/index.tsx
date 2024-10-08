import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import suspenser from '@/router/suspenser';
import Loading from '@/components/fallbackUI/Loading';

const UserLayoutRazy = lazy(() => import('@/layout/layoutContainer'));
const HomeRazy = lazy(() => import('@/page/Home'));
const routes: RouteObject[] = [
  {
    id: 'default routes',
    path: '/',
    element: suspenser(<UserLayoutRazy />, <Loading />),
    children: [
      {
        id: 'Home',
        path: '/',
        element: suspenser(<HomeRazy />, <Loading />)
      }
    ]
  }
];

export default routes;
