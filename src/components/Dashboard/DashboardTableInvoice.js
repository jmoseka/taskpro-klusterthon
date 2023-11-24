import paid from '../../icons/0.75x/paid.png';
import unpaid from '../../icons/0.75x/unpaid.png';

import './TableInvoice.css';
import data from '../../Database/ClientsData';
import { useState } from 'react';

function getClientInvoices(clientName) {
    const client = data.find(client => client.name.toLowerCase() === clientName.toLowerCase());
    if (client) {
        return client.invoice;
    }
}

function DashboardTableInvoice({ clientName, invoiceStatus }) {

    let listInvoice = {}
    let filterArray = {};

    if (getClientInvoices(clientName) !== undefined) {
        listInvoice = getClientInvoices(clientName)
    }

    if (invoiceStatus === 2) {
        filterArray = listInvoice.filter(invoice => invoice.status === false);
        console.log(filterArray);
    } else if (invoiceStatus === 1) {
        filterArray = listInvoice.filter(invoice => invoice.status === true);
    } else {
        filterArray = listInvoice;
    }





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
                    filterArray !== undefined & listInvoice.length > 0 ?
                        filterArray.map((item, index) => (
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

export default DashboardTableInvoice;