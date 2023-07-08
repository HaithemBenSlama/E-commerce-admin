import { Breadcrumbs } from "@/components/Breadcrumbs";
import Layout from "@/components/Layout";
import Title from "@/components/Title";
import React from "react";

export default function Orders() {
  return (
    <Layout>
      <Breadcrumbs terminalPath={"Orders"} />

      <Title text={"Booking History"} />
    </Layout>
  );
}
