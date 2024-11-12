import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ExploreLogo from "../Feeds/flg/explore.png";
import ReelsLogo from "../Feeds/flg/reel.png";
import NotificationsLogo from "../Feeds/flg/like.png";
import CreateLogo from "../Feeds/flg/create.png";
import logoj from "../Feeds/flg/logoZZ.png";
import logotxt from "../Feeds/flg/title.png";
import homologo from "../Feeds/flg/home.png";
import MoreLogo from "../Feeds/flg/more (1).png";
import dp from "../Feeds/flg/img1.png";
import { auth } from '../register/firebase';

const Largenav = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("User logged out");
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <div className='fixed top-0 left-0 w-60 h-full bg-gray-900 p-4 flex flex-col justify-between'>
      {/* Logo */}
      <div>
        <Link to="/" className='mb-10 px-10 lg:block md:hidden sm:hidden hidden'>
          <img src={logotxt} alt='zzlogo' className='w-28 h-auto' />
        </Link>
        <Link to="/" className='mb-10 px-2 lg:hidden md:block sm:block block'>
          <img src={logoj} alt='zzlogoj' className='w-28 h-auto' />
        </Link>

        {/* Navigation Links */}
        <div className='flex flex-col gap-y-2'>
          <Link to="/" className='flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group'>
            <img src={homologo} alt='home icon' className='w-6 h-6 group-hover:scale-105 ease-out duration-300' />
            <p className='text-base font-semibold text-white lg:block md:hidden sm:hidden hidden'>Home</p>
          </Link>
          <Link to="/reels" className='flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500  group'>
            <img src={ReelsLogo} alt='reels icon' className='w-6 h-6 group-hover:scale-105 ease-out duration-300' />
            <p className='text-base font-medium text-white lg:block md:hidden sm:hidden hidden'>Reels</p>
          </Link>
          <Link to="/create" className='flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group'>
            <img src={ExploreLogo} alt='explore icon' className='w-6 h-6 group-hover:scale-105 ease-out duration-300' />
            <p className='text-base font-medium text-white lg:block md:hidden sm:hidden hidden'>Explore</p>
          </Link>
          <Link to="/Notification" className='flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group'>
            <img src={NotificationsLogo} alt='notifications icon' className='w-6 h-6 group-hover:scale-105 ease-out duration-300' />
            <p className='text-base font-medium text-white lg:block md:hidden sm:hidden hidden'>Notifications</p>
          </Link>
          <Link to="/profile" className='flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group'>
            <img src={dp} alt='profile icon' className='w-6 h-6 rounded-full group-hover:scale-105 ease-out duration-300' />
            <p className='text-base font-medium text-white lg:block md:hidden sm:hidden hidden'>Profile</p>
          </Link>
        </div>
      </div>

      {/* Logout Button */}
      <button onClick={handleLogout} className="flex items-center gap-x-4 p-3 bg-transparent hover:bg-red-600/60 rounded-md ease-out duration-500 group">
        <img src={MoreLogo} alt="logout icon" className="w-6 h-6 group-hover:scale-105 ease-out duration-300" />
        <p className="text-base font-medium text-white lg:block md:hidden sm:hidden hidden">Logout</p>
      </button>
    </div>
  );
};

export default Largenav;
