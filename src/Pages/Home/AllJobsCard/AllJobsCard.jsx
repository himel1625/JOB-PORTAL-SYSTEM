import axios from 'axios';
import React, { useEffect, useState } from 'react';
import JobCard from '../../../Components/JobCard/JobCard';

const AllJobsCard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/jobs`
        );
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="mt-20">
      <div className="container mx-auto p-4 mt-10">
        <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <img
                src="https://media.istockphoto.com/id/1452213068/photo/were-hiring-join-our-team.jpg?s=612x612&w=0&k=20&c=P0Ssuaxm5oYbCjMMArhTErKI_OUj16xL5iN3g4QCnvI="
                alt="Hiring"
                className="rounded-full w-16 h-16"
              />
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-800">
                WE ARE <span className="text-blue-600">HIRING</span>
              </h2>
              <p className="text-gray-600">
                Let’s <span className="font-medium text-gray-800">Work</span>{' '}
                Together &{' '}
                <span className="font-medium text-gray-800">Explore</span>{' '}
                Opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center text-center p-6">
        <p class="text-5xl font-extrabold">Jobs of the day</p>
        <p class="mt-2 text-lg">
          Search and connect with the right candidates faster.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-6 lg:px-8 mt-20">
        {jobs.length > 0 ? (
          jobs.map(job => <JobCard key={job._id} job={job} />)
        ) : (
          <p className="text-gray-600 text-center col-span-full">
            No jobs available
          </p>
        )}
      </div>
    </div>
  );
};

export default AllJobsCard;
