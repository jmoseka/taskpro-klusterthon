import { useState } from 'react';
import arrowdown from '../../icons/0.75x/arrow-down.png';
import search from '../../icons/0.75x/search-status.png';

import './Dashboard.css';
import MessageBoard from '../MessageBoard/MessageBoard';
import TableInvoice from '../TableInvoice/TableInvoice';

function Dashboard() {
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
            <MessageBoard />

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




            <div className='card py-3 capitalize  flex flex-col gap-2'>
                <div className='px-8 flex flex-col gap-2 items-start'>
                    <div className='w-full flex items-center justify-between'>
                        <span className='font-medium text-base'>Overview of payment status</span>

                        <span className='flex text-sm gap-1 items-center text-blackGray'>
                            <span className='text-sm'>Filter:</span>
                            <span className='flex items-center justify-between
                             border border-grey  rounded-3xl py-2 px-2 w-[200px]  '>
                                <p>All</p>
                                <img src={arrowdown} alt='arrow-down' />
                            </span>
                        </span>
                    </div>
                    <span className='py-[0.1px] bg-grey w-full'></span>
                </div>

                <div className='h-[150px] overflow-y-scroll'>
                    <TableInvoice />

                </div>


            </div>
        </div>

    );
}

export default Dashboard;
