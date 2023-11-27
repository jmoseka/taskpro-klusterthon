import paid from '../../../icons/0.75x/paid.png';
import unpaid from '../../../icons/0.75x/unpaid.png';

import './TableInvoice.css';
import { getClientInvoices } from '../../../modules/GetClientInvoices';
import { useEffect, useState } from 'react';
import axios from 'axios';
import GetToken from '../../../modules/GetToken';


function DashboardTableInvoice({ clientID, clientName, invoiceStatus }) {
    const [dataInvoice, setDataInvoice] = useState([])

    const fetchInvoice = async (clientID) => {
        try {
            const invoices = await axios.get(`https://bizhub-8955b30ff7e1.herokuapp.com/order/filter/${clientID}/`, {
                headers: {
                    Authorization: `Token ${GetToken()}`,
                },
            });
            setDataInvoice(invoices.data);
        } catch (error) {
            return [];
        }
    }

    

    useEffect(() => {
        fetchInvoice(clientID);
    }, [clientID]);

    let filterArray = {};

    if (invoiceStatus === 2) {
        filterArray = dataInvoice.filter(invoice => invoice.billing_status === false);

    } else if (invoiceStatus === 1) {
        filterArray = dataInvoice.filter(invoice => invoice.billing_status === true);
    } else {
        filterArray = dataInvoice;
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
                    filterArray !== undefined & filterArray.length > 0 ?
                        filterArray.map((item, index) => (
                            <tr className=' text-sm' key={index}>
                                <td className='mx-auto flex items-center justify-center'>
                                    <img className='p-1' src={item.billing_status === true ? paid : unpaid} alt='paid status' />
                                </td>
                                <td>{item.id}</td>
                                <td>{item.due_date}</td>
                                <td>{item.description}</td>
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