import React from 'react'
import psts from "../../Feeds/flg/z5.jpg"
import psts1 from "../../Feeds/flg/z20.jpg"
import psts2 from "../../Feeds/flg/z17.jpg"
import psts3 from "../../Feeds/flg/z16.jpg"
import psts4 from "../../Feeds/flg/z4.jpg"
import psts5 from "../../Feeds/flg/z7.jpg"
import psts6 from "../../Feeds/flg/z2.jpg"



import { Link } from 'react-router-dom'
function Tagss() {
  return (
    <>
      <div className='w-full h-auto flex items-center gap-1 flex-wrap'>
         <Link to="/"
         className='lg-w-[33%] md-w-[33%] sm-w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]'
         style={{
           backgroundImage:`url(${psts})`,
           backgroundPosition:'center',
           backgroundSize:'cover',
           backgroundRepeat:'no-repeat',
         }}
        />

<Link to="/"
         className='lg-w-[33%] md-w-[33%] sm-w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]'
         style={{
           backgroundImage:`url(${psts1})`,
           backgroundPosition:'center',
           backgroundSize:'cover',
           backgroundRepeat:'no-repeat',
         }}
        />

<Link to="/"
         className='lg-w-[33%] md-w-[33%] sm-w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]'
         style={{
           backgroundImage:`url(${psts2})`,
           backgroundPosition:'center',
           backgroundSize:'cover',
           backgroundRepeat:'no-repeat',
         }}
        />

<Link to="/"
         className='lg-w-[33%] md-w-[33%] sm-w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]'
         style={{
           backgroundImage:`url(${psts3})`,
           backgroundPosition:'center',
           backgroundSize:'cover',
           backgroundRepeat:'no-repeat',
         }}
        />

<Link to="/"
         className='lg-w-[33%] md-w-[33%] sm-w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]'
         style={{
           backgroundImage:`url(${psts4})`,
           backgroundPosition:'center',
           backgroundSize:'cover',
           backgroundRepeat:'no-repeat',
         }}
        />

<Link to="/"
         className='lg-w-[33%] md-w-[33%] sm-w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]'
         style={{
           backgroundImage:`url(${psts5})`,
           backgroundPosition:'center',
           backgroundSize:'cover',
           backgroundRepeat:'no-repeat',
         }}
        />

<Link to="/"
         className='lg-w-[33%] md-w-[33%] sm-w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]'
         style={{
           backgroundImage:`url(${psts6})`,
           backgroundPosition:'center',
           backgroundSize:'cover',
           backgroundRepeat:'no-repeat',
         }}
        />
      </div>
    </>
  )
}

export default Tagss
