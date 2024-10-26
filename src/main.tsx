import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { RecoilRoot } from 'recoil';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home.tsx';
import NotFound from './components/notFound.tsx';
import { ThemeProvider } from './components/themeProvider.tsx';
import Dashboard from './components/dashboard.tsx';
import Sidebar from './components/sidebar.tsx';
import { Layout } from 'lucide-react';
import DashboardLayout from './components/layout.tsx';

// Define the routes for the application
const router = createBrowserRouter([
  {
    path: '/home',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/home/:page",
        element: <Sidebar />
      }
    ]
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/dashboard',
    element: (
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    ),
  },
]);

// Render the application
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </ThemeProvider>
  </StrictMode>
);
