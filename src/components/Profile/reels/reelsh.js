import React from 'react';
import FirstReelVideo from '../../Feeds/reels/reel1.mp4'
import SecondReelVideo from "../../Feeds/reels/reel2.mp4";
import ThirdReelVideo from "../../Feeds/reels/reel3.mp4";
import FourthReelVideo from "../../Feeds/reels/reel4.mp4";
import FifthReelVideo from "../../Feeds/reels/reel5.mp4";

const Reelsh = () => {
  return (
    <div className='w-full h-auto mt-6'>
      <h2 className='text-xl font-bold mb-4'>Reels</h2>
      {/* Reels content goes here */}
      <div className='flex flex-col gap-4 h-96 overflow-y-scroll'>
        {/* Example reels */}
        <div className='w-full h-56'>
          <video className='w-full h-full' controls>
            <source src={FirstReelVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='w-full h-56'>
          <video className='w-full h-full' controls>
            <source src={SecondReelVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='w-full h-56'>
          <video className='w-full h-full' controls>
            <source src={ThirdReelVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='w-full h-56'>
          <video className='w-full h-full' controls>
            <source src={FourthReelVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='w-full h-56'>
          <video className='w-full h-full' controls>
            <source src={FifthReelVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Reelsh;
