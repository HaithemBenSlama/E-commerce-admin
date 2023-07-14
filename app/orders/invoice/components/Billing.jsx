import React from "react";
import PaymentMethod from "../../components/table/PaymentMethode";

const Billing = () => {
  return (
    <section className="mt-5 mx-5 shadow-lg rounded-lg p-5 space-y-3">
      <h2 className="text-xl uppercase underline">Billing Address: </h2>
      <ul>
        <li>
          <span className="font-bold">Full Name: </span>
          Haithem Ben Slama
        </li>
        <li>
          <span className="font-bold">Street Address: </span>
          Sahabi 4, AFH
        </li>
        <li>
          <span className="font-bold">City,ST ZIP Code: </span>
          Tunisia, Kairouan 3100
        </li>
        <li className="flex">
          <span className="font-bold mt-5 mr-5 ">Payment Method: </span>
          <PaymentMethod payment={"Bitcoin"} />
        </li>
      </ul>
    </section>
  );
};

export default Billing;
