import { Breadcrumbs } from "@/components/Breadcrumbs";
import Layout from "@/components/Layout";
import Title from "@/components/Title";
import React from "react";

function NewAdmin() {
  const links = [{ text: "Admins", href: "/admins" }];

  return (
    <Layout>
      <Breadcrumbs path={links} terminalPath={"Add Admin"} />
      <Title text={"Add new Admin"} />
    </Layout>
  );
}

export default NewAdmin;
