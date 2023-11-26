import axios from 'axios';
import data from '../Database/ClientsData'
import GetToken from './GetToken';

const getClient = (clientName) => {
    const client = data.find(client => client.name.toLowerCase() === clientName.toLowerCase());
    if (client) {
        return client.invoice;
    }
}

const getAllClients = async () => {
    const allClients = await axios.get('https://bizhub-8955b30ff7e1.herokuapp.com/client/all-clients/', {
        headers: {
            Authorization: `Token ${GetToken()}`,
        },
    });

    // allClients.data = data.map(client => client.name);
    console.log(allClients.data);
    return allClients.data;
}

export { getClient, getAllClients };