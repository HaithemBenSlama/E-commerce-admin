import React from "react";

const InvoiceInfo = () => {
  return (
    <article className="my-5 flex items-end justify-end">
      <ul>
        <li>
          <span className="font-bold">Invoice Number: </span>
          #99999
        </li>
        <li>
          <span className="font-bold">Invoice Date: </span>
          14/04/2023
        </li>
        <li>
          <span className="font-bold">Due Date: </span>
          23/04/2023
        </li>
      </ul>
    </article>
  );
};

export default InvoiceInfo;
