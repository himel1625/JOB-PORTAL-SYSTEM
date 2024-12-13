import React from 'react';
import logo1 from '../.././../assets/marketing.png';
import logo2 from '../.././../assets/behaviorally.png';
import logo3 from '../.././../assets/Finance.png';
import logo4 from '../.././../assets/software.png';
import logo5 from '../.././../assets/human.png';

const Hero = () => {
  return (
    <div className="mt-20 px-4">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Browse by Category</h1>
        <p className="text-gray-600 mt-2">
          Find the job that’s perfect for you. About 800+ new jobs every day
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        <div className="border p-4 rounded-lg shadow hover:shadow-md transition">
          <img className="mx-auto mb-4" src={logo1} alt="Marketing" />
          <p className="font-semibold text-center">Marketing & Sale</p>
          <p className="text-sm text-gray-500 text-center">
            1526 Jobs available
          </p>
        </div>
        <div className="border p-4 rounded-lg shadow hover:shadow-md transition">
          <img className="mx-auto mb-4" src={logo2} alt="Customer Help" />
          <p className="font-semibold text-center">Customer Help</p>
          <p className="text-sm text-gray-500 text-center">
            185 Jobs available
          </p>
        </div>
        <div className="border p-4 rounded-lg shadow hover:shadow-md transition">
          <img className="mx-auto mb-4" src={logo3} alt="Finance" />
          <p className="font-semibold text-center">Finance</p>
          <p className="text-sm text-gray-500 text-center">
            169 Jobs available
          </p>
        </div>
        <div className="border p-4 rounded-lg shadow hover:shadow-md transition">
          <img className="mx-auto mb-4" src={logo4} alt="Software" />
          <p className="font-semibold text-center">Software</p>
          <p className="text-sm text-gray-500 text-center">
            1859 Jobs available
          </p>
        </div>
        <div className="border p-4 rounded-lg shadow hover:shadow-md transition">
          <img className="mx-auto mb-4" src={logo5} alt="Human Resource" />
          <p className="font-semibold text-center">Human Resource</p>
          <p className="text-sm text-gray-500 text-center">
            165 Jobs available
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
