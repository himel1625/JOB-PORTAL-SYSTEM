import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Register from '../Pages/Shared/Register/Register';
import Home from '../Pages/Home/Home';
import SignIn from '../Pages/SignIn/SignIn';
import MyAddedJobs from '../Pages/Home/AddJobs/myAddedJobs';
import Private from './Private';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
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
        path: '/MyAddedJobs',
        element: (
          <Private>
            <MyAddedJobs />
          </Private>
        ),
      },
    ],
  },
]);
export default router;
