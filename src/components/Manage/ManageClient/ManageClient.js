

import add from '../../../icons/0.75x/pluswhite.png';
import edit from '../../../icons/0.75x/edit.png';
import { useEffect, useState } from "react";
import FetchAllClients from '../../../modules/FetchAllClients';

function ManageClient({ onAddClient, onEditClient }) {
    const [activeTab, setActiveTab] = useState('1');
    const [dataClients, setDataClients] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const clients = await FetchAllClients()
            setDataClients(clients)
        };

        fetchData();
    }, [setDataClients]);


    const handleTabClick = (index) => {
        setActiveTab(index);
    }




    return (

        <div className='py-9 relative'>

            {
                dataClients.length <= 0 ? <div className='modal-blur absolute flex justify-center items-center h-full'>
                    <div className='custom-loader mx-auto h-14 w-14'></div>
                </div>
                    :
                    ''
            }


            <div className="card py-3">
                <div className=" px-7 flex justify-between items-center">
                    <p className="font-medium">Manage</p>
                    <button onClick={() => onAddClient(true)} type="button" className=" bg-yellow rounded-lg 
                     font-medium text-icon-container flex gap-1 p-2">
                        <span><img src={add} alt="add client" /></span>
                        <span className="capitalize text-sm text-white">New client</span>
                    </button>
                </div>

                <div className="tab font-normal text-sm w-full pt-2 border-b-[1px] border-b-grey ">
                    <div className="px-7 pb-1 flex text-center gap-7">
                        <button index={1} onClick={() => handleTabClick('1')} type="button" className={`tab-buttons ${activeTab === '1' ? 'border-b-green' : ' border-b-transparent'}`}>Clients</button>
                        <button index={2} onClick={() => handleTabClick('2')} type="button" className={`tab-buttons ${activeTab === '2' ? 'border-b-green' : ' border-b-transparent'}`}>Tasks</button>
                        <button index={3} onClick={() => handleTabClick('3')} type="button" className={`tab-buttons ${activeTab === '3' ? 'border-b-green' : ' border-b-transparent'} `}>Roles</button>
                    </div>
                </div>

                <ul className='py-4 flex flex-col items-center gap-2 min-h[200px]'>
                    {
                        dataClients !== null && dataClients.length > 0 ?
                            dataClients.map((client, index) => (
                                <li key={`${index}${client[0]}`} className="bg-grey w-full py-2">
                                    <div className="px-7 flex items-center gap-4">

                                        <button onClick={() => onEditClient(true, 'edit', client.name, client.id, client.email, client.address, client.task_details, client.contact)} type="button" className="border
                                             border-white p-2 bg-white rounded-lg text-icon-container gap-2 flex">
                                            <img src={edit} alt="edit icon" />
                                            <span className="text-[0.8rem]">Edit</span>
                                        </button>

                                        <p className="capitalize text-sm font-medium">{client.name}</p>



                                    </div>
                                </li>
                            ))
                            :
                            <p className=''>No client found</p>
                    }
                </ul>

            </div>

        </div>
    )
}

export default ManageClient;