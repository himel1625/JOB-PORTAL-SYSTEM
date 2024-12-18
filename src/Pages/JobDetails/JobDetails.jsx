import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/job/details/${id}`,
        );
        setJob(response.data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };
    fetchJob();
  }, [id]);

  if (!job) {
    return (
      <div className='flex justify-center items-center h-screen'>
        Loading...
      </div>
    );
  }

  return (
    <div className='flex justify-center items-center p-4 sm:p-8  '>
      <div className='max-w-4xl w-full bg-white shadow-lg rounded-lg p-6 sm:p-8'>
        {/* Company Logo */}
        <div className='flex justify-center mb-6'>
          <img
            src={job.company_logo}
            alt={job.company}
            className='w-24 h-24 sm:w-32 sm:h-32 object-contain'
          />
        </div>

        {/* Job Title and Company */}
        <h1 className='text-xl sm:text-2xl font-bold text-gray-800 mb-2 text-center'>
          {job.title}
        </h1>
        <h2 className='text-lg sm:text-xl text-gray-600 mb-4 text-center'>
          {job.company}
        </h2>

        {/* Job Details */}
        <div className='space-y-3 sm:space-y-4'>
          <p>
            <span className='font-semibold'>Location:</span> {job.location}
          </p>
          <p>
            <span className='font-semibold'>Job Type:</span> {job.jobType}
          </p>
          <p>
            <span className='font-semibold'>Category:</span> {job.category}
          </p>
          <p>
            <span className='font-semibold'>Application Deadline:</span>{' '}
            {job.applicationDeadline}
          </p>
          <p>
            <span className='font-semibold'>Salary Range:</span>{' '}
            {`${job.salaryRange.min} - ${
              job.salaryRange.max
            } ${job.salaryRange.currency.toUpperCase()}`}
          </p>
          <p>
            <span className='font-semibold'>Status:</span> {job.status}
          </p>
        </div>

        {/* Job Description */}
        <div className='mt-6'>
          <h3 className='text-lg sm:text-xl font-semibold mb-3'>
            Job Description:
          </h3>
          <p className='text-gray-700 leading-relaxed'>{job.description}</p>
        </div>

        {/* Requirements */}
        <div className='mt-6'>
          <h3 className='text-lg sm:text-xl font-semibold mb-3'>
            Requirements:
          </h3>
          <ul className='list-disc list-inside text-gray-700 space-y-1'>
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        {/* Responsibilities */}
        <div className='mt-6'>
          <h3 className='text-lg sm:text-xl font-semibold mb-3'>
            Responsibilities:
          </h3>
          <ul className='list-disc list-inside text-gray-700 space-y-1'>
            {job.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>

        {/* HR Contact */}
        <div className='mt-6'>
          <h3 className='text-lg sm:text-xl font-semibold mb-3'>HR Contact:</h3>
          <p>
            <span className='font-semibold'>Name:</span> {job.hr_name}
          </p>
          <p>
            <span className='font-semibold'>Email:</span> {job.hr_email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
