import React from 'react'

const MasteringPay = () => {
  return (
    <div className='bg-paleGreeen py-12 md:py-32 px-5 lg:px-20' id='feature'>
      <div>
        <h2 className='text-black text-3xl md:text-5xl text-center font-semibold'>
        Mastering Payments For Business Prosperity 
        </h2>
        <p className='pt-3 font-medium text-[#3A3A3A] text-base md:text-xl'>
        Effortlessly create client profiles, track transactions, and generate invoices, all within a user-friendly user interface. Learn more in our <span className='text-darkGreen font-medium'>guide for getting started</span>
        </p>
        <p className='font-medium text-[#3A3A3A] text-base md:text-xl leading-9'>Here are a few reasons you must choose <span className='text-paleYellow font-medium'>BizHub</span> </p>
      </div>
      <div className='md:flex py-12 items-center'>
        <div className='flex flex-col gap-7 pb-3 md:gap-52'>
          <div>
          <h5 className='text-paleYellow flex items-center text-xl'>
            <img src="assets/chartsquare.png" alt="Bizhub Chart" />
          Proactive Payment Monitoring
          </h5>
          <p>Stay ahead with BizHub&apos;s real-time insights into your business finances.</p>
          </div>
          <div>
          <h5 className='text-paleYellow flex items-center text-xl'>
            <img src="assets/colorssquare.png" alt="Bizhub Chart" />
            Organized Dashboard
          </h5>
          <p>Provides clear insights, easy navigation, and efficient management representation.</p>
          </div>
        </div>
        <div className='flex'>
          <img src="assets/paymentlaptop.png" alt="Biz Hub Laptop" 
          className='w-full max-w-[550px]' />
        </div>
        <div className='flex md:gap-44 gap-4 flex-col'>
          <div>
          <h5 className='text-paleYellow flex items-center text-xl'>
            <img src="assets/medalstar.png" alt="Bizhub Star" />
            24/7 Priority Support
          </h5>
          <p>Ensuring assistance is available around the clock, addressing issues and answering queries whenever they arise.</p>
          </div>
          <div>
          <h5 className='text-paleYellow flex items-center text-xl'>
            <img src="assets/bubble.png" alt="Bizhub Chart" />
            Automation for Time Efficiency
          </h5>
          <p>Automate tasks, invoice generation, saving time and allowing businesses to focus on core operations.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MasteringPay
