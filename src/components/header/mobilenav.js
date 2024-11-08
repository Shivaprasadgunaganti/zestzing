import React from 'react'
import { Link } from 'react-router-dom'
import SearchLogo from "../Feeds/flg/search.png"

import ReelsLogo from "../Feeds/flg/reel.png"
import dp from "../Feeds/flg/img1.png"
import CreateLogo from "../Feeds/flg/create.png"
import homologo from "../Feeds/flg/home.png"


const MobileNav=()=>{
    const sidebarItems = [
        {
          link: "/search",
          icon: SearchLogo,
        },
     
        {
          link: "/reels",
          icon: ReelsLogo,
        },

        {         
          link: "/create",
          icon: CreateLogo,
        },
      ];

  return (
    <>
      <div className='w-full h-auto'>
            <div className='w-full h-auto flex items-center gap-x-2'>
            <Link to="/" className='w-full h-auto flex items-center  gap-x-4 p-3 bg-transparent  group'>
        <img src={homologo}  alt='home icon' className='w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300'/>
          <p className='text-base font-semibold text-white lg:block md:hidden sm:hidden hidden'>Home</p>
         </Link>
         {sidebarItems.map((item)=>(
           <Link to={item.link} 
           key={item.id}
           className='w-full h-auto flex items-center  gap-x-4 p-3 bg-transparent   group'>
         <img src={item.icon}  alt='home icon' className='w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300'/> 
          </Link>
         ))}
          <Link to="/profile"   
           className='w-full h-auto flex items-center  gap-x-4 p-3 bg-transparent  group'>
         <img src={dp}
          alt='profile icon'  className='w-6 h-6 rounded-full object-cover group-hover:scale-105 ease-out duration-300'/>
          </Link>
              </div> 
      </div>
    </>
  )
}

export default MobileNav
