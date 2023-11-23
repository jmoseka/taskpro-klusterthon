import edit from '../../../icons/0.75x/edit.png';
import add from '../../../icons/0.75x/plus-gray.png';

function ClientList() {

    const dataClients = [
        'Dangote refineries',
        'Total energies',
        'Refine labs and products',
        'JKK franchise limited',
        'Dangote refineries',
        'Total energies',
        'Refine labs and products',
        'JKK franchise limited',
        'Dangote refineries',
        'Total energies',
        'Refine labs and products',
        'JKK franchise limited'
    ]


    return (
        <ul className='py-4 flex flex-col gap-2 min-h[200px]'>
            {
                dataClients.map((client, index) => (
                    <li key={`${index}${client[0]}`} className="bg-grey w-full py-2">
                <div className="px-7 flex justify-between">
                    <span className="flex items-center gap-6">
                        <button type="button" className="border border-white p-2 bg-white rounded-lg text-icon-container gap-2">
                            <img src={edit} alt="edit icon" />
                            <span className="text-[0.8rem]">Edit</span>
                        </button>

                        <p className="capitalize text-sm font-medium">{client}</p>
                    </span>


                    <button type="button" className="rounded-lg p-[0.3rem] bg-white text-icon-container gap-2 border border-white">
                        <img src={add} alt="add client icon" />
                        <span className="text-[0.8rem] capitalize">Add contacts</span>
                    </button>
                </div>
            </li>
                ))
            }
        </ul>
    )
}

export default ClientList;