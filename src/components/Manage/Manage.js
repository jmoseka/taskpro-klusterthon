import MessageBoard from "../MessageBoard/MessageBoard";
import add from '../../icons/0.75x/pluswhite.png';

import './Manage.css';

import { useState } from "react";
import ClientList from "./ClientList/ClientList";

function Manage() {
    const [activeTab, setActiveTab] = useState('1');

    const handleTabClick = (index) => {
        setActiveTab(index)
    }



    return (
        <div className="h-fit flex flex-col gap-5 ">
            <MessageBoard />

            <div className="card py-3">
                <div className=" px-7 flex justify-between items-center">
                    <p className="font-medium">Manage</p>
                    <button type="button" className=" bg-yellow rounded-lg 
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

                <ClientList />

            </div>


        </div>
    );
}

export default Manage;