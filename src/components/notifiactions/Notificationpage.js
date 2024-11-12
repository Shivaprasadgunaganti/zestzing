import React from 'react';
import Notification from './Notification';
import Largenav from '../header/largenav';
import "../explore.css";

// Dummy data for notifications
const notifications = [
  {
    username: "John Doe",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    message: "liked your reel",
    time: "5 minutes ago"
  },
  {
    username: "Jane Smith",
    photo: "https://randomuser.me/api/portraits/women/1.jpg",
    message: "liked your post",
    time: "10 minutes ago"
  },
  {
    username: "Michael Lee",
    photo: "https://randomuser.me/api/portraits/men/2.jpg",
    message: "mentioned you in a comment",
    time: "15 minutes ago"
  },
  {
    username: "Emily Johnson",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    message: "started following you",
    time: "1 hour ago"
  },
  {
    username: "David Brown",
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
    message: "liked your story",
    time: "2 hours ago"
  },
  {
    username: "Sophia Williams",
    photo: "https://randomuser.me/api/portraits/women/3.jpg",
    message: "started following you",
    time: "3 hours ago"
  },
  {
    username: "Chris Martin",
    photo: "https://randomuser.me/api/portraits/men/4.jpg",
    message: "shared your post",
    time: "6 hours ago"
  },
  {
    username: "Amanda Clark",
    photo: "https://randomuser.me/api/portraits/women/4.jpg",
    message: "commented on your post",
    time: "8 hours ago"
  },
  {
    username: "Liam Davis",
    photo: "https://randomuser.me/api/portraits/men/5.jpg",
    message: "posted a new photo",
    time: "10 hours ago"
  },
  {
    username: "Olivia White",
    photo: "https://randomuser.me/api/portraits/women/5.jpg",
    message: "liked your new post",
    time: "12 hours ago"
  },
];

const NotificationsPage = () => {
  return (
    <>
    <div className='setexplore'>
    <Largenav/>
    <div className='w-full h-screen bg-black text-white p-6 overflow-y-auto'>
      <h2 className='text-2xl font-semibold mb-6'>Notifications</h2>
      <div className='space-y-4'>
        {notifications.map((notification, index) => (
          <Notification
            key={index}
            username={notification.username}
            photo={notification.photo}
            message={notification.message}
            time={notification.time}
          />
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default NotificationsPage;
