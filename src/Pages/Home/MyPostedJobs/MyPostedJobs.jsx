import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyPostedJobs = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/jobs/${user?.email}`,
        );
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
    fetchJobs();
  }, [user?.email]);
  console.log(jobs);
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>My Posted Jobs</h1>
      {jobs.length > 0 ? (
        <div className='overflow-x-auto'>
          <table className='table-auto border-collapse border border-gray-300 w-full text-sm'>
            <thead>
              <tr className='bg-gray-200'>
                <th className='border border-gray-300 px-4 py-2'>#</th>
                <th className='border border-gray-300 px-4 py-2'>company</th>
                <th className='border border-gray-300 px-4 py-2'>Job Title</th>
                <th className='border border-gray-300 px-4 py-2'>Company</th>
                <th className='border border-gray-300 px-4 py-2'>Posted On</th>
                <th className='border border-gray-300 px-4 py-2'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr key={job._id} className='hover:bg-gray-100'>
                  <td className='border border-gray-300 px-4 py-2'>
                    {index + 1}
                  </td>
                  <td className='border border-gray-300 px-4 py-2'>
                    <img src={job.company_logo} />
                  </td>
                  <td className='border border-gray-300 px-4 py-2'>
                    {job.title}
                  </td>

                  <td className='border border-gray-300 px-4 py-2'>
                    {job.company}
                  </td>
                  <td className='border border-gray-300 px-4 py-2'>
                    {new Date(job.postedOn).toLocaleDateString()}
                  </td>
                  <td className='border border-gray-300 px-4 py-2 text-center'>
                    <button className='bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600'>
                      Edit
                    </button>
                    <button className='bg-red-500 text-white px-3 py-1 rounded ml-2 hover:bg-red-600'>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className='text-gray-500'>No jobs posted yet.</p>
      )}
    </div>
  );
};

export default MyPostedJobs;