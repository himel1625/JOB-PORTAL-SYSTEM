import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Register from '../Pages/Shared/Register/Register';
import Home from '../Pages/Home/Home';
import SignIn from '../Pages/SignIn/SignIn';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/Home',
        element: <Home />,
      },
      {
        path: '/Register',
        element: <Register />,
      },
      {
        path: '/SignIn',
        element: <SignIn />,
      },
    ],
  },
]);
export default router;
