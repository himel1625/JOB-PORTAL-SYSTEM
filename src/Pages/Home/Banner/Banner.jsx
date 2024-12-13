import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../../../assets/img1.jpg';
import img2 from '../../../assets/img2.jpg';

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between md:mx-36 ">
        <div className="text-center py-8 px-4">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-800 w-full md:w-[390px]">
            The <span className="text-blue-400">Easiest Way</span> to Get Your
            New Job
          </h3>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto font-bold">
            Each month, more than 3 million job seekers turn to the website in
            their search for work, making over 140,000 applications every single
            day
          </p>

          <div className="flex flex-col md:flex-row items-center p-2 rounded-lg border border-gray-300 focus-within:ring-2 focus-within:ring-blue-400 mt-6 md:mt-10">
            <select className="select w-full md:w-32 bg-white outline-none border-none focus:border-none focus:outline-none mb-2 md:mb-0 md:mr-2">
              <option value="Industry">Industry</option>
              <option value="Software">Software</option>
              <option value="Finance">Finance</option>
              <option value="Recruting">Recruting</option>
              <option value="Managment">Managment</option>
              <option value="Advertising">Advertising</option>
              <option value="Devlopment">Devlopment</option>
            </select>
            <input
              type="text"
              placeholder="Search here....."
              className="input w-full md:flex-1 max-w-xs px-2 outline-none border-none focus:border-none focus:outline-none mb-2 md:mb-0 md:mr-2"
            />
            <button className="btn bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg md:rounded-r-lg">
              Search
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center ">
          <motion.img
            src={img1}
            animate={{ y: [50, 100, 50] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="w-36 md:w-80 mb-6 md:mb-0 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl"
          />
          <motion.img
            src={img2}
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 10, delay: 5, repeat: Infinity }}
            className="w-36 md:w-80 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl"
          />
        </div>
      </div>
      <div className="mx-4 sm:mx-8 pt-6 md:mx-12 flex flex-wrap gap-2 cursor-pointer">
        <h1 className="font-bold">Popular Searches:</h1>
        <p className="underline">Designer</p>
        <p className="underline">Web,</p>
        <p className="underline">IOS,</p>
        <p className="underline">Developer,</p>
        <p className="underline">PHP</p>
        <p className="underline">Senior</p>
        <p className="underline">Engineer,</p>
      </div>
    </div>
  );
};

export default Banner;
