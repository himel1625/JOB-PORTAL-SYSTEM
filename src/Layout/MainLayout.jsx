import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className='mx-auto max-w-[1440px] lg:mx-auto scroll-smooth font-sora md:mx-auto '>
        <div className='min-h-[calc(100vh-232px)] bg-base-100'>
          <Toaster position='top-right' reverseOrder={false} />
          <Outlet></Outlet>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
