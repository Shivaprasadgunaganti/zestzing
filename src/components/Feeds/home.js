import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import Largenav from '../header/largenav';
import Mobilenav from '../header/mobilenav';
import Feed from './feed';
import Mainn from '../Profile/mainn';
import Exploree from '../Exploree';
import Notification from '../notifiactions/Notification';
import NotificationsPage from '../notifiactions/Notificationpage';
import CreateComponent from '../../components/notifiactions/createeee';

const   Home = () => {
  return (
    <>
      <div className='w-full h-auto flex items-start justify-between lg:gap-x-32 md:gap-x-16 sm:gap-x-8 gap-x-4 relative'>
        
        {/* Sidebar for large screens */}
        <div className='lg:w-[16%] md:w-[17%] sm:w-none w-none h-[100vh] pt-10 px-3 border-r border-r-gray-500 sticky top-0 left-0 lg:block md:block sm:hidden hidden'>
          <Largenav />
        </div>

        {/* Mobile Navbar for small screens */}
        <div className='w-full h-auto py-1 px-3 border-t-[#1d1d1d] fixed bottom-0 left-0 lg:hidden md:hidden sm:block block bg-black z-50'>
          <Mobilenav />
        </div>

        {/* Main content routing section */}
        <div className='w-full h-full'>
    <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/profile" element={<Mainn />} />
        {/* <Route path="/explore" element={<Exploree />} />
        <Route path="/notification" element={<NotificationsPage />} />
        <Route path="/create" element={<CreateComponent />} /> */}
    </Routes>
</div>
        <Outlet/>
      </div>
    </>
  )
}

export default Home;