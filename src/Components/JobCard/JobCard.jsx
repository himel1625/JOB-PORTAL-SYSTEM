import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="shadow-lg rounded-lg p-4 max-w-sm w-full mx-auto transition-transform transform hover:scale-105">
      <div className="flex flex-col items-center">
        <img
          src={job.company_logo}
          alt={`${job.company} logo`}
          className="w-20 h-20 rounded-full mb-4"
        />
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-2">
          {job.title}
        </h2>
        <p className="text-gray-500 text-center mb-4">{job.category}</p>
      </div>
      <div className="text-gray-700 space-y-2">
        <p>
          <span className="font-medium">Company:</span> {job.company}
        </p>
        <p>
          <span className="font-medium">Location:</span> {job.location}
        </p>
        <p>
          <span className="font-medium">Job Type:</span> {job.jobType}
        </p>
        <p className="text-gray-600">{job.description}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span
          className={`px-3 py-1 text-sm font-medium rounded-full ${
            job.status === 'active'
              ? 'bg-green-100 text-green-600'
              : 'bg-gray-100 text-gray-600'
          }`}
        >
          {job.status}
        </span>
        <a
          href={`mailto:${job.hr_email}`}
          className="text-blue-500 hover:text-blue-700 text-sm font-medium"
        >
          Contact HR
        </a>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {Array.isArray(job.requirements) && job.requirements.length > 0 ? (
          job.requirements.map((item, index) => (
            <div
              key={index}
              className={`px-3 py-1 border rounded-full shadow-sm text-gray-700 text-xs 
          ${index % 4 === 0 ? 'bg-blue-200' : ''} 
          ${index % 4 === 1 ? 'bg-green-200' : ''} 
          ${index % 4 === 2 ? 'bg-purple-200' : ''} 
          ${index % 4 === 3 ? 'bg-yellow-200' : ''}`}
            >
              {item.skill || item}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No specific requirements listed.</p>
        )}
      </div>

      <div className="mt-6">
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
};

export default JobCard;
