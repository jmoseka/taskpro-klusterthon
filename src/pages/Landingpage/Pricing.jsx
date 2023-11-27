import React from 'react'
import { plans } from '../../modules/paymentplan'
import { Link } from 'react-router-dom'

const Pricing = () => {
    const Ourplans = plans.map(plans => <Card key={plans.status} price={plans.price} status={plans.status} offers={plans.offers} button={plans.button} />)
  return (
    <div className='bg-white py-12 md:py-32 px-5 lg:px-20' id='pricing'>
        <div className='mb-10'>
        <h3  className='text-black text-4xl md:text-5xl text-center font-semibold pb-4'><span className='text-paleYellow'>BizHub</span> priced your way</h3>
        <p className='text-black text-base md:text-xl leading-9 text-center font-medium'>An affordable plan rate offering cost-effective options that suit your budget.</p>
        </div>
        <div className=' flex flex-wrap items-center justify-center gap-8 lg:flex-nowrap'>
            {Ourplans}
        </div>
    </div>
  )
}

export default Pricing

const Card = ({price, status, offers, button})=>{
    return(<>
    <div className='w-full max-w-[350px] h-[451px] flex flex-col gap-3 border-2 border-[#EBEBEB] rounded-2xl'>
        <div className='bg-[url(assets/paymentbg.png)] bg-contain bg-no-repeat px-6  text-white py-4 pb-8 h-44 w-full'>
            <h1 className='text-2xl font-medium'>{status}</h1>
            <div>
                <sup>$</sup><span className='text-3xl font-semibold'>{price}</span><sub>monthly</sub>
            </div>
        </div>
        <div className=''>
            {offers.map(x => (
            <div className='flex items-center'>
                <img src='assets/check.png' alt='checker'/>
                <p>{x}</p>
            </div>
            ))}
        </div>
        <div className='flex mt-auto justify-center'>
        <Link to='/signup' className='bg-veryGreen text-white button px-6 py-2 md:text-sm lg:text-base w-56 text-center rounded-3xl mb-3'>{button}</Link>
        </div>

    </div>
    </>)
}
