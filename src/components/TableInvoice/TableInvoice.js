import paid from '../../icons/0.75x/paid.png';
import unpaid from '../../icons/0.75x/unpaid.png';

import './TableInvoice.css';
import data from '../../Database/ClientsData';

function getClientInvoices(clientName) {
    const client = data.find(client => client.name.toLowerCase() === clientName.toLowerCase());
    if (client) {
        return client.invoice;
    }
}

function TableInvoice({ clientName }) {
    let listInvoice = {}

    if (getClientInvoices(clientName) !== undefined) {
        listInvoice = getClientInvoices(clientName)
    }




    const data = [
        { status: true, invoice: 'INV001', date: '2023-11-20', title: 'Product A', amount: '$50.00' },
        { status: false, invoice: 'INV002', date: '2023-11-21', title: 'Product B', amount: '$75.00' },
        { status: true, invoice: 'INV001', date: '2023-11-20', title: 'Product A', amount: '$50.00' },
        { status: true, invoice: 'INV002', date: '2023-11-21', title: 'Product B', amount: '$75.00' },
        { status: false, invoice: 'INV002', date: '2023-11-21', title: 'Product B', amount: '$75.00' },
        { status: true, invoice: 'INV001', date: '2023-11-20', title: 'Product A', amount: '$50.00' },
        { status: false, invoice: 'INV002', date: '2023-11-21', title: 'Product B', amount: '$75.00' },
        { status: false, invoice: 'INV002', date: '2023-11-21', title: 'Product B', amount: '$75.00' },
        { status: false, invoice: 'INV002', date: '2023-11-21', title: 'Product B', amount: '$75.00' },
        { status: false, invoice: 'INV002', date: '2023-11-21', title: 'Product B', amount: '$75.00' },
        { status: false, invoice: 'INV002', date: '2023-11-21', title: 'Product B', amount: '$75.00' },

    ];

    return (
        <table className='w-full table-invoice'>
            <thead>
                <tr className='bg-grey '>
                    <th className='w-32'></th>
                    <th>Invoice no</th>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody className="table-invoice-body">
                {
                    listInvoice !== undefined & listInvoice.length > 0 ?
                        listInvoice.map((item, index) => (
                            <tr className=' text-sm' key={index}>
                                <td className='mx-auto flex items-center justify-center'>
                                    <img className='p-1' src={item.status === true ? paid : unpaid} alt='paid status' />
                                </td>
                                <td>{item.invoiceId}</td>
                                <td>{item.date}</td>
                                <td>{item.title}</td>
                                <td>{item.amount}</td>
                            </tr>
                        ))
                        :
                        ''
                }

            </tbody>
        </table>
    )
}

export default TableInvoice;