import { useEffect, useRef, useState } from "react";
import add from '../../../icons/0.75x/pluswhite.png'
import arrowdown from '../../../icons/0.75x/arrow-down.png'
import './ListInvoice.css';
import DashboardTableInvoice from "../TableInvoice/DashboardTableInvoice";
import FetchAllClients from "../../../modules/FetchAllClients";

function ListInvoice({ onAddInvoice }) {
    const [activeTab, setActiveTab] = useState(0);
    const [modalIndex, setModalIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [dataNames, setDataNames] = useState([]);
    const [clientName, setClientName] = useState('No client added');
    const [clientId, setClientID] = useState('')

    const handleTabClick = (index) => {
        setActiveTab(index)
    }
    const handleModalClick = (index, name, id) => {
        setModalIndex(index)
        setClientName(name);
        setClientID(id)
    }
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    // remove modal window when anywhere else is clicked 
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (dataNames.length > 0) {
            setClientName(dataNames[0].name)
            setClientID(dataNames[0].id);
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [dataNames, setClientName]);

    ///////////*****/////////////////////////////// */

    const handleAddInvoice = () => {
        onAddInvoice(true, dataNames, clientId)
    }

    useEffect(() => {
        const fetchData = async () => {
            const clients = await FetchAllClients()
            setDataNames(clients)
        };

        fetchData();

    }, [setDataNames]);


    return (

        <div className="py-9 relative">

            {
                dataNames.length <= 0 ? <div className='modal-blur absolute flex justify-center items-center h-full'>
                    <div className='custom-loader mx-auto h-14 w-14'></div>
                </div>
                    :
                    ''
            }


            <div className="card py-4">
                <div className="px-7 flex justify-between items-center">
                    <p className="font-semibold">Invoices</p>

                    <button onClick={() => handleAddInvoice()} type="button" className=" bg-yellow rounded-lg 
                     font-medium text-icon-container flex items-center gap-1 p-2">
                        <span><img src={add} alt="add client" /></span>
                        <span className="capitalize text-sm text-white">New invoice</span>
                    </button>
                </div>

                <div className="px-7 py-4  text-start">
                    <button ref={dropdownRef} onClick={() => toggleDropdown()} type="button" className="w-64 flex items-center justify-between gap-3 rounded-lg border py-2 px-3">
                        <span className="font-medium text-sm capitalize">{clientName} </span>
                        <span><img src={arrowdown} alt="add client" /></span>
                    </button>

                    <span className="">
                        {
                            isOpen && (

                                <span className="modal invoice-modal max-h-[250px] overflow-y-scroll">
                                    {
                                        dataNames.map((e, index) => (
                                            <button onClick={() => handleModalClick(index, e.name, e.id)} key={`${index}e`} type="button"
                                                className={` ${index === modalIndex ? 'bg-grey' : ''}`}>{e.name}</button>
                                        ))
                                    }
                                </span>
                            )
                        }
                    </span>
                </div>


                <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <div className="px-7 flex text-center gap-4 ">
                            <button index={1} onClick={() => handleTabClick(0)} type="button" className={`tab-buttons text-sm  border-b-2 ${activeTab === 0 ? ' border-b-green' : 'border-b-transparent'} `}>All</button>
                            <button index={2} onClick={() => handleTabClick(1)} type="button" className={`tab-buttons text-sm border-b-2 ${activeTab === 1 ? 'border-b-green' : 'border-b-transparent'} `}>Paid invoices</button>
                            <button index={3} onClick={() => handleTabClick(2)} type="button" className={`tab-buttons text-sm border-b-2 ${activeTab === 2 ? 'border-b-green' : 'border-b-transparent'} `}>Outstanding invoices</button>
                        </div>

                        <div className="w-full  h-[1px] bg-grey"></div>
                    </div>



                    <div className='h-auto overflow-y-scroll listinvoice'>
                        <DashboardTableInvoice clientID={dataNames.length > 0 ? clientId : ''} clientName={dataNames.length > 0 ? clientName : ''} invoiceStatus={activeTab} />
                    </div>



                </div>


            </div>

        </div>
    )

}

export default ListInvoice;