import axios from "axios";
import GetToken from "../../../modules/GetToken";

const PayInvoice = ({ getUnpaidInvoiceID, clientID }) => {

    const headers = {
        Authorization: `Token ${GetToken()}`,
    };
    const data = {
        emai: 'ola'
    }

    console.log(getUnpaidInvoiceID);


    axios.post(`https://bizhub-8955b30ff7e1.herokuapp.com/payment/${getUnpaidInvoiceID}/`, data)
        .then(response => {

            console.log('output');
            return response.data;
        })
        .catch(error => {
            return error;
        });


    return (
        <div className="card flex justify-between">
            <div>Logo</div>
            <div>
                <ul></ul>
            </div>
        </div>
    )
}


export default PayInvoice;