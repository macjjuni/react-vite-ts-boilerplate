import { createBrowserRouter, RouteObject } from 'react-router-dom';
import routes from '@/router/routes';

const router = createBrowserRouter([...routes] as RouteObject[], {
  basename: '/'
});

export default router;
