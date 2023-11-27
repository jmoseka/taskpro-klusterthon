import { useState } from "react";
import AddInvoice from "./AddInvoice/AddInvoice";
import ListInvoice from "./ListInvoice/ListInvoice";

function Invoice() {
    const [openInvoice, setOpenInvoice] = useState(false)
    const [dataNames, setDataNames] = useState([])
    const [clientId, setClientId] = useState('')

    const handleOpenInvoice = (selection, data, id) => {
        setOpenInvoice(selection);
        setDataNames(data)
        setClientId(id)
    }

    const handleCloseInvoice = (selection) => {
        setOpenInvoice(selection);
    }

    const handleSaveInvoice = (selection) => {
        setOpenInvoice(selection);
    }

    return (
        <div className=" flex flex-col gap-5  ">
                {
                    openInvoice === true ?
                    <AddInvoice dataNameInvoice={dataNames} clientInvoiceId={clientId} onCloseInvoice={handleCloseInvoice} onSaveInvoice={handleSaveInvoice} />
                    :
                    <ListInvoice onAddInvoice={handleOpenInvoice} dataNameInvoice={dataNames} clientInvoiceId={clientId} />
            }
            
        </div>
    );
}

export default Invoice;