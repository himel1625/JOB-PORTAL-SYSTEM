import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import GoogleLogo from '../../assets/Google.png';

const SignIn = () => {
  return (
    <>
      <Helmet>
        <title>Job-Portal | SignIn</title>
      </Helmet>
      <div className="flex items-center justify-center mt-10">
        <div className="border border-gray-200 shadow-md rounded-xl mx-3 w-full sm:w-11/12 md:w-2/3 lg:w-1/3">
          <div className="px-4 py-6">
            <p className="text-center font-bold text-blue-400 text-lg sm:text-xl">
              Welcome back!
            </p>
            <p className="text-center font-bold text-xl sm:text-2xl pt-2">
              Member Login
            </p>
            <p className="font-light text-center text-sm pt-2">
              Access to all features. No credit card required.
            </p>
          </div>

          <div className="hover:scale-105 transition-transform cursor-pointer px-4">
            <hr />
            <div className="flex items-center justify-center py-4">
              <img className="w-6 h-6" src={GoogleLogo} alt="Google Logo" />
              <p className="font-bold ml-2 text-sm sm:text-base">
                Sign in with Google
              </p>
            </div>
            <hr />
          </div>

          <div className="divider font-bold pt-4 px-4">Or continue with</div>

          <form>
            <div className="pt-3 px-4">
              <label
                className="font-light text-sm pb-2 block"
                htmlFor="username"
              >
                Username or Email address *
              </label>
              <input
                type="text"
                name="text"
                id="username"
                placeholder="Steven job"
                className="input input-bordered w-full"
              />
            </div>

            <div className="pt-3 px-4">
              <label
                className="font-light text-sm pb-2 block"
                htmlFor="password"
              >
                Password *
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="***********"
                className="input input-bordered w-full"
              />
            </div>
          </form>
          <div className="flex justify-between items-center mx-4 pt-6 text-sm">
            <div className="flex items-center">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-info mr-2"
              />
              <span className="font-bold">Remember me</span>
            </div>
            <p className="underline text-red-500 cursor-pointer">
              Forgot Password
            </p>
          </div>

          <div className="pt-6 px-4">
            <button className="btn bg-blue-700 w-full hover:bg-blue-900 text-white">
              Login
            </button>
          </div>

          <div className="flex items-center justify-center pt-4 pb-6">
            <p className="text-sm">Don't have an Account?</p>
            <Link to="/Register" className="underline text-sm ml-2">
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
