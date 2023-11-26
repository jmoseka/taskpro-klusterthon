import React from 'react'

const Globe = () => {
  return (
    <div className='py-12 md:py-28 pl-5 lg:px-20 flex items-center flex-wrap lg:flex-nowrap justify-center' id='about'>
        <div className='w-[80%]'>
            <h1 className='text-4xl md:text-5xl text-start font-semibold'>
             <span className='text-veryGreen'>1 Million+ Users</span>  Across The Globe
            </h1>
            <p className='text-black text-lg md:text-xl font-medium py-4 text-start'>
            Efficient app, boosts productivity, helps you track and monitor your sme’s, seamless integration, highly recommended.
            </p>
            <img src="assets/stars.png" alt="stars" />
            <div className='flex items-center pt-4 gap-3'>
                <img src="assets/H.png" alt="hussein" />
                <div>
                <p className='text-paleYellow text-lg md:text-xl font-medium'>Yekini-Ajayi Hussein</p>
                <p className='text-base md:text-lg font-medium'>Lagos, Nigeria</p>
                </div>
            </div>
        </div>
        <div className='flex'>
            <img src="assets/globe.png" alt="" />
        </div>
      
    </div>
  )
}

export default Globe
