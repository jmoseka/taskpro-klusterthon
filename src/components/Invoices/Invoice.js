import { useState } from "react";
import MessageBoard from "../MessageBoard/MessageBoard";
import AddInvoice from "./AddInvoice/AddInvoice";
import ListInvoice from "./ListInvoice/ListInvoice";

function Invoice() {
    const [openInvoice, setOpenInvoice] = useState(true)

    const handleOpenInvoice = (selection) => {
        setOpenInvoice(selection);
    }

    const handleCloseInvoice = (selection) => {
        setOpenInvoice(selection);
    }

    const handleSaveInvoice = (selection) => {
        setOpenInvoice(selection);
    }

    return (
        <div className="h-fit flex flex-col gap-5 ">
            <MessageBoard />

    
                {
                    openInvoice === true ?
                    <AddInvoice onCloseInvoice={handleCloseInvoice} onSaveClient={handleSaveInvoice} />
                    :
                    <ListInvoice onAddInvoice={handleOpenInvoice} />
            }
            
        </div>
    );
}

export default Invoice;