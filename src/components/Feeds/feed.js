import React from 'react';
import Topnav from '../header/Topnav/Topnav';
import Stories from './stories/stories';
import Feedcard from '../feedData/feedcard/feedcard';
import Recommendeduser from '../Recommenduser/Recommendeduser';
import Rrrr from '../Profile/reels/rrrr';

const Feed = () => {
  return (
    <>
      <div className='lg:w-[83%] md:w-[83%] sm:w-full w-full min-h-screen lg:py-7 md:py-7 sm:py-4 py-3 px-3 flex items-start gap-x-20'>
        {/* {feeds and stories} */}
        <div className='lg:w-[55%] md:w-full sm:w-full w-full h-auto relative'>
          {/* {Top navbar (only visible on small screen)} */}
          <Topnav />
          {/* {stories section} */}
          <Stories />
          {/* {feed section} */}
          <div className='w-full h-auto flex items-center justify-center mt-6'>
            <div className='lg:w-[73%] md:w-[73%] sm:w-[80%] w-[80%] h-auto'>
              <Feedcard />
              <Feedcard />
              <Feedcard />
              <Feedcard />
            </div>
          </div>
          {/* {reels section} */}
          <Rrrr /> {/* Add the Reels component here */}
        </div>
        {/* {recommend user section} */}
        <div  className="w-[25%] h-auto lg:block md:hidden sm:hidden hidden fixed top-10 right-20"

        >
          <Recommendeduser />
        </div>
      </div>
    </>
  );
};

export default Feed;
