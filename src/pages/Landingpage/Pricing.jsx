import React from 'react'
import { plans } from '../../modules/paymentplan'

const Pricing = () => {
    const Ourplans = plans.map(plans => <Card key={plans.status} price={plans.price} status={plans.status} offers={plans.offers} />)
  return (
    <div className='bg-white py-12 md:py-32 pl-5 lg:px-20'>
        <div>
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

const Card = ({price, status, offers})=>{
    return(<>
    <div className='w-full max-w-[380px] border-4'>
        <div className='bg-[url(assets/paymentbg.png)] bg-contain bg-no-repeat px-6  text-white py-4 pb-8 h-44 w-full'>
            <h1 className='text-2xl font-medium'>{status}</h1>
            <div>
                <sup>$</sup><span className='text-3xl font-semibold'>{price}</span><sub>monthly</sub>
            </div>
        </div>
        <div>
            {offers.map(x => <p>{x}</p>)}
        </div>

    </div>
    </>)
}
