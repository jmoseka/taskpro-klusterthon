import { useState } from 'react';
import arrowdown from '../../../icons/0.75x/arrow-down.png'
import save from '../../../icons/0.75x/save.png'
import cancel from '../../../icons/0.75x/trash.png'
import success from '../../../icons/1x/check_small.png'

import './AddInvoice.css';
import { useEffect } from 'react';
import { useRef } from 'react';
import GetToken from '../../../modules/GetToken';
import axios from 'axios';

function AddInvoice({ dataNameInvoice, onCloseInvoice, onSaveInvoice, clientInvoiceId }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const typeRef = useRef(null);
    const [clientName, setClientName] = useState('No client found');
    const [clientIndex, setClientIndex] = useState(0);
    const [isTypeOpen, setIsTypeOpen] = useState(false)
    const [itemTypeIndex, setItemTypeIndex] = useState(0);
    const [itemTypeName, setItemTypeName] = useState('SERVICES');
    const [isCloseInvoice, setIsCloseInvoice] = useState(false);
    const [isBriefLoad, setIsBriefLoad] = useState(false);

    const [loadMessage, setLoadMessage] = useState(false)
    const [loadingAnime, setLoadingAnime] = useState(false);
    const [clientId, setClientId] = useState('');
    const [date, setDate] = useState('');
    const [cost, setCost] = useState('');
    const [desc, setDesc] = useState('')


    useEffect(() => {
        if (dataNameInvoice.length <= 0) {
            setIsCloseInvoice(true);
            setTimeout(() => {
                onCloseInvoice(false)
            }, 3000);
        }
        else {
            setIsBriefLoad(true);
            setClientName([dataNameInvoice[0].name])
            setClientId([dataNameInvoice[0].id])
            setTimeout(() => {
                setIsBriefLoad(false)
            }, 1200);


        }


    }, [dataNameInvoice, onCloseInvoice]);



    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const itemType = [
        'SERVICES',
        'SALES'
    ]

    const toggleTypeDropdown = () => {
        setIsTypeOpen(!isOpen);
    };
    const handleItemTypeClick = (index, n) => {
        setItemTypeIndex(index)
        setItemTypeName(n)

    }
    const handleClientClick = (index, name, id) => {
        setClientIndex(index)
        setClientName(name);
        setClientId(id);
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

        const headers = {
            Authorization: `Token ${GetToken()}`,
        };



        if (date === '' || desc === '' || itemTypeName === '' || cost === '') {
            return;
        }

        else {
            const postData = {
                due_date: date,
                description: desc,
                order_type: itemTypeName,
                amount: cost,
            };

            setLoadingAnime(true);
            axios.post(`https://bizhub-8955b30ff7e1.herokuapp.com/order/create/${clientId}/`,
                postData, { headers })
                .then(response => {
                    setLoadingAnime(false);
                    setLoadMessage(!loadMessage)
                    setTimeout(() => {
                        onSaveInvoice(false)
                    }, 2000);
                    return response.data;

                })
                .catch(error => {
                    return error;
                });
        }


    }



    const handleChangeCost = (e) => {
        setCost(e.target.value)
    }

    const handleChangeDesc = (e) => {
        setDesc(e.target.value)
    }

    const handleDate = (e) => {
        const value = e.target.value;
        // Format the Date object to 'YYYY-MM-DD' string format
        const dateObject = new Date(value);
        const year = dateObject.getFullYear();
        const month = String(dateObject.getMonth() + 1).padStart(2, '0');
        const day = String(dateObject.getDate()).padStart(2, '0');
        // Constructing the formatted date string 'YY-MM-DD'
        const formattedDateString = `${year}-${month}-${day}`;
        setDate(formattedDateString)

    }

    return (

        <div className="py-9 relative">

            {
                isCloseInvoice ?
                    <div className='modal-blur absolute flex justify-center items-center h-full'>
                        <p>No client added</p>
                    </div>
                    : ''
            }

            {
                isBriefLoad ?
                    <div className='modal-blur absolute flex justify-center items-center h-full'>
                    </div>
                    : ''
            }





            <div className="card">

                <div className={`modal-blur ${loadMessage === true ? 'block' : 'hidden'}`}>
                    <div className='modal-window addmodal '>

                        {
                            loadingAnime === true ?
                                <div className='mx-auto custom-loader'></div>
                                :

                                <span className='flex  flex-col justify-center items-center gap-4'>
                                    <span>Invoice created successfully</span>
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
                                                dataNameInvoice.map((e, index) => (
                                                    <button onClick={() => handleClientClick(index, e.name, e.id)}
                                                        key={index} className={`${index === clientIndex ? 'bg-grey' : ''}`} type='button'>{e.name}</button>
                                                ))
                                            }

                                        </span>
                                    )
                                }
                            </div>

                        </div>
                    </div>


                    <form onSubmit={handleCreateInvoice} className='px-8 py-3 overflow-y-scroll flex flex-col gap-6'>
                        <div className='form-ctrl-group'>
                            <div className='duedate-group'>
                                <label htmlFor='firstName'>Due date </label>
                                <div className='w-full text-start'>
                                    <input required type='date' onChange={handleDate} className='due-date font' />
                                </div>

                            </div>

                            <div className='duedate-group'>
                                <label htmlFor='firstName'>Currency </label>
                                <div className='w-full text-start'>
                                    <p className='due-date font-medium'>Nigerian Naira - NGN</p>
                                </div>

                            </div>


                        </div>


                        <div className='form-ctrl'>
                            <label htmlFor='cost'>Total cost </label>
                            <div className='w-full text-start'>
                                <input
                                    required
                                    className='w-48'
                                    type='number'
                                    id='costInvoice'
                                    name='costInvoice'
                                    onChange={handleChangeCost}
                                />
                            </div>
                        </div>


                        <div className='form-ctrl'>
                            <label htmlFor='invoiceTitle'>Invoice title </label>
                            <input
                                required
                                className='w-full'
                                type='text'
                                id='invoiceTitle'
                                name='invoiceTitle'

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
                                            <textarea className='rounded-lg border border-grey w-full h-full' type='text' onChange={handleChangeDesc} />

                                        </div>
                                    </td>

                                </tr>
                            </tbody>
                        </table>


                        <div className='w-full  flex justify-center'>
                            <div className='flex gap-5'>
                                <button type='submit' onClick={handleCreateInvoice} className='bg-green p-2 rounded-lg flex items-center justify-center gap-1'>
                                    <span><img src={save} alt='save client' /></span>
                                    <span className='capitalize text-[0.85rem] font-semibold'>save invoice</span>
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
        </div>

    )
}

export default AddInvoice;