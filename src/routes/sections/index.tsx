import { Navigate, useRoutes } from 'react-router-dom';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import { paths } from '../paths';
import { mainRoutes } from './main';
import { authRoutes } from './auth';
import { dashboardRoutes } from './dashboard';

// ----------------------------------------------------------------------

export default function Router() {
  useScrollToTop();

  return useRoutes([
    {
      path: '/',
      element: <Navigate to={paths.dashboard.root} replace />,
    },

    // Auth routes
    ...authRoutes,

    // Dashboard routes
    ...dashboardRoutes,

    // Main routes
    ...mainRoutes,

    // No match 404
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
