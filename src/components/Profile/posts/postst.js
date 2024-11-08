import React from 'react'
import { Link } from 'react-router-dom'
import pst from "../../Feeds/flg/z1.jpg"
import pst1 from "../../Feeds/flg/z2.jpg"
import pst2 from "../../Feeds/flg/z3.jpg"
import pst3 from "../../Feeds/flg/z4.jpg"
import pst4 from "../../Feeds/flg/z5.jpg"
import pst5 from "../../Feeds/flg/z6.jpg"
import pst6 from "../../Feeds/flg/z7.jpg"






const Postst = () => {
  return (
    <>
      <div className='w-full h-auto flex items-center gap-1 flex-wrap'>
         <Link to="/"
         className='lg-w-[33%] md-w-[33%] sm-w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]'
         style={{
           backgroundImage:`url(${pst})`,
           backgroundPosition:'center',
           backgroundSize:'cover',
           backgroundRepeat:'no-repeat',
         }}
        />

<Link to="/"
         className='lg-w-[33%] md-w-[33%] sm-w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]'
         style={{
           backgroundImage:`url(${pst1})`,
           backgroundPosition:'center',
           backgroundSize:'cover',
           backgroundRepeat:'no-repeat',
         }}
        />

<Link to="/"
         className='lg-w-[33%] md-w-[33%] sm-w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]'
         style={{
           backgroundImage:`url(${pst2})`,
           backgroundPosition:'center',
           backgroundSize:'cover',
           backgroundRepeat:'no-repeat',
         }}
        />

<Link to="/"
         className='lg-w-[33%] md-w-[33%] sm-w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]'
         style={{
           backgroundImage:`url(${pst3})`,
           backgroundPosition:'center',
           backgroundSize:'cover',
           backgroundRepeat:'no-repeat',
         }}
        />

<Link to="/"
         className='lg-w-[33%] md-w-[33%] sm-w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]'
         style={{
           backgroundImage:`url(${pst4})`,
           backgroundPosition:'center',
           backgroundSize:'cover',
           backgroundRepeat:'no-repeat',
         }}
        />

<Link to="/"
         className='lg-w-[33%] md-w-[33%] sm-w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]'
         style={{
           backgroundImage:`url(${pst5})`,
           backgroundPosition:'center',
           backgroundSize:'cover',
           backgroundRepeat:'no-repeat',
         }}
        />

<Link to="/"
         className='lg-w-[33%] md-w-[33%] sm-w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]'
         style={{
           backgroundImage:`url(${pst6})`,
           backgroundPosition:'center',
           backgroundSize:'cover',
           backgroundRepeat:'no-repeat',
         }}
        />
      </div>
    </>
  )
}

export default Postst

