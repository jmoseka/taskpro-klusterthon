import { useState } from "react";
import AddClient from "./AddClient/AddClient";
import ManageClient from "./ManageClient/ManageClient";

function Manage() {

    const [openClient, setOpenClient] = useState(false)
    const [editStatus, setEditStatus] = useState('')
    const [clientId, setClientId] = useState('');
    const [editClientName, setEditClientName] = useState('')
    const [editClientEmail, setEditClientEmail] = useState('');
    const [editClientAddress, setEditClientAddress] = useState('');
    const [editClientTask, setEditClientTask] = useState('');
    const [editClientContact, setEditClientContact] = useState('');


    const handleOpenClient = (selection) => {
        setOpenClient(selection);
        setEditStatus('')
    }

    const handleCloseClient = (selection) => {
        setOpenClient(selection);
        setEditStatus('')
        
    }

    const handleSaveClient = (selection) => {
        setOpenClient(selection)
        setEditStatus('')
    }

    const handleEditClient = (selection, status, name, id, email, address, task, contact) => {
        setOpenClient(selection)
        setEditStatus(status)
        setEditClientName(name)
        setEditClientEmail(email)
        setEditClientAddress(address)
        setEditClientTask(task)
        setEditClientContact(contact)
        setClientId(id);
    }


    return (
        <div className="h-fit flex flex-col gap-5 relative">
           
            {
                openClient === true ?
                    <AddClient editStatus={editStatus} editClientName={editClientName} editClientId={clientId} editClientEmail={editClientEmail}
                     editClientAddress={editClientAddress} editClientTask={editClientTask} editClientContact={editClientContact}  onCloseClient={handleCloseClient} onSaveClient={handleSaveClient}  />
                    :
                    <ManageClient onEditClient={handleEditClient}  onAddClient={handleOpenClient} />
            }


        </div>
    );
}

export default Manage;