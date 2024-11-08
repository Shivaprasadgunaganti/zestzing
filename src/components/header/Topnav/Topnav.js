import React from 'react'
import { Link } from 'react-router-dom'
import Instagramlogo from "../../Feeds/flg/title.png"
import searchlogo from "../../Feeds/flg/search.png"
import messagelogo from "../../Feeds/flg/message.png"

const Topnav = () => {
  return (
    <>
      <div className='w-full h-auto mb-5 lg:hidden md:hidden sm:block block'>
        <div className='w-full h-auto flex items-center justify-between'>
            <Link to="/">
                <img src={Instagramlogo}
                 alt='insta logo'
                 className='w-28 h-auto object-contain'/>
            </Link>
            <div className='flex items-center gap-x-4 pe-4'>
            <Link to="/">
                <img src={searchlogo}
                 alt='insta logo'
                 className='w-6 h-6 '/>
            </Link>
            <Link to="/" className='relative'>
                <img src={messagelogo}
                 alt='insta logo'
                 className='w-7 h-7 '/>
                 <div className='absolute -right-3 -top-2 bg-red-600 text-sm text-white rounded-full w-5 h-5 flex items-center justify-center'>
                    9+
                 </div>
            </Link>
            </div>
        </div>
      </div>
    </>
  )
}

export default Topnav
