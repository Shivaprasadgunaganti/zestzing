import React from 'react';
import { Link } from 'react-router-dom';
import pst from "../../Feeds/flg/z1.jpg";
import pst1 from "../../Feeds/flg/z2.jpg";
import pst2 from "../../Feeds/flg/z3.jpg";
import pst3 from "../../Feeds/flg/z4.jpg";
import pst4 from "../../Feeds/flg/z5.jpg";
import pst5 from "../../Feeds/flg/z6.jpg";
import pst6 from "../../Feeds/flg/z7.jpg";

// Array to hold images and generate random likes
const images = [
  { src: pst, likes: Math.floor(Math.random() * 1000) + 1 },
  { src: pst1, likes: Math.floor(Math.random() * 1000) + 1 },
  { src: pst2, likes: Math.floor(Math.random() * 1000) + 1 },
  { src: pst3, likes: Math.floor(Math.random() * 1000) + 1 },
  { src: pst4, likes: Math.floor(Math.random() * 1000) + 1 },
  { src: pst5, likes: Math.floor(Math.random() * 1000) + 1 },
  { src: pst6, likes: Math.floor(Math.random() * 1000) + 1 }
];

const Postst = () => {
  return (
    <div className='w-full h-auto flex items-center gap-1 flex-wrap'>
      {images.map((image, index) => (
        <Link
          to="/"
          key={index}
          className='relative lg-w-[33%] md-w-[33%] sm-w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]'
          style={{
            backgroundImage: `url(${image.src})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Heart icon and like count overlay */}
          <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
            <span className='text-white text-lg font-semibold'>❤️ {image.likes}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Postst;
