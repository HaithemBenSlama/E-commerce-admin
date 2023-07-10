import React from "react";

export default function Table({ list }) {
  // Calculate the total amount
  const total = list.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.amount;
  }, 0);

  return (
    <>
      <table width="100%" className="mb-10 border-2 border-gray-300">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Name</td>
            <td className="font-bold">Description</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item?.id} className="h-14 border-b border-gray-400">
              <td>{item?.name}</td>
              <td>{item?.description}</td>
              <td>{item?.quantity}</td>
              <td>{item?.price + "$"}</td>
              <td>{item?.amount + "$"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
          Total: {total + " $"}
        </h2>
      </div>
    </>
  );
}
