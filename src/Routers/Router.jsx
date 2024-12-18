import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import MyAddedJobs from '../Pages/Home/AddJobs/myAddedJobs';
import Home from '../Pages/Home/Home';
import MyPostedJobs from '../Pages/Home/MyPostedJobs/MyPostedJobs';
import JobDetails from '../Pages/JobDetails/JobDetails';
import Register from '../Pages/Shared/Register/Register';
import SignIn from '../Pages/SignIn/SignIn';
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
      {
        path: '/MyPostedJobs',
        element: (
          <Private>
            <MyPostedJobs />
          </Private>
        ),
      },
      {
        path: '/job/details/:id',
        element: (
          <Private>
            <JobDetails />
          </Private>
        ),
      },
    ],
  },
]);
export default router;
