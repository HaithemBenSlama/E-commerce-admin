"use client";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Layout from "@/components/Layout";
import Popup from "@/components/PopupDelete";
import TableProduct from "@/components/TableProduct";
import Title from "@/components/Title";
import React, { useState } from "react";
import { useMemo } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { PiNotePencilBold } from "react-icons/pi";
import ItemName from "./Components/Table/ItemName";
import Category from "./Components/Table/Category";
import Stock from "./Components/Stock";
import Rating from "./Components/Rating";
import Sales from "./Components/Sales";
import { useRouter } from "next/navigation";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { Model } from "./Components/Model/Model";
import { dataProducts } from "./variables/data";

export default function Products() {
  const router = useRouter();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleDelete = (row) => {
    console.log("Deleting product: " + selectedRow.original?.p_name);
  };
  const handleUpdate = (row) => {
    setSelectedRow(row);
    router.push("/products/update_product/" + row.original?.p_id);
  };
  const handleInformation = (row) => {
    setSelectedRow(row);
    setIsVisible(true);
  };

  const openPopup = (row) => {
    setSelectedRow(row);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const columns = useMemo(
    () => [
      {
        Header: "N°",
        accessor: (row, index) => index + 1,
      },
      {
        Header: "Product Name",
        accessor: ({ p_name, p_photo }) => (
          <ItemName name={p_name} hrefImg={p_photo} />
        ),
      },
      {
        Header: "Category",
        accessor: ({ p_category }) => <Category category={p_category} />,
      },
      {
        Header: "Stock",
        accessor: ({ p_stock }) => <Stock stock={p_stock} />,
      },
      {
        Header: "Brand",
        accessor: "p_brand",
      },
      {
        Header: "Rating",
        accessor: ({ p_rating }) => <Rating rate={p_rating} />,
      },
      {
        Header: "Sales",
        accessor: ({ p_sales }) => <Sales sales={p_sales} />,
      },
      {
        Header: "Revenue",
        accessor: "p_revenue",
      },
      {
        Header: "Actions",
        Cell: ({ row }) => (
          <div className="flex gap-1">
            <MdDeleteOutline
              className="text-lg hover:cursor-pointer hover:scale-150 hover:duration-300 hover:text-red-500"
              onClick={() => openPopup(row)}
            />
            <PiNotePencilBold
              className="text-lg hover:cursor-pointer hover:scale-150 hover:duration-300 hover:text-yellow-500"
              onClick={() => handleUpdate(row)}
            />
            <HiOutlineInformationCircle
              className="text-lg hover:cursor-pointer hover:scale-150 hover:duration-300 hover:text-blue-500"
              onClick={() => handleInformation(row)}
            />
          </div>
        ),
      },
    ],
    []
  );
  const data = useMemo(() => dataProducts, []);
  return (
    <Layout>
      <Breadcrumbs terminalPath={"Products"} />

      <Title text={"Product Management"} />
      <p className="mb-4 mx-10 text-lg font-normal text-gray-500">
        Take full control of our store's products with our Product Management
        Page. Add, delete, and edit items effortlessly to ensure an optimal
        shopping experience for our customers.
      </p>
      <TableProduct
        columns={columns}
        data={data}
        categories={[{ id: 1, name: "Apple", nb_product: "15" }]}
      />
      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
        onDelete={handleDelete}
      />
      <Model
        data={selectedRow?.original}
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
      />
    </Layout>
  );
}
