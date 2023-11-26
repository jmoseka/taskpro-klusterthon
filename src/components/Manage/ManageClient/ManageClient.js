

import add from '../../../icons/0.75x/pluswhite.png';
import edit from '../../../icons/0.75x/edit.png';
import data from '../../../Database/ClientsData';

import { useEffect, useState } from "react";
import FetchAllClients from '../../../modules/FetchAllClients';

function ManageClient({ onAddClient, onEditClient }) {
    const [activeTab, setActiveTab] = useState('1');
    const [dataClients, setDataClients] = useState([])


    useEffect(() => {
        // Simulating data retrieval (replace this with your actual data fetching logic)
        const fetchData = async () => {
            const clients = await FetchAllClients()
            setDataClients(clients)
            console.log('data', clients);
        };

        fetchData();
    }, []);



    const handleTabClick = (index) => {
        setActiveTab(index);
    }




    return (

        <div className="card py-3">
            <div className=" px-7 flex justify-between items-center">
                <p className="font-medium">Manage</p>
                <button onClick={() => onAddClient(true)} type="button" className=" bg-yellow rounded-lg 
                     font-medium text-icon-container gap-1 p-2">
                    <span><img src={add} alt="add client" /></span>
                    <span className="capitalize text-sm text-white">New client</span>
                </button>
            </div>

            <div className="tab font-normal text-sm w-full  border-b-[1px] border-b-grey ">
                <div className="px-7 flex text-center gap-7">
                    <button index={1} onClick={() => handleTabClick('1')} type="button" className={`tab-buttons ${activeTab === '1' ? 'border-b-green' : ' border-b-transparent'}`}>Clients</button>
                    <button index={2} onClick={() => handleTabClick('2')} type="button" className={`tab-buttons ${activeTab === '2' ? 'border-b-green' : ' border-b-transparent'}`}>Tasks</button>
                    <button index={3} onClick={() => handleTabClick('3')} type="button" className={`tab-buttons ${activeTab === '3' ? 'border-b-green' : ' border-b-transparent'} `}>Roles</button>
                </div>
            </div>

            <ul className='py-4 flex flex-col gap-2 min-h[200px]'>
                {
                    dataClients !== null && dataClients.length > 0 ?
                        dataClients.map((client, index) => (
                            <li key={`${index}${client[0]}`} className="bg-grey w-full py-2">
                                <div className="px-7 flex justify-between">
                                    <span className="flex items-center gap-6">
                                        <button onClick={() => onEditClient(true, client.name)} type="button" className="border border-white p-2 bg-white rounded-lg text-icon-container gap-2">
                                            <img src={edit} alt="edit icon" />
                                            <span className="text-[0.8rem]">Edit</span>
                                        </button>

                                        <p className="capitalize text-sm font-medium">{client.name}</p>
                                    </span>


                                </div>
                            </li>
                        ))
                        :
                        <p>No client found</p>
                }
            </ul>

        </div>

    )
}

export default ManageClient;