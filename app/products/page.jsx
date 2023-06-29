"use client";
import Layout from "@/components/Layout";
import Search from "@/components/Search";
import TablePagination from "@/components/TablePagination";
import Title from "@/components/Title";
import { Link } from "lucide-react";
import React from "react";
import { useMemo } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { PiNotePencilBold } from "react-icons/pi";

export default function Products() {
  const columns = useMemo(
    () => [
      {
        Header: "N°",
        accessor: (row, index) => index + 1,
      },
      {
        Header: "Name",
        accessor: "p_name",
      },
      {
        Header: "SKU",
        accessor: "p_sku",
      },
      {
        Header: "Quantity",
        accessor: "p_quantity",
      },
      {
        Header: "Price",
        accessor: "p_price",
      },
      {
        Header: "Discount",
        accessor: "p_discount",
      },
      {
        Header: "Actions",
        Cell: ({ row }) => (
          <div className="flex gap-5">
            <MdDeleteOutline className="text-lg hover:cursor-pointer hover:scale-150 hover:duration-300 hover:text-red-500" />
            <PiNotePencilBold className="text-lg hover:cursor-pointer hover:scale-150 hover:duration-300 hover:text-yellow-500" />
          </div>
        ),
      },
    ],
    []
  );
  return (
    <Layout>
      <nav class="flex m-4 " aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <a
              href="#"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                class="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Admin
            </a>
          </li>
          <li>
            <div class="flex items-center">
              <svg
                class="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <a
                href="#"
                class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                Products
              </a>
            </div>
          </li>
        </ol>
      </nav>
      <Title text={"Product management"} />
      <Search />
      <TablePagination
        columns={columns}
        data={[
          {
            p_name: "iphone 11 pro max",
            p_sku: "RFKIO152S",
            p_quantity: 10,
            p_price: 2966,
            p_discount: "25%",
          },
          {
            p_name: "iphone 11 pro max",
            p_sku: "RFKIO152S",
            p_quantity: 10,
            p_price: 2966,
            p_discount: "25%",
          },
          {
            p_name: "iphone 11 pro max",
            p_sku: "RFKIO152S",
            p_quantity: 10,
            p_price: 2966,
            p_discount: "25%",
          },
          {
            p_name: "iphone 11 pro max",
            p_sku: "RFKIO152S",
            p_quantity: 10,
            p_price: 2966,
            p_discount: "-",
          },
          {
            p_name: "iphone 11 pro max",
            p_sku: "RFKIO152S",
            p_quantity: 10,
            p_price: 2966,
            p_discount: "25%",
          },
          {
            p_name: "iphone 11 pro max",
            p_sku: "RFKIO152S",
            p_quantity: 10,
            p_price: 2966,
            p_discount: "25%",
          },
          {
            p_name: "iphone 11 pro max",
            p_sku: "RFKIO152S",
            p_quantity: 10,
            p_price: 2966,
            p_discount: "25%",
          },
          {
            p_name: "iphone 11 pro max",
            p_sku: "RFKIO152S",
            p_quantity: 10,
            p_price: 2966,
            p_discount: "25%",
          },
          {
            p_name: "iphone 11 pro max",
            p_sku: "RFKIO152S",
            p_quantity: 10,
            p_price: 2966,
            p_discount: "25%",
          },
        ]}
      ></TablePagination>
      <div className="ml-6">
        <button
          href="/products/new_Product"
          class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:ring-gray-200 hover:bg-gray-800"
        >
          Add new product
        </button>
      </div>
    </Layout>
  );
}
