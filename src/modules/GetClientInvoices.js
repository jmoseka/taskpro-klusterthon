import data from "../Database/ClientsData";

function getClientInvoices(clientName) {
    const client = data.find(client => client.name.toLowerCase() === clientName.toLowerCase());
    if (client) {
        return client.invoice;
    }
}

export {getClientInvoices}