import './AddClient.css'
import save from '../../../icons/0.75x/save.png';
import cancel from '../../../icons/0.75x/trash.png';
import success from '../../../icons/1x/check_small.png'
import { useEffect, useState } from 'react';
import GetToken from '../../../modules/GetToken';
import axios from 'axios';


const AddClient = ({ editClientId, editStatus, editClientName, editClientEmail, editClientAddress, editClientTask, editClientContact, onCloseClient, onSaveClient }) => {
    const [loadMessage, setLoadMessage] = useState(false)
    const [loadingAnime, setLoadingAnime] = useState(false);
    const [loadingAnimeEdit, setLoadingAnimeEdit] = useState(false);
    const [clientName, setClientName] = useState()
    const [clientEmail, setClientEmail] = useState()
    const [clientAddress, setClientAddress] = useState()
    const [clientTask, setClientTask] = useState()
    const [clientContact, setClientContact] = useState()

    const handleInputChangeName = (e) => {
        setClientName(e.target.value)
    }
    const handleInputChangeEmail = (e) => {
        setClientEmail(e.target.value);
    }
    const handleInputChangeAddress = (e) => {
        setClientAddress(e.target.value);
    }
    const handleInputChangeTask = (e) => {
        setClientTask(e.target.value);
    }
    const handleInputChangeContact = (e) => {
        setClientContact(e.target.value);
    }

    useEffect(() => {
        if (editStatus === 'edit') {
            setLoadingAnime(true)
            setTimeout(() => {
                setLoadingAnimeEdit(false)
                setClientName(editClientName);
                setClientEmail(editClientEmail)
                setClientAddress(editClientAddress)
                setClientContact(editClientContact)
                setClientTask(editClientTask)
            }, 2000);

        }

    }, [editStatus, setClientName, editClientName, editClientEmail, setClientEmail, editClientContact, setClientContact, editClientAddress, setClientAddress, editClientTask, setClientTask]); // Add dependencies as needed



    const handleCreateClient = (event) => {
        event.preventDefault();
        const headers = {
            Authorization: `Token ${GetToken()}`,
        };

        const postData = {
            name: clientName,
            email: clientEmail,
            address: clientAddress,
            task_details: clientTask,
            contact: clientContact
        };
        setLoadingAnime(!loadMessage)

        axios.post('https://bizhub-8955b30ff7e1.herokuapp.com/client/create/', postData, { headers })
            .then(response => {
                setLoadMessage(!loadMessage)
                setLoadingAnime(false);
                setTimeout(() => {
                    onSaveClient(false)
                }, 2000);
                return response.data;
            })
            .catch(error => {
                return error;
            });
    }

    const handleEditClient = (event) => {
        event.preventDefault();

        const headers = {
            Authorization: `Token ${GetToken()}`,
        };

        const postData = {
            name: clientName,
            email: clientEmail,
            address: clientAddress,
            task_details: clientTask,
            contact: clientContact
        };
        setLoadingAnime(!loadMessage)

        axios.put(`https://bizhub-8955b30ff7e1.herokuapp.com/client/update/${editClientId}/`, postData, { headers })
            .then(response => {
                setLoadMessage(!loadMessage)
                setLoadingAnime(false);
                setTimeout(() => {
                    onSaveClient(false)
                }, 2000);
                console.log(success);
                return response.data;
            })
            .catch(error => {
                return error;
            });
    }



    return (
        <div className='py-9'>
            <div className="card relative">
                <div className={`modal-blur ${loadMessage === true ? 'block' : 'hidden'}`}>
                    <div className='modal-window addmodal '>

                        {
                            loadingAnime ?
                                <div className='mx-auto custom-loader'></div>

                                :

                                <span className='flex  flex-col justify-center items-center gap-4'>
                                    <span>{editStatus === 'edit' ? 'Client updated successfully!' : 'Client created successfully!'}</span>
                                    <span><img src={success} alt='green check tick box' /></span>
                                </span>
                        }
                    </div>
                </div>

                {
                    loadingAnimeEdit ?

                        <div className='modal-blur'>

                        </div>


                        : ''
                }


                <div className='pt-8 pb-4'>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col items-start px-4">
                            <p className=" font-semibold">{editStatus === 'edit' ? 'Update Client' : 'New client '}</p>

                        </div>

                        <span className="line h-[1px] w-full bg-grey"></span>
                    </div>

                    <form onSubmit={editStatus === 'edit' ? handleEditClient : handleCreateClient} className="py-4 flex flex-col items-start px-7  gap-4">

                        <div className='form-control'>
                            <label htmlFor='clientName'>Client name </label>
                            <input
                                required
                                type='text'
                                id='clientName'
                                name='clientName'
                                value={clientName}
                                onChange={handleInputChangeName}
                            />

                        </div>

                        <div className='form-control'>
                            <label htmlFor='emailAddress'>Email address </label>
                            <input
                                required
                                type='text'
                                id='emailAddress'
                                name='emailAddress'
                                value={clientEmail}
                                onChange={handleInputChangeEmail}

                            />

                        </div>

                        <div className='form-control'>
                            <label htmlFor='addressClient'>Address </label>
                            <textarea
                                required
                                type='text'
                                id='addressClient'
                                name='addressClient'
                                className="h-[70px] addClientTextarea "
                                value={clientAddress}
                                onChange={handleInputChangeAddress}

                            />

                        </div>

                        <div className='form-control'>
                            <label htmlFor='taskDetails'>Task details </label>
                            <textarea
                                type='text'
                                id='taskDetails'
                                name='taskDetails'
                                value={clientTask}
                                className="h-[120px] addClientTextarea "
                                onChange={handleInputChangeTask}
                            />

                        </div>

                        <div className='form-control'>
                            <label htmlFor='emailAddress'>Contact </label>
                            <input
                                required
                                type='number'
                                id='contactClient'
                                name='contactClient'
                                onChange={handleInputChangeContact}
                                value={clientContact}

                            />

                        </div>

                        <div className='form-currency w-full flex items-center'>
                            <label htmlFor='curreny' className='normal-case text-start font-medium w-72'>Preffered currency </label>
                            <div className=' text-start w-full ' >
                                <div className="form-currency-dropdown w-fit rounded-lg px-2 py-2">
                                    <span className='text-[13.5px] font-medium'>Nigerian Naira - NGN</span>
                                    <span></span>
                                </div>
                            </div>

                        </div>


                        <div className='pt-6 mx-auto flex gap-5'>
                            <button type='submit' onSubmit={editStatus === 'edit' ? handleEditClient : handleCreateClient} className='bg-green p-2 rounded-lg flex items-center justify-center gap-1'>
                                <span><img src={save} alt='save client' /></span>
                                <span className='capitalize text-[0.85rem] font-semibold'>{editStatus ? 'edit ' : 'save '} client</span>
                            </button>


                            <button onClick={() => onCloseClient(false)} className='gray-twentypercent bg-white p-2 rounded-lg flex items-center justify-center gap-1'>
                                <span><img src={cancel} alt='save client' /></span>
                                <span className='capitalize text-[0.85rem]'>Cancel</span>
                            </button>

                        </div>
                    </form>

                </div>

            </div>
        </div>

    )
}

export default AddClient;