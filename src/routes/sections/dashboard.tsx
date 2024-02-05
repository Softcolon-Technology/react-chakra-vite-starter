import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import ProtectedLayout from 'src/layouts/ProtectedLayout';

import LoadingScreen from 'src/components/loading/LoadingScreen';

// ----------------------------------------------------------------------

const IndexPage = lazy(() => import('src/pages/dashboard/one'));

// ----------------------------------------------------------------------

export const dashboardRoutes = [
  {
    path: 'dashboard',
    element: (
      <ProtectedLayout>
        <Suspense fallback={<LoadingScreen />}>
          <Outlet />
        </Suspense>
      </ProtectedLayout>
    ),
    children: [
      { element: <IndexPage />, index: true },
      // { path: 'two', element: <PageTwo /> },
      // { path: 'three', element: <PageThree /> },
      // {
      //   path: 'group',
      //   children: [
      //     { element: <PageFour />, index: true },
      //     { path: 'five', element: <PageFive /> },
      //     { path: 'six', element: <PageSix /> },
      //   ],
      // },
    ],
  },
];
