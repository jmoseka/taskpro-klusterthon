import './AddClient.css'
import save from '../../../icons/0.75x/save.png';
import cancel from '../../../icons/0.75x/trash.png';
// import data from '../../../Database/ClientsData'
import success from '../../../icons/1x/check_small.png'
import { useState } from 'react';
import GetToken from '../../../modules/GetToken';
import axios from 'axios';


const AddClient = ({ onCloseClient, onSaveClient, editClient }) => {

    // const client = data.find(client => client.name.toLowerCase() === editClient.toLowerCase());
    const [loadMessage, setLoadMessage] = useState(false)
    const [loadingAnime, setLoadingAnime] = useState(false);
    const [clientName, setClientName] = useState()
    const [clientEmail, setClientEmail] = useState()
    const [clientAddress, setClientAddress] = useState()
    const [clientTask, setClientTask] = useState()
    const [clientContact, setClientContact] = useState()

    // let emailClient = ''
    // let addressClient = ''
    // let taskClient = ''

    // if (client) {
    //     const { email, address, task } = client;
    //     emailClient = email;
    //     addressClient = address;
    //     taskClient = task;
    // }

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


    return (
        <div className="card relative">
            <div className={`modal-blur ${loadMessage === true ? 'block' : 'hidden'}`}>
                <div className='modal-window addmodal '>

                    {
                        loadingAnime ?
                            <div className='mx-auto custom-loader'></div>

                            :

                            <span className='flex  flex-col justify-center items-center gap-4'>
                                <span>Client created successfully</span>
                                <span><img src={success} alt='green check tick box' /></span>
                            </span>
                    }
                </div>
            </div>


            <div className='pt-8 pb-4'>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col items-start px-7 gap-2">
                        <p className=" font-semibold">New client </p>
                        <span className="text-sm italic">Once you  have added a client, you can add contacts and projects</span>
                    </div>

                    <span className="line h-[1px] w-full bg-grey"></span>
                </div>

                <form onSubmit={handleCreateClient} className="py-4 flex flex-col items-start px-7  gap-4">

                    <div className='form-control'>
                        <label htmlFor='clientName'>Client name </label>
                        <input
                            type='text'
                            id='clientName'
                            name='clientName'

                            onChange={handleInputChangeName}
                        />

                    </div>

                    <div className='form-control'>
                        <label htmlFor='emailAddress'>Email address </label>
                        <input
                            type='text'
                            id='emailAddress'
                            name='emailAddress'
                            onChange={handleInputChangeEmail}

                        />

                    </div>

                    <div className='form-control'>
                        <label htmlFor='addressClient'>Address </label>
                        <textarea
                            type='text'
                            id='addressClient'
                            name='addressClient'
                            className="h-[70px] addClientTextarea "
                            onChange={handleInputChangeAddress}

                        />

                    </div>

                    <div className='form-control'>
                        <label htmlFor='taskDetails'>Task details </label>
                        <textarea
                            type='text'
                            id='taskDetails'
                            name='taskDetails'
                            className="h-[120px] addClientTextarea "
                            onChange={handleInputChangeTask}
                        />

                    </div>

                    <div className='form-control'>
                        <label htmlFor='emailAddress'>Contact </label>
                        <input
                            type='number'
                            id='contactClient'
                            name='contactClient'
                            onChange={handleInputChangeContact}

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
                        <button type='submit' onSubmit={handleCreateClient} className='bg-green p-2 rounded-lg flex items-center justify-center gap-1'>
                            <span><img src={save} alt='save client' /></span>
                            <span className='capitalize text-[0.85rem] font-semibold'>save client</span>
                        </button>


                        <button onClick={() => onCloseClient(false)} className='gray-twentypercent bg-white p-2 rounded-lg flex items-center justify-center gap-1'>
                            <span><img src={cancel} alt='save client' /></span>
                            <span className='capitalize text-[0.85rem]'>Cancel</span>
                        </button>

                    </div>
                </form>

            </div>




        </div>
    )
}

export default AddClient;