"use client";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import CustomInput from "@/components/CustomInput";
import CustomSelect from "@/components/CustomSelect";
import Layout from "@/components/Layout";
import Popup from "@/components/Popup";
import PrimaryButton from "@/components/PrimaryButton";
import TableCategories from "@/components/TableCategories";
import Title from "@/components/Title";
import React, { useState } from "react";
import { useMemo } from "react";
import { AiOutlineSave } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { PiNotePencilBold } from "react-icons/pi";
import { dataCategory } from "./variables/data";

export default function Categories() {
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

  const handleClickSave = () => {
    console.log("Saving product");
  };
  const columns = useMemo(
    () => [
      {
        Header: "N°",
        accessor: (row, index) => index + 1,
      },
      {
        Header: "Category Name",
        accessor: "c_name",
      },
      {
        Header: "Parent Category",
        accessor: "c_parent",
      },
      {
        Header: "Number of product",
        accessor: "c_number_product",
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
  return (
    <Layout>
      <Breadcrumbs terminalPath={"Categories"} />

      <Title text={"Categories Management"} />
      <p className="mx-16 text-lg font-normal text-gray-500">
        Add new Categorie
      </p>
      <form action="#">
        <div className="grid col-span-3 gap-6 mx-32 -mt-3">
          <div className="col-span-3" />
          <div className="w-full">
            <CustomInput
              label={"Category Name"}
              placeholder={"Category Name"}
              type={"text"}
              name={"c_name"}
              id={"c_name"}
              required={true}
              disabled={false}
            />
          </div>
          <div className="w-full">
            <CustomSelect
              label={"Parent Category"}
              id={"c_parent"}
              required={false}
              options={[{ text: "haithem", value: "h" }]}
              defaultValue={"No parent category"}
            />
          </div>
          <div className="w-full mt-7 ml-5">
            <PrimaryButton
              text={"Save"}
              icon={<AiOutlineSave className="h-3.5 w-3.5 mr-2" />}
              onClick={handleClickSave}
            />
          </div>
        </div>
      </form>
      <TableCategories columns={columns} data={dataCategory} />
      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
        onDelete={handleDelete}
        message={"Are you sure you want to delete this category"}
      />
    </Layout>
  );
}
