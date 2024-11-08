import React from 'react'
import { Link } from 'react-router-dom'
import ExploreLogo from "../Feeds/flg/explore.png"
import ReelsLogo from "../Feeds/flg/reel.png"
import NotificationsLogo from "../Feeds/flg/like.png"
import CreateLogo from "../Feeds/flg/create.png"
import logoj from "../Feeds/flg/logoZZ.png"
import logotxt from "../Feeds/flg/title.png"
import homologo from "../Feeds/flg/home.png"
// import ThreadsLogo from "../Feeds/flg/threads.png"
import MoreLogo from "../Feeds/flg/more (1).png"
import dp from "../Feeds/flg/img1.png"
import Explore from '../explore/Explore'

const Largenav = () => {
  const sidebarItems = [
    {
      name: "Reels",
      link: "/reels",
      icon: ReelsLogo,
    },
    {
      name: "Notifications",
      link: "/notifications",
      icon: NotificationsLogo,
    },
    {
      name: "Create",
      link: "/create",
      icon: CreateLogo,
    },
  ];

  const handleLogout = () => {
    // Add your logout logic here
    console.log("User logged out");
  };

  return (
    <>
      <div className='w-full h-full relative'>
        <Link to="/" className='mb-10 px-10 lg:block md:hidden sm:hidden hidden'>
          <img src={logotxt} alt='zzlogo' className='w-28 h-auto' />
        </Link>
        <Link to="/" className='mb-10 px-2 lg:hidden md:block sm:block block'>
          <img src={logoj} alt='zzlogoj' className='w-28 h-auto' />
        </Link>

        <div className='w-full h-auto flex items-start flex-col gap-y-2'>
          <Link to="/" className='w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group'>
            <img src={homologo} alt='home icon' className='w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300' />
            <p className='text-base font-semibold text-white lg:block md:hidden sm:hidden hidden'>Home</p>
          </Link>
          {sidebarItems.map((item) => (
            <Link to={item.link}
              key={item.name}
              className='w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group'>
              <img src={item.icon} alt={`${item.name} icon`} className='w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300' />
              <p className='text-base font-medium text-white lg:block md:hidden sm:hidden hidden'>{item.name}</p>
            </Link>
          ))}
          <Link to="/explore"
            className='w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group'>
            <img src={ExploreLogo} alt='explore icon' className='w-6 h-6 rounded-full object-cover group-hover:scale-105 ease-out duration-300' />
            <p className='text-base font-medium text-white lg:block md:hidden sm:hidden hidden'>Explore</p>
          </Link>
          <Link to="/profile"
            className='w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group'>
            <img src={dp} alt='profile icon' className='w-6 h-6 rounded-full object-cover group-hover:scale-105 ease-out duration-300' />
            <p className='text-base font-medium text-white lg:block md:hidden sm:hidden hidden'>Profile</p>
          </Link>
        </div>

        {/* Threads and more nav link */}
        <div className='w-full h-auto absolute bottom-0 left-0 px-0'>
          {/* <Link to="/threads"
            className='w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group mb-4'>
            <img src={ThreadsLogo} alt='threads icon' className='w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300' />
            <p className='text-base font-medium text-white lg:block md:hidden sm:hidden hidden'>Threads</p>
          </Link> */}
          {/* <Link to="/more"
            className='w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group mb-4'>
            <img src={MoreLogo} alt='more icon' className='w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300' />
            <p className='text-base font-medium text-white lg:block md:hidden sm:hidden hidden'>More</p>
          </Link> */}
          {/* Logout Button */}
          <button onClick={handleLogout}
            className='w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-red-600/60 rounded-md ease-out duration-500 group mb-4'>
            <img src={MoreLogo} alt='logout icon' className='w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300' />
            <p className='text-base font-medium text-white lg:block md:hidden sm:hidden hidden'>Logout</p>
          </button>
        </div>
      </div>
    </>
  )
}

export default Largenav;
  