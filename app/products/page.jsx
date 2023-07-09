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
import Stock from "./Components/Table/Stock";
import Rating from "./Components/Table/Rating";
import Sales from "./Components/Table/Sales";

export default function Products() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleDelete = () => {
    console.log("Deleting product:");
  };

  const openPopup = () => {
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
          <div className="flex gap-5">
            <MdDeleteOutline
              className="text-lg hover:cursor-pointer hover:scale-150 hover:duration-300 hover:text-red-500"
              onClick={openPopup}
            />
            <PiNotePencilBold className="text-lg hover:cursor-pointer hover:scale-150 hover:duration-300 hover:text-yellow-500" />
          </div>
        ),
      },
    ],
    []
  );
  const data = useMemo(
    () => [
      {
        p_photo:
          "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png",
        p_name: "Apple iMac 27''",
        p_category: "Desktop PC",
        p_stock: 100,
        p_brand: "Apple",
        p_rating: 4,
        p_sales: "1.6M",
        p_revenue: "$3.5M",
      },
      {
        p_photo:
          "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png",
        p_name: "Apple iMac 27''",
        p_category: "Desktop PC",
        p_stock: 100,
        p_brand: "Apple",
        p_rating: 4,
        p_sales: "1.6M",
        p_revenue: "$3.5M",
      },
      {
        p_photo:
          "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png",
        p_name: "Apple iMac 27''",
        p_category: "Desktop PC",
        p_stock: 100,
        p_brand: "Apple",
        p_rating: 4,
        p_sales: "1.6M",
        p_revenue: "$3.5M",
      },
      {
        p_photo:
          "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png",
        p_name: "Apple iMac 27''",
        p_category: "Desktop PC",
        p_stock: 100,
        p_brand: "Apple",
        p_rating: 4,
        p_sales: "1.6M",
        p_revenue: "$3.5M",
      },
      {
        p_photo:
          "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png",
        p_name: "Apple iMac 27''",
        p_category: "Desktop PC",
        p_stock: 200,
        p_brand: "Apple",
        p_rating: 3.2,
        p_sales: "1.6M",
        p_revenue: "$3.5M",
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
    </Layout>
  );
}
