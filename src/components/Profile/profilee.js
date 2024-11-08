import React, { useState } from 'react'
import prf from "../Feeds/flg/s1.jpg"
import { Link } from 'react-router-dom'
import Settings from '../comment/settings/setting'
import LinkIcon from '../comment/LinkIcon/LinkIcon'
import highlightData from './highlightsdata'
import Tab from './tab/tab'
import PostIcon from "../Feeds/flg/post.png"
import ReelIcon from "../Feeds/flg/reel.png"
import TagIcon from "../Feeds/flg/tag.png"
import Postst from './posts/postst'
import Reels from './reels/reels'
import Tagss from './tags/tagss'



const Profilee = () => {
  const[activeTab,setActiveTab] =useState("posts")
  const [isContentVisible,setContentVisible]=useState(true)

  const handleTabClick=(tab) =>{
    setContentVisible(false)

    //dely animation: 
    setTimeout(()=>{
      setActiveTab(tab)
      setContentVisible(true)
    },300)
  }
  return (
    <>
      <div className='lg:w-[88%] md:w-[88%] ml-[-60px] mr-[150px] sm:w-full w-full h-auto lg:block md:block sm:hidden hidden'>
        {/* {your info section} */}
                <div className='w-full h-auto flex items-center lg:gap-x-20 md:gap-x-16 sm:gap-x-12 gap-x-8 justify-center mb-10'> 
                        <img 
                        src={prf}   
                        alt='profile img'
                        className='rounded-full lg:w-44 md:w-44 sm:w-36 w-32 lg:h-44 md:h-44 sm:h-36 h-36 object-cover'
                        />
                        <div className='flex items-start flex-col'> 
                            <div className='flex items-center gap-x-5 mb-4'> 
                                <Link to="/profile" className='text-lg text-gray-200 ml-2 mt-2 font-normal' >Black-World</Link>
                                <div className='flex items-center gap-x-2'> 
                                    <button className='bg-[#1d1d1d] rounded-lg px-4 py-1.5 text-base text-white font-normal hover:bg-[#2f2f2f] ml-3 mt-3 ease-out duration-150'>Edit Profile</button>
                                    <button className='bg-[#1d1d1d] rounded-lg px-4 py-1.5 text-base text-white font-normal hover:bg-[#2f2f2f] ml-3 mt-3 ease-out duration-150'>Views Archive</button>

                                </div>
                                <Settings/>
                            </div>
            {/* {post,followers,following} */}
            <div className='flex items-center gap-x-6 mb-4'>
              <h6 className='text-base text-gray-100 font-normal'>10 Posts</h6>
              <Link to='/' className='text-base text-gray-100 font-normal'>12000 Followers</Link>
              <Link to='/' className='text-base text-gray-100 font-normal'>100 Following</Link>

            </div>

            {/* {fullname} */}
            <p className='text-base text-gray-100 font-normal'>Photojournalist</p>
            {/* {Bio} */}
            <p className='text-base text-gray-100 font-normal'>Stars can’t shine without darkness<br/>
            🎸 Rhythm of life  <br/>🌌 Cosmos explorer  <br/>💰 Fortune hunter

<br/>
            
            </p>
            {/* {Link} */}
            <p className='text-base text-gray-100 font-normal flex items-center gap-x-2'>
              <LinkIcon/>
              <Link to="/" className='text-blue-500 hover:underline font-medium'>www.mountainmen.com</Link>
              </p>
                        </div>
                </div>

                {/* {highlight section} */}
                <div  className='w-full h-auto flex items-center gap-x-9 mb-10'>
                  <div className='min-w-[61vw] ml-[100px] w-full h-auto flex items-center gap-x-3.5 overflow-x-scroll'>
                      {highlightData.map((data)=>(
                        <Link to="/" key={data.id} className='flex items-center  justify-between flex-col flex-shrink-0'>
                          <div className='w-28 h-28 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#1d1d1d] to-[#1d1d1d]'>
                              <img src={data.img} 
                              alt={data.name} 
                              className='rounded-full h-full w-full object-cover p bg-black'/>
                             
                          </div>
                          <p className='text-white text-sm mt-1 '> 
                                {data.name}
                                </p> 
                        </Link>
                      ))}
                      </div>
                </div>

                {/* {posts,reels ,taggedsection} */}
                        <div className='w-full h-auto'>
                          <div className='w-full h-auto flex items-center justify-center gap-x-6 mb-4 border-t border-[#313131]'> 
                              <Tab 
                              label="POSTS" 
                              icon={PostIcon}
                              isActive={activeTab === "posts"}
                              onclick={()=>handleTabClick("posts")}
                              />
                                 <Tab 
                              label="REELS" 
                              icon={ReelIcon}
                              isActive={activeTab === "reels"}
                              onclick={()=>handleTabClick("reels")}
                              />
                                 <Tab 
                              label="TAGGED" 
                              icon={TagIcon}
                              isActive={activeTab === "tagged"}
                              onclick={()=>handleTabClick("tagged")}
                              />
                          </div>
                          {/* {Tab content section} */}
                                <div className={`mt-4 transition-opacity duration-300 ease-out ${isContentVisible ? "opacity-100" : "opacity-0"}`}>
                                      {activeTab==="posts" && <Postst/>}
                                      {activeTab === "reels" && <Reels/>}
                                      {activeTab === "tagged" && <Tagss/>}
                                </div>
                        </div>
      </div>
    </>
  )
}

export default Profilee
