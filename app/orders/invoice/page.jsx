"use client";
import React from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Layout from "@/components/Layout";
import PrimaryButton from "@/components/PrimaryButton";
import Title from "@/components/Title";
import { AiOutlinePrinter } from "react-icons/ai";
import Table from "./components/Table";
import Shipping from "./components/Shipping";
import Billing from "./components/Billing";
import Footer from "./components/Footer";
import ClientInfo from "./components/ClientInfo";
import SocietyInfo from "./components/SocietyInfo";
import InvoiceInfo from "./components/InvoiceInfo";

const Invoice = () => {
  const handlePrint = () => {
    window.print();
  };
  const links = [{ text: "Orders", href: "/orders" }];
  return (
    <Layout>
      <Breadcrumbs path={links} terminalPath="Invoice" />
      <main
        id="printable-content"
        className="p-10 bg-gray-200 rounded-xl mx-10"
      >
        <header className="flex items-center justify-between mb-5 -mt-7">
          <div className="-ml-5">
            <Title text="Invoice" />
          </div>
          <div>
            <ul className="flex space-x-3">
              <PrimaryButton
                icon={<AiOutlinePrinter className="h-3.5 w-3.5 mr-2" />}
                text={"Print"}
                onClick={() => handlePrint()}
                id="print-button"
              />
            </ul>
          </div>
        </header>
        <SocietyInfo />
        <ClientInfo />

        <InvoiceInfo />
        <div className="my-5 ">
          <Table
            list={[
              {
                id: 1,
                name: "Iphone 11 pro max",
                description: "Color: Silver",
                quantity: 3,
                price: 3600,
                amount: 3600,
              },
              {
                id: 1,
                name: "Iphone 11 pro max",
                description: "Color: Silver",
                quantity: 1,
                price: 3600,
                amount: 3600,
              },
            ]}
          />
        </div>
        <div className="flex justify-between">
          <Shipping />
          <Billing />
        </div>
        <Footer />
      </main>
    </Layout>
  );
};

export default Invoice;
