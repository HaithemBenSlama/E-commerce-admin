import { Breadcrumbs } from "@/components/Breadcrumbs";
import Layout from "@/components/Layout";
import Title from "@/components/Title";
import React from "react";

function Admin() {
  return (
    <Layout>
      <Breadcrumbs terminalPath={"Admins"} />
      <Title text={"List of Admins"} />
    </Layout>
  );
}

export default Admin;
