import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);

  const handelLogout = () => {
    LogOut();
    if (user) {
      alert('LogOut');
    }
  };

  const Links = (
    <>
      <div className=' space-x-4 font-bold flex flex-col md:flex-row  '>
        <NavLink
          to='/'
          className={({ isActive }) =>
            `font-bold ${isActive ? 'text-blue-400' : 'hover:text-blue-600'}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to='/MyPostedJobs'
          className={({ isActive }) =>
            `font-bold ${isActive ? 'text-blue-400' : 'hover:text-blue-600'}`
          }
        >
          my posted jobs
        </NavLink>

        <NavLink
          to='/MyAddedJobs'
          className={({ isActive }) =>
            `font-bold ${isActive ? 'text-blue-400' : 'hover:text-blue-600'}`
          }
        >
          MyAddedJobs
        </NavLink>
      </div>
    </>
  );

  return (
    <div>
      <div className='navbar h-20  backdrop-filter backdrop-blur-xl bg-blue-100'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-10 w-10'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
            >
              {Links}
            </ul>
          </div>
          <div className='font-extrabold text-2xl ml-6 cursor-pointer'>
            jobBox
          </div>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{Links}</ul>
        </div>

        <div className='navbar-end space-x-2 mr-4'>
          <NavLink
            to='/Register'
            className='underline mr-6 font-bold hidden md:block '
          >
            Register
          </NavLink>
          {user && (
            <button onClick={handelLogout} className='font-bold '>
              LogOut
            </button>
          )}
          {!user && (
            <NavLink to='/SignIn'>
              <div className='py-2 px-4 bg-blue-500 rounded-lg text-white font-bold cursor-pointer '>
                Sign in
              </div>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
