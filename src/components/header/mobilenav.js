import React from 'react'
import { Link } from 'react-router-dom'
import SearchLogo from "../Feeds/flg/search.png"
import NotificationsLogo from "../Feeds/flg/like.png"
import ReelsLogo from "../Feeds/flg/reel.png"
import dp from "../Feeds/flg/img1.png"
import CreateLogo from "../Feeds/flg/create.png"
import homologo from "../Feeds/flg/home.png"
import explg from "../Feeds/flg/explore.png"

const MobileNav=()=>{
  
  return (
    <>
      <div className='w-full h-auto'>
            <div className='w-full h-auto flex items-center gap-x-2'>
            <Link to="/" className='w-full h-auto flex items-center  gap-x-4 p-3 bg-transparent  group'>
        <img src={homologo}  alt='home icon' className='w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300'/>
          <p className='text-base font-semibold text-white lg:block md:hidden sm:hidden hidden'>Home</p>
         </Link>

         <Link to="/reels" className='w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group  '>
          <img src={ReelsLogo} alt='explore icon' className='w-6 h-6 rounded-md object-cover group-hover:scale-105 ease-out duration-300' />
          <p className='text-base font-medium text-white lg:block md:hidden sm:hidden hidden'>Reels</p>
        </Link>



       
         <Link to="/create" className='w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group'>
        <img src={explg}  alt='home icon' className='w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300'/>
          <p className='text-base font-semibold text-white lg:block md:hidden sm:hidden hidden'>Reels</p>
         </Link>

         <Link to="/Notification" className='w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group'>
  <img src={NotificationsLogo} alt='explore icon' className='w-6 h-6 rounded-md object-cover group-hover:scale-105 ease-out duration-300' />
  <p className='text-base font-medium text-white lg:block md:hidden sm:hidden hidden'>Notifications</p>
</Link>
         

       
          <Link to="/profile"   
           className='w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group'>
         <img src={dp}
          alt='profile icon'  className='w-6 h-6 rounded-full object-cover group-hover:scale-105 ease-out duration-300'/>
          </Link>
              </div> 
      </div>
    </>
  )
}

export default MobileNav
