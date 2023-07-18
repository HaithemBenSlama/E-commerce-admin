"use client";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Layout from "@/components/Layout";
import TableAdmins from "@/components/TableAdmins";
import Title from "@/components/Title";
import React, { useMemo, useState } from "react";
import { HiOutlineInformationCircle } from "react-icons/hi";
import NameCol from "./components/NameCol";
import PopupInfo from "./components/PopupInfo";
import { dataAdmin } from "./variable/data";

function Admin() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleInformation = (row) => {
    setSelectedRow(row);
    setIsVisible(true);
  };
  const columns = useMemo(
    () => [
      {
        Header: "N°",
        accessor: (row, index) => index + 1,
      },
      {
        Header: "Name",
        accessor: ({ a_email, a_name, a_img }) => (
          <NameCol email={a_email} name={a_name} hrefImg={a_img} />
        ),
      },
      {
        Header: "Role",
        accessor: ({ a_role }) => (
          <div className="text-gray-700 font-extrabold">{a_role}</div>
        ),
      },
      {
        Header: "Position",
        accessor: ({ a_position }) => (
          <div className="text-gray-700 font-semibold">{a_position}</div>
        ),
      },
      {
        Header: "Last Login",
        accessor: ({ a_dateLogin }) => (
          <div className="text-gray-500">{a_dateLogin}</div>
        ),
      },

      {
        Header: "Created at",
        accessor: ({ a_creation }) => (
          <div className="text-gray-500">{a_creation}</div>
        ),
      },
      {
        Header: "Actions",
        Cell: ({ row }) => (
          <HiOutlineInformationCircle
            className="text-lg hover:cursor-pointer hover:scale-150 hover:duration-300 hover:text-blue-500"
            onClick={() => handleInformation(row)}
          />
        ),
      },
    ],
    []
  );
  const data = useMemo(() => dataAdmin, []);
  return (
    <Layout>
      <Breadcrumbs terminalPath={"Admins"} />
      <Title text={"List of Employees"} />
      <TableAdmins columns={columns} data={data} />
      <PopupInfo
        data={selectedRow?.original}
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
      />
    </Layout>
  );
}

export default Admin;
