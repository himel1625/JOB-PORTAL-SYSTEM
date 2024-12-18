import axios from 'axios';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const DynamicForm = () => {
  const { user } = useContext(AuthContext);
  const handleSubmitFrom = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());
    e.target.reset();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/add-job`, formObject);
      toast.success('Job Aaded successFull ');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='p-6 bg-gray-100 min-h-screen'>
      <h1 className='text-2xl font-bold mb-4'>Dynamic Form</h1>
      <form onSubmit={handleSubmitFrom} className='space-y-4'>
        {/* Title */}
        <div>
          <label className='block font-medium'>Title</label>
          <input
            type='text'
            name='title'
            placeholder='Enter Title'
            className='w-full border border-gray-300 rounded-md p-2'
          />
        </div>

        {/* Location */}
        <div>
          <label className='block font-medium'>Location</label>
          <input
            type='text'
            name='location'
            placeholder='Enter Location'
            className='w-full border border-gray-300 rounded-md p-2'
          />
        </div>

        {/* Job Type */}
        <div>
          <label className='block font-medium'>Job Type</label>
          <select
            name='jobType'
            className='w-full border border-gray-300 rounded-md p-2'
          >
            <option value=''>Select Job Type</option>
            <option value='full-time'>Full-Time</option>
            <option value='part-time'>Part-Time</option>
            <option value='contract'>Contract</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label className='block font-medium'>Category</label>
          <input
            type='text'
            name='category'
            placeholder='Enter Category'
            className='w-full border border-gray-300 rounded-md p-2'
          />
        </div>

        {/* Application Deadline */}
        <div>
          <label className='block font-medium'>Application Deadline</label>
          <input
            type='date'
            name='applicationDeadline'
            className='w-full border border-gray-300 rounded-md p-2'
          />
        </div>

        {/* Salary Range */}
        <div>
          <label className='block font-medium'>Salary Range</label>
          <div className='flex space-x-2'>
            <input
              type='number'
              name='salaryRange.min'
              placeholder='Min Salary'
              className='w-full border border-gray-300 rounded-md p-2'
            />
            <input
              type='number'
              name='salaryRange.max'
              placeholder='Max Salary'
              className='w-full border border-gray-300 rounded-md p-2'
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className='block font-medium'>Description</label>
          <textarea
            name='description'
            placeholder='Enter Job Description'
            className='w-full border border-gray-300 rounded-md p-2'
          />
        </div>

        {/* Company */}
        <div>
          <label className='block font-medium'>Company</label>
          <input
            type='text'
            name='company'
            placeholder='Enter Company Name'
            className='w-full border border-gray-300 rounded-md p-2'
          />
        </div>

        {/* Requirements */}
        <div>
          <label className='block font-medium'>Requirements</label>
          <input
            type='text'
            name='requirements'
            placeholder='Enter Requirements (comma-separated)'
            className='w-full border border-gray-300 rounded-md p-2'
          />
        </div>

        {/* Responsibilities */}
        <div>
          <label className='block font-medium'>Responsibilities</label>
          <input
            type='text'
            name='responsibilities'
            placeholder='Enter Responsibilities (comma-separated)'
            className='w-full border border-gray-300 rounded-md p-2'
          />
        </div>

        {/* Status */}
        <div>
          <label className='block font-medium'>Status</label>
          <select
            name='status'
            className='w-full border border-gray-300 rounded-md p-2'
          >
            <option value='active'>Active</option>
            <option value='inactive'>Inactive</option>
          </select>
        </div>

        {/* HR Email */}
        <div>
          <label className='block font-medium'>HR Email</label>
          <input
            type='email'
            name='hr_email'
            placeholder='Enter HR Email'
            className='w-full border border-gray-300 rounded-md p-2'
          />
        </div>

        {/* HR Name */}
        <div>
          <label className='block font-medium'>HR Name</label>
          <input
            type='text'
            name='hr_name'
            placeholder='Enter HR Name'
            className='w-full border border-gray-300 rounded-md p-2'
          />
        </div>

        {/* Company Logo URL */}
        <div>
          <label className='block font-medium'>Company Logo URL</label>
          <input
            type='url'
            name='company_logo'
            placeholder='Enter Company Logo URL'
            className='w-full border border-gray-300 rounded-md p-2'
          />
        </div>
        <div>
          <label className='block font-medium'>user Email</label>
          <input
            type='email'
            name='user_email'
            defaultValue={user && user?.email}
            readOnly
            placeholder='Enter Company Logo URL'
            className='w-full border border-gray-300 rounded-md p-2'
          />
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='w-full bg-blue-500 text-white py-2 rounded-md'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DynamicForm;
