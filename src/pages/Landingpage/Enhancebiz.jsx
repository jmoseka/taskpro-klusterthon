import React from 'react'

const Enhancebiz = () => {
  return (
    <div className='bg-paleGreeen py-12 md:py-28 px-5 lg:px-20 flex items-center flex-wrap lg:flex-nowrap'>
      <div className='flex'>
        <img src="assets/pana.png" alt="biz clock" />
      </div>
      <div className='w-85% md:pl-24'>
        <h1 className='text-4xl md:text-5xl text-start font-semibold'>
        Enhance your business today with <span className='text-paleYellow'>BizHub</span>
        </h1>
        <form action="" className='py-4 flex flex-col gap-4 items-start'>
            <input type="email" className='w-[75%] py-3 px-3 text text-[#7C7B7B] rounded-2xl' placeholder='Email'/>
            <button type='submit' onClick={(e)=>{
                e.preventDefault()
                e.stopPropagation()
            }} className='bg-veryGreen text-white button px-4 py-4 rounded-3xl'>Get Started for free</button>
            <div className='flex items-center gap-3'>
                <img src="assets/star10.png" alt="Biz Star" />
                <p>Get 30 days trial period</p>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Enhancebiz
