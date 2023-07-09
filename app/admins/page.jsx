"use client";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Layout from "@/components/Layout";
import TableAdmins from "@/components/TableAdmins";
import Title from "@/components/Title";
import React, { useMemo } from "react";
import { HiOutlineInformationCircle } from "react-icons/hi";
import NameCol from "./components/NameCol";

function Admin() {
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
          <div className="flex">
            <HiOutlineInformationCircle className="text-lg hover:cursor-pointer hover:scale-150 hover:duration-300 hover:text-blue-500" />
          </div>
        ),
      },
    ],
    []
  );
  const data = useMemo(
    () => [
      {
        a_name: "Haithem Ben Slama ",
        a_email: "haithem.benslama@hotmail.fr",
        a_img:
          "https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/309124236_5326592124105141_8747167939274630792_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WTs67GG3LF0AX8dgO7P&_nc_ht=scontent.ftun14-1.fna&oh=00_AfBBz4FfJGx7QWpdvMPvBqoPsDoCSZ-WrgN-OX4Y9wahJA&oe=64AF0E56",
        a_role: "Moderator",
        a_position: "Front-end Dev",
        a_dateLogin: "Apr 23,2023",
        a_creation: "Apr 1,2021",
      },
      {
        a_name: "Oussema Balti ",
        a_email: "oussema.balti@gamil.com",
        a_img:
          "https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-1/280226272_1827996910896032_4535673337188399766_n.jpg?stp=dst-jpg_s320x320&_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=f67be1&_nc_ohc=MNFd-YJU838AX-XChxs&_nc_ht=scontent.ftun14-1.fna&oh=00_AfAsHvaUAIODm_ku6wtOop0HPqg4d9_DFgkNu_YvOYizZQ&oe=64AEDDB4",
        a_role: "Admin",
        a_position: "Marketing",
        a_dateLogin: "Apr 23,2023",
        a_creation: "Apr 9,2023",
      },
    ],
    []
  );
  return (
    <Layout>
      <Breadcrumbs terminalPath={"Admins"} />
      <Title text={"List of Employees"} />
      <TableAdmins columns={columns} data={data} />
    </Layout>
  );
}

export default Admin;
