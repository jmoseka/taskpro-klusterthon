function TableInvoice() {
    const data = [
        { invoice: 'INV001', date: '2023-11-20', title: 'Product A', amount: '$50.00' },
        { invoice: 'INV002', date: '2023-11-21', title: 'Product B', amount: '$75.00' },
        // ... more data objects
    ];

    return (
        <table border="1" className='w-full table-invoice'>
            <thead>
                <tr className='bg-grey'>
                    <th className='w-32'></th>
                    <th>Invoice no</th>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Amount</th>
                </tr>
            </thead>



            <tbody className="table-invoice-body">
                {data.map((item, index) => (
                    <tr className='text-start text-sm' key={index}>
                        <td className='text-center'>jk</td>
                        <td>{item.invoice}</td>
                        <td>{item.date}</td>
                        <td>{item.title}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableInvoice;