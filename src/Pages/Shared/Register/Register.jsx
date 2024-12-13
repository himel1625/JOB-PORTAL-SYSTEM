import { Helmet } from 'react-helmet-async';
import GoogleLogo from '../../../assets/Google.png';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Job-Portal | Register</title>
      </Helmet>
      <div className="flex items-center justify-center min-h-screen  px-4">
        <div className="border border-gray-200 shadow-lg rounded-xl w-full sm:w-11/12 md:w-2/3 lg:w-1/3 bg-white">
          <div className="text-center px-6 py-8">
            <h1 className="text-xl sm:text-2xl font-bold text-blue-500">
              Register
            </h1>
            <p className="text-lg sm:text-xl font-semibold mt-2">
              Start for free today
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Access to all features. No credit card required.
            </p>
          </div>

          <div className="hover:scale-105 transition-transform cursor-pointer px-6">
            <hr />
            <div className="flex items-center justify-center py-4">
              <img className="w-6 h-6" src={GoogleLogo} alt="Google Logo" />
              <p className="ml-2 text-sm sm:text-base font-medium text-gray-700">
                Sign in with Google
              </p>
            </div>
            <hr />
          </div>

          <div className="text-center font-bold text-sm text-gray-400 mt-4 mb-4">
            OR
          </div>

          <form className="px-6 space-y-4">
            <div>
              <label
                className="block text-sm font-medium text-gray-600"
                htmlFor="username"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="FullName"
                placeholder="Enter your Full Name *"
                className="input input-bordered w-full focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-600"
                htmlFor="username"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                className="input input-bordered w-full focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-600"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="input input-bordered w-full focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-600"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="input input-bordered w-full focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-600"
                htmlFor="confirm-password"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Re-enter your password"
                className="input input-bordered w-full focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="flex justify-between items-center">
              <label className="flex items-center text-sm text-gray-600">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-info mr-2"
                />
                Remember me
              </label>
              <p className="text-sm text-red-500 underline cursor-pointer">
                Forgot Password?
              </p>
            </div>

            <div>
              <button className="btn btn-primary w-full bg-blue-500 hover:bg-blue-700 text-white">
                Register
              </button>
            </div>
          </form>

          <div className="text-center py-6">
            <p className="text-sm text-gray-600">
              Already have an account?
              <Link
                to="/SignIn"
                className="text-blue-500 font-semibold underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
