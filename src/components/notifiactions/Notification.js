import React from 'react';

const Notification = ({ username, photo, message, time }) => {
  return (
    <div className='flex items-center p-4 bg-gray-900 mr-40 text-white ml-64 rounded-lg shadow-md my-2 hover:bg-gray-700'>
      {/* Profile Picture */}
      <img 
        src={photo} 
        alt={username} 
        className='w-12 h-12 rounded-full mr-4' 
      />
      
      {/* Notification Content */}
      <div className='flex flex-col'>
        <p className='font-semibold text-lg'>{username}</p>
        <p className='text-sm text-gray-300'>{message}</p>
        <p className='text-xs text-white-500'>{time}</p>
      </div>
    </div>
  );
};

export default Notification;
