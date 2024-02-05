import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import GuestLayout from 'src/layouts/GuestLayout';

// ----------------------------------------------------------------------

// JWT
const JwtLoginPage = lazy(() => import('src/pages/auth/login'));

// ----------------------------------------------------------------------

export const authRoutes = [
  {
    element: (
      <GuestLayout>
        <Suspense fallback={<div>Loading ...</div>}>
          <Outlet />
        </Suspense>
      </GuestLayout>
    ),
    children: [
      {
        path: 'login',
        element: <JwtLoginPage />,
      },
      {
        path: 'forgot-password',
        element: <JwtLoginPage />,
      },
      {
        path: 'reset-password/:token',
        element: <JwtLoginPage />,
      },
      {
        path: 'set-password/:token',
        element: <JwtLoginPage />,
      },
    ],
  },
];
