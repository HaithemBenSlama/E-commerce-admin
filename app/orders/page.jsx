"use client";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Layout from "@/components/Layout";
import Title from "@/components/Title";
import React from "react";
import { useMemo } from "react";
import TableOrders from "@/components/TableOrders";
import { FaRegFilePdf } from "react-icons/fa";
import TransactionCol from "./components/table/TransactionCol";
import PaymentMethode from "./components/table/PaymentMethode";
import BadgeOrder from "./components/table/BadgeOrder";

export default function Orders() {
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
            <FaRegFilePdf className="text-lg hover:cursor-pointer hover:scale-150 hover:duration-300 hover:text-orange-500" />
          </div>
        ),
      },
    ],
    []
  );
  const data = useMemo(
    () => [
      {
        o_text: "Payment refund to ",
        o_idOrder: "#986253",
        o_userId: "#105236",
        o_date: "Apr 23,2023",
        o_amount: "$216",
        o_payment: "Paypal",
        o_status: "Cancelled",
      },
      {
        o_text: "Payment to ",
        o_idOrder: "#236521",
        o_userId: "#520136",
        o_date: "Apr 18,2023",
        o_amount: "$2300",
        o_payment: "MasterCard",
        o_status: "Completed",
      },
      {
        o_text: "Payment to ",
        o_idOrder: "#63259",
        o_userId: "#520136",
        o_date: "Apr 6,2023",
        o_amount: "$180",
        o_payment: "Visa",
        o_status: "In progress",
      },
      {
        o_text: "Payment failed to ",
        o_idOrder: "#65432",
        o_userId: "#987654",
        o_date: "Apr 6, 2023",
        o_amount: "$180",
        o_payment: "Maestro",
        o_status: "In progress",
      },
      {
        o_text: "Payment refund to ",
        o_idOrder: "#54321",
        o_userId: "#987654",
        o_date: "Feb 28, 2023",
        o_amount: "$99.99",
        o_payment: "Bitcoin",
        o_status: "In progress",
      },
      {
        o_text: "Payment to ",
        o_idOrder: "#87654",
        o_userId: "#246810",
        o_date: "Mar 15, 2023",
        o_amount: "$225.50",
        o_payment: "Maestro",
        o_status: "Completed",
      },
      {
        o_text: "Payment failed to ",
        o_idOrder: "#23456",
        o_userId: "#135792",
        o_date: "Apr 2, 2023",
        o_amount: "$75.25",
        o_payment: "American Express",
        o_status: "Cancelled",
      },
      {
        o_text: "Payment refund to ",
        o_idOrder: "#98765",
        o_userId: "#654321",
        o_date: "May 12, 2023",
        o_amount: "$150.75",
        o_payment: "Bank Of America",
        o_status: "In progress",
      },
      {
        o_text: "Payment to ",
        o_idOrder: "#54321",
        o_userId: "#987654",
        o_date: "Mar 30, 2023",
        o_amount: "$299.99",
        o_payment: "Maestro",
        o_status: "Completed",
      },
      {
        o_text: "Payment failed to ",
        o_idOrder: "#65432",
        o_userId: "#987654",
        o_date: "Feb 17, 2023",
        o_amount: "$49.99",
        o_payment: "Bitcoin",
        o_status: "Cancelled",
      },
      {
        o_text: "Payment to ",
        o_idOrder: "#87654",
        o_userId: "#246810",
        o_date: "Apr 22, 2023",
        o_amount: "$199.99",
        o_payment: "American Express",
        o_status: "In progress",
      },
      {
        o_text: "Payment refund to ",
        o_idOrder: "#23456",
        o_userId: "#135792",
        o_date: "Mar 7, 2023",
        o_amount: "$125.50",
        o_payment: "Bank Of America",
        o_status: "Completed",
      },
    ],
    []
  );
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
