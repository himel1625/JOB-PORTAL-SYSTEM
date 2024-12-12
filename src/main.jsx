import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './Contexts/AuthProvider.jsx';
import './index.css';

import { HelmetProvider } from 'react-helmet-async';
import router from './Routers/Router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
