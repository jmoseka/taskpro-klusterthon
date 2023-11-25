import { useState } from "react";
import add from '../../../icons/0.75x/pluswhite.png'
import arrowdown from '../../../icons/0.75x/arrow-down.png'
import TableInvoice from "../../TableInvoice/TableInvoice";
import data from '../../../Database/ClientsData';
import './ListInvoice.css';

function ListInvoice({ onAddInvoice }) {
    const dataClients = data.map(client => client.name);
    console.log(dataClients);

    const [activeTab, setActiveTab] = useState('1');
    const [modalIndex, setModalIndex] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index)
    }

    const handleModalClick = (index) => {
        setModalIndex(index)
    }

    

    return (

        <div className="card py-3">
            <div className="px-7 flex justify-between items-center">
                <p className="font-semibold">Invoices</p>


                <button onClick={() => onAddInvoice(true)} type="button" className=" bg-yellow rounded-lg 
                     font-medium text-icon-container gap-1 p-2">
                    <span><img src={add} alt="add client" /></span>
                    <span className="capitalize text-sm text-white">New invoice</span>
                </button>
            </div>

            <div className="px-7 py-3 relative text-start">
                <button type="button" className="w-64 flex items-center justify-between gap-3 rounded-lg border py-2 px-3">
                    <span className="font-medium text-sm capitalize">Dangote </span>
                    <span><img src={arrowdown} alt="add client" /></span>
                </button>

                <span className="modal invoice-modal">
                    {
                        dataClients.map((e, index) => (
                            <button onClick={() => handleModalClick(index)} key={`${index}e`} type="button"
                                className={` ${index === modalIndex ? 'bg-grey' : ''}`}>{e}</button>
                        ))
                    }
                </span>
            </div>


            <div className="tab font-normal text-sm w-full border-b-[1px] border-b-grey ">
                <div className="px-7 flex text-center gap-7">
                    <button index={1} onClick={() => handleTabClick('1')} type="button" className={`tab-buttons text-sm ${activeTab === '1' ? 'border-b-green' : ' border-b-transparent'}`}>All</button>
                    <button index={2} onClick={() => handleTabClick('2')} type="button" className={`tab-buttons text-sm ${activeTab === '2' ? 'border-b-green' : ' border-b-transparent'}`}>Paid invoices</button>
                    <button index={3} onClick={() => handleTabClick('3')} type="button" className={`tab-buttons text-sm ${activeTab === '3' ? 'border-b-green' : ' border-b-transparent'} `}>outstanding invoices</button>
                </div>
            </div>


            <div className=' py-3 capitalize  flex flex-col gap-2'>


                <div className='h-auto overflow-y-scroll listinvoice'>
                    <TableInvoice />
                </div>


            </div>


        </div>

    )

}

export default ListInvoice;