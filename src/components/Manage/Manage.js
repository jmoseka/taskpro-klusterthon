import MessageBoard from "../MessageBoard/MessageBoard";

import { useState } from "react";
import AddClient from "./AddClient/AddClient";
import ManageClient from "./ManageClient/ManageClient";

function Manage() {

    const [openClient, setOpenClient] = useState(false)
    const [editClient, setEditClient] = useState('')

    const handleOpenClient = (selection) => {
        setOpenClient(selection);
    }

    const handleCloseClient = (selection) => {
        setOpenClient(selection);
        setEditClient('')
    }

    const handleSaveClient = (selection) => {
        setOpenClient(selection)
        setEditClient('')
    }

    const handleEditClient = (selection, name) => {
        setOpenClient(selection)
        setEditClient(name)
    }



    return (
        <div className="h-fit flex flex-col gap-5 relative">
            <MessageBoard />
            {
                openClient === true ?
                    <AddClient editClient={editClient}   onCloseClient={handleCloseClient} onSaveClient={handleSaveClient}  />
                    :
                    <ManageClient editClient={editClient} onEditClient={handleEditClient}  onAddClient={handleOpenClient} />
            }


        </div>
    );
}

export default Manage;