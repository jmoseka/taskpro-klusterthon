

import add from '../../../icons/0.75x/pluswhite.png';
import edit from '../../../icons/0.75x/edit.png';
import data from '../../../Database/ClientsData'

import { useState } from "react";

function ManageClient({ onAddClient, onEditClient }) {
    const [activeTab, setActiveTab] = useState('1');

    const handleTabClick = (index) => {
        setActiveTab(index);
    }

    const dataClients =  data.map(client => client.name);

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
                    dataClients.map((client, index) => (
                        <li key={`${index}${client[0]}`} className="bg-grey w-full py-2">
                            <div className="px-7 flex justify-between">
                                <span className="flex items-center gap-6">
                                    <button onClick={() => onEditClient(true, client)} type="button" className="border border-white p-2 bg-white rounded-lg text-icon-container gap-2">
                                        <img src={edit} alt="edit icon" />
                                        <span className="text-[0.8rem]">Edit</span>
                                    </button>

                                    <p className="capitalize text-sm font-medium">{client}</p>
                                </span>


                            </div>
                        </li>
                    ))
                }
            </ul>

        </div>

    )
}

export default ManageClient;