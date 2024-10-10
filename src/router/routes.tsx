import { lazy } from 'react';
import Layout from '@/layout/layoutContainer/layoutContainer';
import suspenser from '@/router/suspenser';
import Loading from '@/components/fallbackUI/Loading';
import ErrorPage from '@/page/Error/error';
import NotFoundPage from '@/page/Error/notFound';

const HomeLazy = suspenser(
  lazy(() => import('@/page/Home')),
  <Loading />
);
const AboutLazy = suspenser(
  lazy(() => import('@/page/About')),
  <Loading />
);

const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: HomeLazy },
      { path: 'about', element: AboutLazy }
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
];

export default routes;
