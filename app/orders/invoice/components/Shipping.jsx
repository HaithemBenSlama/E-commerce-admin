import React from "react";

const Shipping = () => {
  return (
    <section className="mt-5 mx-5 shadow-lg rounded-lg p-5 space-y-3">
      <h2 className="text-xl uppercase underline">Shipping Address: </h2>
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
        <li>
          <span className="font-bold">Phone: </span>
          +216 27 660 834
        </li>
      </ul>
    </section>
  );
};

export default Shipping;
