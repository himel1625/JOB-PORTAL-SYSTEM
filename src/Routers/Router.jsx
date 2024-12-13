import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Register from '../Pages/Shared/Register/Register';
import Home from '../Pages/Home/Home';
import SignIn from '../Pages/SignIn/SignIn';
import Banner from '../Pages/Home/Banner/Banner';

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
      {
        path: '/',
        element: <Banner />,
      },
    ],
  },
]);
export default router;
