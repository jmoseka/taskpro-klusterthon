import axios from "axios";
import { useEffect, useState } from "react";

const PayInvoice = ({ getUnpaidInvoiceID, clientID }) => {
  const [InvoiceData, setInvoiceData] = useState({
    address: "N/A",
    amount: 2500,
    client: 24,
    date_created: "2023-11-27T19:57:18.448809Z",
    phone: "",
    ref: "",
  });


  useEffect(() => {
    const InvoiceDataFetch = async () => {
      await axios
        .post(
          `https://bizhub-8955b30ff7e1.herokuapp.com/payment/initiate/${getUnpaidInvoiceID}/`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          setInvoiceData(response.data);
        })
        .catch((error) => {
          return error;
        });
    };
    InvoiceDataFetch();
  }, [ getUnpaidInvoiceID]);

  return (
    <div className="px-16 card py-8">
      <div className=" flex items-center justify-between pb-10">
        <div>
          <img
            src="assets/BizHubLogo.png"
            alt="biz hub logo"
            className="w-52"
          />
        </div>
        <div className="text-end">
          <h2 className="text-5xl font-normal">Invoice</h2>
          <p>Bizhub Business</p>
          <p>{InvoiceData.email}</p>
          <p>{InvoiceData.address}</p>
          <p>{InvoiceData.phone}</p>
        </div>
      </div>
      <hr className="pt-10 pb-4"/>
      <div className="flex items-center justify-between">
        <div>
        <h4 className="text-xl">BILL TO</h4>
        <p>{InvoiceData.client}</p>
        </div>
        <div className="flex flex-col gap-3 text-end">
        <p> <span className="font-medium">Invoice Number:</span> {InvoiceData.order}</p>
        <p> <span className="font-medium">Invoice Date:</span> {new Date(InvoiceData.date_created).toLocaleString()}</p>
        <div className="px-2 py-1 w-fit ml-auto text-xl bg-[#E6E6E6]">Amount Due(NGN): <span>{InvoiceData.amount}</span></div>
        </div>
      </div>
    </div>
  );
};

export default PayInvoice;
