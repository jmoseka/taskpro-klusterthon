import axios from "axios";
import GetToken from "./GetToken";

const FetchAllClients = async () => {
    const allClients = await axios.get('https://bizhub-8955b30ff7e1.herokuapp.com/client/all-clients/', {
        headers: {
            Authorization: `Token ${GetToken()}`,
        },
    });

    // allClients.data = data.map(client => client.name);
    return allClients.data;
}

export default FetchAllClients;