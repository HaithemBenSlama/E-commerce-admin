import React from "react";

export default function Table({ list }) {
  const total = list.reduce((accumulator, currentItem) => {
    const amount = currentItem.quantity * currentItem.price;
    return accumulator + amount;
  }, 0);

  return (
    <>
      <table width="100%" className="mb-10 border-1 border-gray-300">
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
              <td>{item?.price * item?.quantity + "$"}</td>
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
