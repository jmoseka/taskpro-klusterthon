import { useState } from "react";

function Invoice() {
    const [openInvoice, setOpenInvoice] = useState(false)

    const handleOpenInvoice = (selection) => {
        setOpenInvoice(selection);
    }

    const handleCloseInvoice = (selection) => {
        setOpenInvoice(selection);
    }


    return (
        <div className="">
            
        </div>
    );
}

export default Invoice;