import { useState } from 'react';
import bell from '../../icons/0.75x/bell.png';
import calendar from '../../icons/0.75x/calendar.png';
import search from '../../icons/0.75x/search-status.png';

import './Dashboard.css';

function Dashboard() {
    const name = 'Hussein';
    const msg = `Let's help you simplify your business.`
    const clientsArr = [
        'Dangote refineries',
        'Nigerian totlas energy',
        'Gifti Texttile indsutry',
        'zayn bank',
        'Wmarie Candy',
        'Omo Company limited group'
    ]

    const [clientClick, setClientClick] = useState(0);

    const handleClientClick = (index) => {
        setClientClick(index);
    }

    return (
        <div className=" h-full flex flex-col gap-5">
            <div className="card w-full flex text-start flex-col py-2 px-7 ">
                <p className='font-medium text-lg'>Hello, {name}!</p>

                <div className='flex items-center gap-2 self-end text-sm'>

                    <span className='profile-spans px-3 border-r-[1px] '>
                        <span><img src={calendar} alt='calendar icon' /></span>
                        <span className='profile-date'>Nov - 25 - 2023</span>
                    </span>

                    <span className='profile-spans'>
                        <span><img src={bell} alt='no notification icon' /></span>
                        <span className='text-white rounded-full h-8 w-8 bg-yellow flex justify-center items-center'>
                            <p className='mx-auto text-sm'>{name[0]}</p>
                        </span>
                    </span>
                </div>


                <p className='font-normal text-sm'>{msg}</p>
            </div>

            <div className='card'>
                <div className='flex flex-col gap-2 pt-3 px-8 '>
                    <div className='flex items-center justify-between'>
                        <span className='font-medium text-base'>Clients</span>
                        <span className='rounded-3xl px-3 py-2 border-grey border flex items-center gap-2'>
                            <span className=''><img src={search} alt='search client icon' /></span>
                            <input maxLength={30} className='outline-none rounded-r-lg text-sm' type='text' placeholder='search client...' />
                        </span>
                    </div>

                    <span className='py-[0.1px] bg-grey w-full'></span>
                </div>

                <div className='client-list h-[120px]  overflow-y-scroll'>
                    <ul className='p-0 m-0 h-full flex flex-col gap-1 '>
                        {
                            clientsArr.map((client, index) => (
                                <button onClick={() => handleClientClick(index)} key={`${index}client`}
                                    className={`capitalize text-left text-sm px-7 py-2 w-full outline-0 ${clientClick === index ?
                                        'bg-lightBlue' : ''} `}>{client}</button>
                            ))
                        }

                    </ul>
                </div>
            </div>




            <div className='card py-3 capitalize'>
                <div className='px-8 flex flex-col gap-2 items-start'>
                    <div className='flex justify-between'>
                        <span className='font-medium text-base'>Overview of payment status</span>

                        <span className=''>
                            <p className='text-sm'>Filter:</p>
                            <span>
                                <p>All</p>
                                <img src='' alt='arrow-down' />
                            </span>
                        </span>
                    </div>


                    <span className='py-[0.1px] bg-grey w-full'></span>
                </div>


            </div>
        </div>

    );
}

export default Dashboard;
