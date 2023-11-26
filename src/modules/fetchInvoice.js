import axios from "axios";
import GetToken from "./GetToken";

const fetchInvoice = async (clientID) => {
    const invoices = await axios.get(`https://bizhub-8955b30ff7e1.herokuapp.com/order/filter/${clientID}/`, {
        headers: {
            Authorization: `Token ${GetToken()}`,
        },
    });
  

    console.log(invoices.data);
}

export default fetchInvoice;