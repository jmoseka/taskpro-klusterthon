import './AddClient.css'
import save from '../../../icons/0.75x/save.png';
import cancel from '../../../icons/0.75x/trash.png';
import success from '../../../icons/1x/check_small.png'
import { useEffect, useState } from 'react';
import GetToken from '../../../modules/GetToken';
import axios from 'axios';


const AddClient = ({ editClientId, editStatus, editClientName, editClientEmail, editClientAddress, editClientTask, editClientContact, onCloseClient, onSaveClient }) => {
    const [loadingAnime, setLoadingAnime] = useState(null);
    const initialValues = { client: '', email: '', address: '', task: '', contact: null }
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [overlay, setOverlay] = useState(false);
    const [notice, setNotice] = useState('')


    useEffect(() => {
        setOverlay(true)

        setTimeout(() => {
            setOverlay(false)
            if (editStatus === 'edit') {

                const res = { client: editClientName, email: editClientEmail, address: editClientAddress, task: editClientTask, contact: editClientContact }
                setFormValues(res)

            }
        }, 1000);



    }, [editStatus, editClientName, editClientEmail, editClientContact, editClientAddress, editClientTask]); // Add dependencies as needed



    const handleCreateClient = (event) => {
        event.preventDefault();
        const headers = {
            Authorization: `Token ${GetToken()}`,
        };


        setFormErrors(validate(formValues))
        if (formValues.client && formValues.email && formValues.address && formValues.task && formValues.contact) {
            setOverlay(true)
            setLoadingAnime(true)

            const postData = {
                name: formValues.client,
                email: formValues.email,
                address: formValues.address,
                task_details: formValues.task,
                contact: formValues.contact
            };

            axios.post('https://bizhub-8955b30ff7e1.herokuapp.com/client/create/', postData, { headers })
                .then(response => {
                    setNotice('Client created successfully!')
                    setLoadingAnime(false);
                    setTimeout(() => {

                        setOverlay(false)
                        onSaveClient(false)
                    }, 3000);
                    return response.data;
                })
                .catch(error => {
                    setLoadingAnime(false);
                    setNotice('Please try again')
                    setTimeout(() => {
                        setFormValues(initialValues);
                        setOverlay(false)
                    }, 2000);
                    return error;
                });


        }


        //     name: clientName,
        //     email: clientEmail,
        //     address: clientAddress,
        //     task_details: clientTask,
        //     contact: clientContact
        // };
        // setLoadingAnime(!loadMessage)

        // axios.post('https://bizhub-8955b30ff7e1.herokuapp.com/client/create/', postData, { headers })
        //     .then(response => {
        //         setLoadMessage(!loadMessage)
        //         setLoadingAnime(false);
        //         setTimeout(() => {
        //             onSaveClient(false)
        //         }, 2000);
        //         return response.data;
        //     })
        //     .catch(error => {
        //         return error;
        //     });

    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }

    const validate = (values) => {
        const errors = {}
        const regex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        if (!values.client) {
            errors.client = 'Name is required'
        }
        if (!values.email) {
            errors.email = 'Email is required'
        } else if (!regex.test(values.email)) {
            errors.email = 'Please enter a valid email';
        }

        if (!values.address) {
            errors.address = 'Address is required'
        }
        if (!values.task) {
            errors.task = 'Task is required'
        } else if (values.task.length > 50) {
            errors.task = 'Please give a short description'
        }

        if (!values.contact) {
            errors.contact = 'Contact is required'
        } else if (values.contact.length > 14) {
            errors.contact = 'Please enter a valid number'
        }

        return errors
    }


    const handleEditClient = (event) => {
        event.preventDefault();
        const headers = {
            Authorization: `Token ${GetToken()}`,
        };

        setFormErrors(validate(formValues))
        if (formValues.client && formValues.email && formValues.address && formValues.task && formValues.contact) {
            setOverlay(true)
            setLoadingAnime(true)

            const postData = {
                name: formValues.client,
                email: formValues.email,
                address: formValues.address,
                task_details: formValues.task,
                contact: formValues.contact
            };


            axios.put(`https://bizhub-8955b30ff7e1.herokuapp.com/client/update/${editClientId}/`, postData, { headers })
                .then(response => {
                   
                    setNotice('Client updated successfully!')
                    setLoadingAnime(false);
                    setTimeout(() => {
                        setFormValues(initialValues);
                        setOverlay(false)
                        onSaveClient(false)
                    }, 2000);
                    return response.data;
                })
                .catch(error => {
                
                    setLoadingAnime(false);
                    setNotice('Please try again')
                    setTimeout(() => {
                        setFormValues(initialValues);
                        setOverlay(false)
                    }, 2000);
                    return error;
                });

        }




    }



    return (
        <div className='py-9'>
            <div className="card relative">
                {
                    overlay === true ?
                        <div className='modal-blur'>
                            {
                                loadingAnime === true ?
                                    <div className='position-loader'>
                                        <div class="custom-loader mx-auto"></div>
                                    </div>
                                    :
                                    ''
                            }

                            {
                                loadingAnime === false ?
                                    <div className='addmodal'>
                                        <span className='flex flex-col justify-center items-center gap-4'>
                                            <span>{editStatus === 'edit' ? notice : notice}</span>
                                            <span><img src={success} alt='green check tick box' /></span>
                                        </span>
                                    </div>
                                    :
                                    ''
                            }

                        </div>
                        :
                        ''
                }



                <div className='pt-8 pb-4'>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col items-start px-7">
                            <p className=" font-semibold">{editStatus === 'edit' ? 'Update Client' : 'New client '}</p>

                        </div>

                        <span className="line h-[1px] w-full bg-grey"></span>
                    </div>

                    <form onSubmit={editStatus === 'edit' ? handleEditClient : handleCreateClient} className="py-4 flex flex-col items-start px-7  gap-4">

                        <div className='form-control'>
                            <label htmlFor='clientName'>Client name </label>
                            <div className='w-full'>
                                <input
                                    type='text'
                                    id='clientName'
                                    name='client'
                                    value={formValues.client}
                                    onChange={handleOnChange}
                                />

                                <p className='error-mg'>{formErrors.client}</p>
                            </div>

                        </div>

                        <div className='form-control'>
                            <label htmlFor='emailAddress'>Email address </label>
                            <div className='w-full'>
                                <input

                                    type='text'
                                    id='emailAddress'
                                    name='email'
                                    value={formValues.email}
                                    onChange={handleOnChange}

                                />
                                <p className='error-mg'>{formErrors.email}</p>
                            </div>

                        </div>

                        <div className='form-control'>
                            <label htmlFor='addressClient'>Address </label>
                            <div className='w-full'>
                                <textarea

                                    type='text'
                                    id='addressClient'
                                    name='address'
                                    className="h-[70px] addClientTextarea "
                                    value={formValues.address}
                                    onChange={handleOnChange}

                                />

                                <p className='error-mg'>{formErrors.address}</p>
                            </div>

                        </div>

                        <div className='form-control'>
                            <label htmlFor='taskDetails'>Task details </label>
                            <div className='w-full'>
                                <textarea
                                    type='text'
                                    id='taskDetails'
                                    name='task'
                                    value={formValues.task}
                                    className="h-[120px] addClientTextarea "
                                    onChange={handleOnChange}
                                />

                                <p className='error-mg'>{formErrors.task}</p>
                            </div>
                        </div>

                        <div className='form-control'>
                            <label htmlFor='emailAddress'>Contact </label>
                            <div className='w-full'>
                                <input

                                    type='number'
                                    id='contactClient'
                                    name='contact'
                                    onChange={handleOnChange}
                                    value={formValues.contact}

                                />
                                <p className='error-mg'>{formErrors.contact}</p>
                            </div>
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