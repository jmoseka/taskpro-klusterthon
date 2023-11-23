import MessageBoard from "../MessageBoard/MessageBoard";

import { useState } from "react";
import AddClient from "./AddClient/AddClient";
import ManageClient from "./ManageClient/ManageClient";

function Manage() {

    const [openClient, setOpenClient] = useState(false)

    const handleOpenClient = (selection) => {
        setOpenClient(selection);
    }

    const handleCloseClient = (selection) => {
        setOpenClient(selection);
    }

    const handleSaveClient = (selection) => {
        setOpenClient(selection)
    }



    return (
        <div className="h-fit flex flex-col gap-5 ">
            <MessageBoard />
            {
                openClient === true ?
                    <AddClient  onCloseClient={handleCloseClient} onSaveClient={handleSaveClient}  />
                    :
                    <ManageClient onAddClient={handleOpenClient} />
            }


        </div>
    );
}

export default Manage;