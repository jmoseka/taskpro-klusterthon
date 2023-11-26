import data from '../Database/ClientsData'

const getClient = (clientName)=> {
    const client = data.find(client => client.name.toLowerCase() === clientName.toLowerCase());
    if (client) {
        return client.invoice;
    }
}

const getAllClients = () => {
    const clientNames = data.map(client => client.name);
    return clientNames;
}

export {getClient, getAllClients};