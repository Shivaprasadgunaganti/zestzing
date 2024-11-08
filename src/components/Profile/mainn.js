import React from 'react'
import Profilee from './profilee'
import Mobileprofile from './mobileprofile/mobileprofile'

const Mainn = () => {
  return (
    <>
      <div ClassName="md:w- sm:w-full w-full min-h-screen lg:py-10 md:py-6 sm:py-4 py-4 lg:px-14 md:px-14 sm:px-17 px-2">
        {/* {profile for large screen} */}
        <Profilee/>
        {/* {profile for small screen} */}
<Mobileprofile/>

      </div>
    </>
  )
}

export default Mainn
