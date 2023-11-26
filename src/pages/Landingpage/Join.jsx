import React from 'react'
import { images } from '../../modules/joinData' 

const Join = () => {
    let data = images.map(x => <img key={x.image} className='block w-24 md:w-auto' src={x.image} alt='Biz Hub Support'/>)
  return (
    <div >
        <h3 className='text-center text-[#191A15] font-inter text-2xl font-semibold bg-paleGreeen py-3'>Join over 1,000,000 sme&apos;s using <span className='text-paleYellow'>BizHub</span> to stay in control </h3>
      <div className=' px-5 lg:pl-20 py-5'>
      <div className='flex flex-wrap gap-5 md:gap-10 items-center justify-center'>
      {data}
      </div>
      </div>
    </div>
  )
}

export default Join
