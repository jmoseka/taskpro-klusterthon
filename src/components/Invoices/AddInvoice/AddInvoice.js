import arrowdown from '../../../icons/0.75x/arrow-down.png'
import trash from '../../../icons/0.75x/trash.png'

import './AddInvoice.css';

function AddInvoice() {

    return (
        <div className="card py-3">

            <div className='border-b-[1px] border-b-grey pb-3'>
                <div className="px-7 flex flex-col items-start gap-2">
                    <p className="capitalize font-semibold">New Invoices</p>

                    <button type="button" className="w-64 flex items-center justify-between gap-3 rounded-lg border py-2 px-3">
                        <span className="font-medium text-sm capitalize">Dangote </span>
                        <span><img src={arrowdown} alt="add client" /></span>
                    </button>
                </div>
            </div>


            <form className='px-8 pt-2'>
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

                <div className='form-ctrl normal-case'>
                    <label htmlFor='firstName'>Due date </label>
                    <input
                        type='text'
                        id='firstName'
                        name='firstName'
                    />

                </div>


                <div className='form-ctrl normal-case'>
                    <label htmlFor='firstName'>invoice title </label>
                    <input
                        type='text'
                        id='firstName'
                        name='firstName'
                    />

                </div>


                {/* table descriptions */}

                <table className='w-full '>
                    <thead>
                        <tr className='bg-grey capitalize'>
                            <th className='w-64 p-2  font-normal text-center'>Item type</th>
                            <th className='text-start p-2 font-normal'>Description</th>

                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td className='w-48 flex items-start pt-3'>
                                <div className='flex justify-between gap-6'>
                                    <button type="button" className="flex items-center justify-between gap-3 rounded-lg border p-2">
                                        <span><img src={trash} alt="trash button" /></span>
                                    </button>

                                    <button type="button" className="w-full flex items-center justify-between gap-3 rounded-lg border py-2 px-3">
                                        <span className="font-medium text-sm capitalize">Service </span>
                                        <span><img src={arrowdown} alt="add client" /></span>
                                    </button>
                                </div>


                                
                            </td>


                            <td className='pt-3'>
                                <div className='h-[135px] border border-grey rounded-lg'>
                                    <textarea className='w-full h-full' type='text' placeholder='description' />
                                 
                                </div>
                            </td>

                        </tr>

                    </tbody>
                </table>




            </form>






        </div>
    )
}

export default AddInvoice;