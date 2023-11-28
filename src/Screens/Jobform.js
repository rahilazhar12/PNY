import React from 'react';

const JobForm = () => {
  return (
    <div className="w-[700px] mx-auto bg-[#3894FF] p-6 rounded-lg">
      <form className="flex flex-col">
        <label htmlFor="firstName" className="font-bold mt-2">First Name:</label>
        <input type="text" id="firstName" name="firstName" placeholder="Full Name" className="mt-1 p-2 border-2 border-gray-200 rounded-md" />
        
        <label htmlFor="email" className="font-bold mt-2">Email:</label>
        <input type="email" id="email" name="email" placeholder="email" className="mt-1 p-2 border-2 border-gray-200 rounded-md" />
        
        <label htmlFor="phone" className="font-bold mt-2">Phone:</label>
        <input type="tel" id="phone" name="phone" placeholder="Mobile or Landline" className="mt-1 p-2 border-2 border-gray-200 rounded-md" />
        
        <label htmlFor="description" className="font-bold mt-2">Description:</label>
        <textarea id="description" name="description" className="mt-1 p-2 border-2 border-gray-200 rounded-md"></textarea>
        
        <label htmlFor="bio" className="font-bold mt-2">Write a short bio:</label>
        <textarea id="bio" name="bio" className="mt-1 p-2 border-2 border-gray-200 rounded-md"></textarea>
        
        <label htmlFor="linkedin" className="font-bold mt-2">LinkedIn URL:</label>
        <input type="url" id="linkedin" name="linkedin" placeholder="LinkedIn Profile link" className="mt-1 p-2 border-2 border-gray-200 rounded-md" />
        
        <label htmlFor="country" className="font-bold mt-2">Country:</label>
        <select id="country" name="country" className="mt-1 p-2 border-2 border-gray-200 rounded-md">
          <option value="">-- Select --</option>
          {/* Add country options here */}
        </select>
        
        <label htmlFor="profilePicture" className="font-bold mt-2">Profile picture:</label>
        <input type="file" id="profilePicture" name="profilePicture" className="mt-1 p-2 border-2 border-gray-200 rounded-md" />
        
        <label htmlFor="resume" className="font-bold mt-2">Resume:</label>
        <input type="file" id="resume" name="resume" className="mt-1 p-2 border-2 border-gray-200 rounded-md" />
        
        <button type="submit" className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700">Submit</button>
      </form>
    </div>
  );
};

export default JobForm;
