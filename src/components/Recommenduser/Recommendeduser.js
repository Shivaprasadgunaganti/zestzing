import React from 'react'
import Profilenav from './profilenav/profilenav'
import { Link } from 'react-router-dom'
import recommendUserData from './Recommenduserdata'


const Recommendeduser = () => {
  const linkData=[
    {
      id:1,
      link:"/",
      title:"About",
    },
    {
      id:2,
      link:"/",
      title:"Help",
    },
   
    {
      id:4,
      link:"/",
      title:"Blog",
    },
    {
      id:5,
      link:"/",
      title:"Jobs",
    },
    {
      id:6,
      link:"/",
      title:"Privacy",
    },
    {
      id:7,
      link:"/",
      title:"Terms",
    },
    {
      id:8,
      link:"/",
      title:"Locations",
    },
    {
      id:9,
      link:"/",
      title:"Language",
    },
    {
      id:10,
      link:"/",
      title:"Meta Verified",
    },
   
    {
      id:12,
      link:"/",
      title:"ZestZing Lite",
    },
  ]
  return (
    <>
      <div className='w-full h-auto py-3'>
        {/* {profile navigation} */}
        <Profilenav/>
        {/* {/suggested users} */}
        <div className='w-full h-auto my-8'> 
          <div className='w-full h-auto flex items-center justify-between mb-4'>
            <h6 className='text-sm text-gray-400 font-medium'>Suggested for you</h6>
            <Link
            to="/"
            className="text-xs font-semibold text-gray-300 hover:text-gray-600"
            >See All</Link>
        </div>
        </div>
        {/* {All suer} */}
        {recommendUserData.map((user)=>(
          <div
          key={user.id}
          className='w-full h-auto flex items-center justify-between mb-4'>
            <Link to="/profile" className='w-full h-auto flex items-center gap-x-2' >
            <img src={user.profileImg} alt={user.username} className='w-12 h-12 rounded-full object-cover'/>
            <div className='flex items-start gap-y-0 flex-col'>
                <p className='text-[0.9rem] text-white font-medium mb-0'>{user.username}</p>
                <h6 className='text-xs text-gray-500 font-normal'>Suggested for you</h6>
            </div>
            </Link>
            <Link to="/" className='text-[0.855rem] text-blue-500 hover:text-gray-200'>
            {user.follow}
            </Link>
             </div>
        ))}
        {/* {footer links} */}
        <div className='w-full h-auto'>
            <div className='w-full h-auto flex items-center gap-x-[4px] flex-wrap mb-3'>
                  {linkData.map((data)=>(
                    <div key={data.id} className='w-fit h-auto flex items-center gap-x-[4px]'> 
                        <Link to={data.link}  className='text-[0.8rem] font-normal text-[#5b5b5b] hover:underline'
                        >{data.title}
                        </Link>
                        <div className='w-[1.5px] h-[1.5px] bg-[#5b5b5b] rounded-full'></div>
                    </div>
                  ))}
            </div>
                      <p className='text-sm text-[#5b5b5b] font-normal'>&copy; 2024 ZESTZING FROM META</p>
        </div>
      </div>
    </>
  )
}

export default Recommendeduser
