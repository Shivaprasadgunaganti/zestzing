import React from 'react';
import { Link } from 'react-router-dom';
import pst from "../Feeds/flg/z7.jpg";
import pst1 from "../Feeds/flg/z2.jpg";
import pst2 from "../Feeds/flg/z3.jpg";
import pst3 from "../Feeds/flg/z4.jpg";
import pst4 from "../Feeds/flg/z5.jpg";
import pst5 from "../Feeds/flg/z6.jpg";
import pst6 from "../Feeds/flg/z7.jpg";
import pst7 from "../Feeds/flg/z8.jpg";
import pst8 from "../Feeds/flg/z18.jpg";
import pst9 from "../Feeds/flg/z19.jpg";
import pst10 from "../Feeds/flg/z1.jpg";
import pst11 from "../Feeds/flg/z11.jpg";
import pst12 from "../Feeds/flg/z12.jpg";
import pst13 from "../Feeds/flg/z17.jpg";
import Largenav from '../header/largenav';

const images = [
  pst, pst1, pst2, pst3, pst4, pst5, pst6, pst7, pst8, pst9, pst10, pst11, pst12, pst13
];

const CreateComponent = () => {
  return (
    <>
      <div className="setexplore  ">
        <Largenav />
        <div className="grid grid-cols-3 ml-96   gap-4 w-3/5 p-4">
          {images.map((image, index) => {
            const likes = Math.floor(Math.random() * 1000) + 1;
            return (
              <Link
                to="/"
                key={index}
                className="relative w-full h-80"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold">❤️ {likes}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CreateComponent;
