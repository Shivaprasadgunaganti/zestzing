import React, { useState } from 'react';
import prf from "../../Feeds/flg/s1.jpg";
import { Link } from 'react-router-dom';
import LinkIcon from '../../comment/LinkIcon/LinkIcon';
import highlightData from '../highlightsdata';
import Tab from '../tab/tab';
import Postst from '../posts/postst';
import Reels from '../reels/reels';
import Tagss from '../tags/tagss';
import PostIcon from "../../Feeds/flg/post.png";
import ReelIcon from "../../Feeds/flg/reel.png";
import TagIcon from "../../Feeds/flg/tag.png";

const Mobileprofile = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const [isContentVisible, setContentVisible] = useState(true);

  const handleTabClick = (tab) => {
    setContentVisible(false);
    setTimeout(() => {
      setActiveTab(tab);
      setContentVisible(true);
    }, 300);
  };

  return (
    <>
      <div className='w-full max-w-[320px] mx-auto h-auto lg:hidden md:hidden sm:block block text-white'>
        <div className='w-full h-auto items-center gap-x-8 justify-center mb-3'> 
          <img 
            src={prf}   
            alt='profile img'
            className='rounded-full w-16 h-16 ml-2 mt-2 object-cover'
          />
          <div className='flex items-start flex-col gap-y-3'>
            <Link to="/profile" className='text-md text-gray-200 ml-2 mt-2 font-normal'>BlackWorld</Link>
            <div className='flex items-center gap-x-2'> 
              <button className='bg-[#1d1d1d] rounded-lg px-3 ml-2 mt-2 py-1 text-sm text-white font-normal hover:bg-[#2f2f2f] ease-out duration-150'>
                Edit Profile
              </button>
              <button className='bg-[#1d1d1d] rounded-lg px-3 py-1 text-sm text-white font-normal hover:bg-[#2f2f2f] ease-out duration-150'>
                Views Archive
              </button>
            </div>
          </div>
          <p className='text-sm text-gray-100 ml-2 mt-2 font-normal'> BlackWorld</p> 
          <p className='text-sm text-gray-100 ml-2 mt-2 font-normal'>
          BLACKWORLD
          photojournalist<br/>
            Stars can’t shine without darkness<br/>
          </p>
          <p className='text-sm text-gray-100 font-normal flex items-center ml-2 mt-2 gap-x-2 mb-5'>
            <LinkIcon />
            <Link to="/" className='text-blue-500 hover:underline ml-2 mt-2 font-medium'>www.mountainmen.com</Link>
          </p>
          <div className='w-full h-auto flex items-center gap-x-9 mb-10'>
            <div className='w-full h-auto flex items-center gap-x-3.5 overflow-x-scroll'>
              {highlightData.map((data) => (
                <Link to="/" key={data.id} className='flex items-center justify-between flex-col flex-shrink-0'>
                  <div className='w-14 h-14 ml-2 mt-2 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#1d1d1d] to-[#1d1d1d]'>
                    <img src={data.img} alt={data.name} className='rounded-full h-full w-full object-cover p bg-black'/>
                  </div>
                  <p className='text-white text-sm mt-1'>{data.name}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className='w-full h-auto flex items-center justify-around border-t border-t-[#1d1d1d]'>
            <div className='flex items-center flex-col py-3'>
              <h6 className='text-sm text-white font-medium mb-0'>55</h6>
              <p className='text-xs text-white/40 font-thin'>posts</p>
            </div>
            <div className='flex items-center flex-col py-3'>
              <h6 className='text-sm text-white font-medium mb-0'>1200</h6>
              <p className='text-xs text-white/40 font-thin'>followers</p>
            </div>
            <div className='flex items-center flex-col py-3'>
              <h6 className='text-sm text-white font-medium mb-0'>99</h6>
              <p className='text-xs text-white/40 font-thin'>following</p>
            </div>
          </div>
        </div>
        <div className='w-full h-auto'>
          <div className='w-full h-auto flex items-center justify-center gap-x-3 mb-4 border-t border-[#313131]'> 
            <Tab 
              label="POSTS" 
              icon={PostIcon}
              isActive={activeTab === "posts"}
              onclick={() => handleTabClick("posts")}
            />
            <Tab 
              label="REELS" 
              icon={ReelIcon}
              isActive={activeTab === "reels"}
              onclick={() => handleTabClick("reels")}
            />
            <Tab 
              label="TAGGED" 
              icon={TagIcon}
              isActive={activeTab === "tagged"}
              onclick={() => handleTabClick("tagged")}
            />
          </div>
          <div className={`mt-4 transition-opacity duration-300  ease-out ${isContentVisible ? "opacity-100" : "opacity-0"}`}>
            {activeTab === "posts" && <Postst />}
            {activeTab === "reels" && <Reels />}
            {activeTab === "tagged" && <Tagss />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobileprofile;
