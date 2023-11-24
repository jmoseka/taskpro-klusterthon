import { useState } from 'react';
import arrowdown from '../../icons/0.75x/arrow-down.png';
import search from '../../icons/0.75x/search-status.png';

import './Dashboard.css';
import MessageBoard from '../MessageBoard/MessageBoard';
import TableInvoice from '../TableInvoice/TableInvoice';
import data from '../../Database/ClientsData'

function Dashboard() {
    const clientsArr = data.map(client => client.name);

    const [clientClick, setClientClick] = useState(0);
    const [searchClient, setSearchClient] = useState('');
    const [clientName, setClientName] = useState(clientsArr[0]);
    const [initialName, setInitialName] = useState(clientName);
    const [filterIndex, setFilterIndex] = useState(null);


    const filteredClients = clientsArr.filter((client) =>
        client.toLowerCase().includes(searchClient.toLowerCase())
    );


    const handleClientClick = (index, name) => {
        setClientClick(index);
        setClientName(name.toLowerCase());
        setInitialName(name);
    }

    const handleSearchClient = (event) => {

        const namesearch = event.target.value
        setSearchClient(event.target.value);
        setClientName(event.target.value)

        if (!namesearch) {
            setClientName(initialName)
        }
    }

    const handleFilterClick = (i) => {
        setFilterIndex(i);
    }

    const filterOptions = [
        'Paid',
        'Invoice no',
        'Date',
        'Title',
        'Amount'
    ]

    return (
        <div className=" h-full flex flex-col gap-5">
            <MessageBoard />

            <div className='card'>
                <div className='flex flex-col gap-2 pt-3 px-8 '>
                    <div className='flex items-center justify-between'>
                        <span className='font-medium text-base'>Clients</span>
                        <span className='rounded-3xl px-3 py-2 border-grey border flex items-center gap-2'>
                            <span className=''><img src={search} alt='search client icon' /></span>
                            <input maxLength={30} onChange={handleSearchClient}
                                className='outline-none rounded-r-lg text-sm' type='text' placeholder='search client...' />
                        </span>
                    </div>

                    <span className='py-[0.1px] bg-grey w-full'></span>
                </div>

                <div className='client-list h-[120px]  overflow-y-scroll'>
                    <ul className={`p-0 m-0 h-full flex flex-col gap-1 ${clientsArr.length <= 0 || filteredClients.length <= 0 ? 'justify-center' : ''} `}>
                        {
                            clientsArr.length > 0 ?
                                filteredClients.length > 0 ?

                                    filteredClients.map((client, index) => (
                                        <button onClick={() => handleClientClick(index, client)} key={`${index}client`}
                                            className={`capitalize text-left text-sm px-7 py-2 w-full outline-0 ${clientClick === index ?
                                                'bg-lightBlue' : ''} `}>{client}</button>

                                    ))

                                    :

                                    <p>Not found client</p>
                                :
                                <p className='mx-auto'>You have no clients </p>


                        }

                    </ul>
                </div>
            </div>




            <div className='card py-3 capitalize  flex flex-col gap-2'>
                <div className='px-8 flex flex-col gap-2 items-start'>
                    <div className='w-full flex items-center justify-between'>
                        <span className='font-medium text-base'>Overview of payment status</span>

                        <span className='flex flex-col'>
                            <div className='flex text-sm gap-1 items-center text-blackGray'>
                                <span className='text-sm'>Filter:</span>
                                <div>

                                    <button type='button' className='relative flex items-center justify-between
                                        border border-grey  rounded-3xl py-2 px-4 w-[180px]  '>
                                        <p>All</p>
                                        <img src={arrowdown} alt='arrow-down' />
                                    </button>

                                    <div className='overflow-auto absolute text-start bg-white w-[180px] text-[13px] translate-y-2 modal'>
                                        <span className='filter-invoices'>
                                            {
                                                filterOptions.map((e, index) => (
                                                    <button onClick={()=>handleFilterClick(index)} className={`filterChoice ${index === filterIndex ? 'bg-grey' : ''}`} index={index} type='button'>{e}</button>

                                                ))
                                            }


                                        </span>
                                    </div>

                                </div>
                            </div>



                        </span>
                    </div>
                    <span className='py-[0.1px] bg-grey w-full'></span>
                </div>

                <div className='h-[150px] overflow-y-scroll'>
                    <TableInvoice clientName={clientName} />

                </div>


            </div>
        </div>

    );
}

export default Dashboard;
