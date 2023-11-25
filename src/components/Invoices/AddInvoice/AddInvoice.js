import { useState } from 'react';
import arrowdown from '../../../icons/0.75x/arrow-down.png'
import save from '../../../icons/0.75x/save.png'
import cancel from '../../../icons/0.75x/trash.png'
import success from '../../../icons/1x/check_small.png'
import { getAllClients } from '../../../modules/GetClient';

import './AddInvoice.css';
import { useEffect } from 'react';
import { useRef } from 'react';

function AddInvoice({ onCloseInvoice, onSaveInvoice }) {
    const allClients = getAllClients();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const typeRef = useRef(null);
    const [clientName, setClientName] = useState(allClients.length > 0 ? allClients[0] : 'No client found');
    const [clientIndex, setClientIndex] = useState(0);
    const [isTypeOpen, setIsTypeOpen] = useState(false)
    const [itemTypeIndex, setItemTypeIndex] = useState(0);
    const [itemTypeName, setItemTypeName] = useState('Supplies');
    const [loadMessage, setLoadMessage] = useState(false)
    const [loadingAnime, setLoadingAnime] = useState(false);


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const itemType = [
        'Supplies',
        'Sales'
    ]

    const toggleTypeDropdown = () => {
        setIsTypeOpen(!isOpen);
    };

    const handleItemTypeClick = (index, n) => {
        setItemTypeIndex(index)
        setItemTypeName(n)
    }

    const handleClientClick = (index, name) => {
        setClientIndex(index)
        setClientName(name);
    }
    // remove modal window when anywhere else is clicked 
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }

        if (typeRef.current && !typeRef.current.contains(event.target)) {
            setIsTypeOpen(false);
        }
    };


    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    ///////////*****/////////////////////////////// */


    const handleCreateInvoice = (event) => {
        event.preventDefault();
        setLoadMessage(!loadMessage)
        setLoadingAnime(true);
        setTimeout(() => {
            setLoadingAnime(false);
            setTimeout(() => {
                onSaveInvoice(false)
            }, 2000);
        }, 3000);
    }


    return (
        <div className="card relative">

            <div className={`modal-blur ${loadMessage === true ? 'block' : 'hidden'}`}>
                <div className='modal-window addmodal '>

                    {
                        loadingAnime ? <span className='anime-spinner'>Loading spinner</span>
                            :

                            <span className='flex  flex-col justify-center items-center gap-4'>
                                <span>Client created successfully</span>
                                <span><img src={success} alt='green check tick box' /></span>
                            </span>
                    }
                </div>
            </div>


            <div>
       

                <div className='py-4 border-b-[1px] border-b-grey pb-3'>
                    <div className="px-7 flex flex-col items-start gap-2">
                        <p className="capitalize font-semibold">New Invoices</p>

                        <div className='text-start w-52 min-w-fit'>
                            <button ref={dropdownRef} onClick={() => toggleDropdown()} type="button" className=" w-full flex items-center justify-between gap-3 rounded-lg border py-2 px-3">
                                <span className="font-medium text-sm capitalize">{clientName} </span>
                                <span><img src={arrowdown} alt="add client" /></span>
                            </button>

                            {
                                isOpen && (
                                    <span className=' w-52 min-w-fit addclientmodal modal'>
                                        {
                                            allClients.map((e, index) => (
                                                <button onClick={() => handleClientClick(index, e)} key={index} className={`${index === clientIndex ? 'bg-grey' : ''}`} type='button'>{e}</button>
                                            ))
                                        }

                                    </span>
                                )
                            }
                        </div>






                    </div>
                </div>


                <form className='px-8 pt-2 overflow-y-scroll flex flex-col gap-6'>
                    <div className='form-ctrl-group'>
                        <div className='form-ctrl'>
                            <label htmlFor='firstName'>Invoice ID </label>
                            <input
                                type='text'
                                id='firstName'
                                name='firstName'
                            />

                        </div>

                        <div className='form-ctrl normal-case'>
                            <label htmlFor='firstName'>Currency </label>
                            <input
                                type='text'
                                id='firstName'
                                name='firstName'
                            />

                        </div>
                    </div>



                    <div className='form-ctrl-group'>
                        <div className='form-ctrl'>
                            <label htmlFor='firstName'>Issue date </label>
                            <input
                                type='text'
                                id='firstName'
                                name='firstName'
                            />

                        </div>

                        <div className='form-ctrl normal-case'>
                            <label htmlFor='firstName'>Total cost </label>
                            <input
                                type='text'
                                id='firstName'
                                name='firstName'
                            />

                        </div>
                    </div>

                    <div className='duedate-group'>
                        <label htmlFor='firstName'>Due date </label>
                        <div className='w-full text-start'>
                            <p className='due-date font-medium'>Upon recepit</p>
                        </div>

                    </div>


                    <div className='form-ctrl'>
                        <label htmlFor='firstName'>Invoice title </label>
                        <input
                            type='text'
                            id='firstName'
                            name='firstName'
                        />

                    </div>


                    {/* table descriptions */}

                    <table className='w-full overflow-y-auto '>
                        <thead>
                            <tr className='bg-grey capitalize'>
                                <th className='w-64 p-2  font-normal text-center'>Item type</th>
                                <th className='text-start p-2 font-normal'>Description</th>

                            </tr>
                        </thead>

                        <tbody>

                            <tr className='h-full'>
                                <td className='w-48 h-40  flex items-start pt-3'>
                                    <div className='w-40 flex flex-col'>

                                        <button ref={typeRef} onClick={() => toggleTypeDropdown()} type="button" className="w-full flex items-center justify-between gap-3 rounded-lg border py-2 px-3">
                                            <span className="font-medium text-sm capitalize">{itemTypeName} </span>
                                            <span><img src={arrowdown} alt="add client" /></span>
                                        </button>


                                        {
                                            isTypeOpen && (
                                                <span className='modal py-2 w-full flex flex-col gap-1 text-sm translate-y-2 text-start'>
                                                    {
                                                        itemType.map((e, index) => (
                                                            <button className={`${index === itemTypeIndex ? 'bg-grey' : ''} w-full py-2 text-start px-3`} type='button' onClick={() => handleItemTypeClick(index, e)}>{e}</button>
                                                        ))
                                                    }
                                                </span>
                                            )
                                        }
                                    </div>



                                </td>


                                <td className='pt-3'>
                                    <div className='h-[135px]'>
                                        <textarea className='rounded-lg border border-grey w-full h-full' type='text' />

                                    </div>
                                </td>

                            </tr>


                        </tbody>
                    </table>


                    <div className='w-full  flex justify-center'>
                        <div className='flex gap-5'>
                            <button type='submit' onClick={handleCreateInvoice} className='bg-green p-2 rounded-lg flex items-center justify-center gap-1'>
                                <span><img src={save} alt='save client' /></span>
                                <span className='capitalize text-[0.85rem] font-semibold'>save client</span>
                            </button>


                            <button onClick={() => onCloseInvoice(false)} className='gray-twentypercent bg-white p-2 rounded-lg flex items-center justify-center gap-1'>
                                <span><img src={cancel} alt='save client' /></span>
                                <span className='capitalize text-[0.85rem]'>Cancel</span>
                            </button>

                        </div>
                    </div>

                </form>

            </div>








        </div>
    )
}

export default AddInvoice;