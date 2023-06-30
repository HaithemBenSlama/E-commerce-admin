"use client";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Layout from "@/components/Layout";
import TablePagination from "@/components/TablePagination";
import Title from "@/components/Title";
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
        Header: "Product Name",
        accessor: "p_name",
      },
      {
        Header: "Category",
        accessor: "p_category",
      },
      {
        Header: "Brand",
        accessor: "p_brand",
      },
      {
        Header: "Color",
        accessor: "p_color",
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
      <Breadcrumbs terminalPath={"Products"} />

      <Title text={"Product Management"} />
      <p class="mb-4 mx-10 text-lg font-normal text-gray-500 dark:text-gray-400">
        Take full control of our store's products with our Product Management
        Page. Add, delete, and edit items effortlessly to ensure an optimal
        shopping experience for our customers.
      </p>
      <TablePagination
        columns={columns}
        data={[
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
          {
            p_name: "Iphone 11 pro max",
            p_category: "phone",
            p_brand: "Apple",
            p_color: "silver",
            p_discount: "25%",
          },
        ]}
        categories={[{ id: 1, name: "Apple", nb_product: "15" }]}
      />
    </Layout>
  );
}
