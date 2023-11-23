import './AddClient.css'
import save from '../../../icons/0.75x/save.png';
import cancel from '../../../icons/0.75x/trash.png';


function AddClient({ onCloseClient, onSaveClient }) {
    return (
        <div className="card pt-8 pb-4">
            <div className="flex flex-col gap-3">
                <div className="flex flex-col items-start px-7 gap-2">
                    <p className="normal-case font-semibold">New client </p>
                    <span className="text-sm italic">Once you  have added a client, you can add contacts and projects</span>
                </div>

                <span className="line h-[1px] w-full bg-grey"></span>
            </div>

            <form className="py-4 flex flex-col items-start px-7  gap-4">

                <div className='form-control'>
                    <label htmlFor='firstName'>Client name </label>
                    <input
                        type='text'
                        id='firstName'
                        name='firstName'

                    />

                </div>

                <div className='form-control'>
                    <label htmlFor='firstName'>Address </label>
                    <input
                        type='text'
                        id='firstName'
                        name='firstName'

                    />

                </div>

                <div className='form-control'>
                    <label htmlFor='firstName'>Task details </label>
                    <input
                        type='text'
                        id='firstName'
                        name='firstName'

                    />

                </div>

                <div className='form-currency w-full flex items-center'>
                    <label htmlFor='curreny' className='normal-case text-start font-medium w-72'>Preffered currency </label>
                    <div className=' text-start w-full ' >
                        <div className="form-currency-dropdown w-fit rounded-lg px-2 py-2">
                            <span className='text-sm font-medium'>Account default (Nigerian Naira - NGN)</span>
                            <span></span>
                        </div>
                    </div>

                </div>


                <div className=' mx-auto flex gap-5'>
                    <button onClick={() => onSaveClient(false)} className='bg-green p-2 rounded-lg flex items-center justify-center gap-1'>
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
    )
}

export default AddClient;