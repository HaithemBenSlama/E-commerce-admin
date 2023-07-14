"use client";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Layout from "@/components/Layout";
import Title from "@/components/Title";
import React, { useState } from "react";
import { useMemo } from "react";
import TableOrders from "@/components/TableOrders";
import { FaRegFilePdf } from "react-icons/fa";
import TransactionCol from "./components/table/TransactionCol";
import PaymentMethode from "./components/table/PaymentMethode";
import BadgeOrder from "./components/table/BadgeOrder";
import { dataOrders } from "./variables/data";
import { useRouter } from "next/navigation";

export default function Orders() {
  const [selectedRow, setSelectedRow] = useState(null);
  const router = useRouter();
  const handleInvoice = (row) => {
    setSelectedRow(row);
    router.push("/orders/invoice/" + row.original?.o_id);
  };
  const columns = useMemo(
    () => [
      {
        Header: "N°",
        accessor: (row, index) => index + 1,
      },
      {
        Header: "Transactions",
        accessor: ({ o_text, o_idOrder }) => (
          <TransactionCol text={o_text} specialText={o_idOrder} />
        ),
      },
      {
        Header: "User ID",
        accessor: "o_userId",
      },
      {
        Header: "Date & Time",
        accessor: ({ o_date }) => <div className="text-gray-500">{o_date}</div>,
      },
      {
        Header: "Amount",
        accessor: ({ o_amount }) => (
          <div className="text-gray-700 font-bold ">{o_amount}</div>
        ),
      },
      {
        Header: "Payment Method",
        accessor: ({ o_payment }) => <PaymentMethode payment={o_payment} />,
      },
      {
        Header: "Status",
        accessor: ({ o_status }) => <BadgeOrder status={o_status} />,
      },
      {
        Header: "Invoice",
        Cell: ({ row }) => (
          <div className="flex">
            <FaRegFilePdf
              className="text-lg hover:cursor-pointer hover:scale-150 hover:duration-300 hover:text-orange-500"
              onClick={() => handleInvoice(row)}
            />
          </div>
        ),
      },
    ],
    []
  );
  const data = useMemo(() => dataOrders, []);
  return (
    <Layout>
      <Breadcrumbs terminalPath={"Orders"} />

      <Title text={"Booking History"} />
      <p className="mb-4 mx-10 text-lg font-normal text-gray-500 dark:text-gray-400">
        This is a list of latest transactions
      </p>
      <TableOrders columns={columns} data={data} />
    </Layout>
  );
}
