"use client";
import React from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Layout from "@/components/Layout";
import PrimaryButton from "@/components/PrimaryButton";
import Title from "@/components/Title";
import { AiOutlinePrinter } from "react-icons/ai";
import { BiCloudDownload } from "react-icons/bi";
import PaymentMethod from "../components/table/PaymentMethode";
import Table from "./components/Table";

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
              <PrimaryButton
                icon={<BiCloudDownload className="h-3.5 w-3.5 mr-2" />}
                text={"Download"}
                onClick={() => handlePrint()}
                id="download-button"
                extra={"bg-blue-500 hover:bg-blue-600"}
              />
            </ul>
          </div>
        </header>
        <section className="flex flex-col items-end justify-end ">
          <h2 className="text-3xl uppercase font-semibold">E-Commerce</h2>
          <p>service@ecommerce.tn</p>
        </section>
        <section className="mt-5">
          <h2 className="text-xl uppercase ">Client's Name</h2>
          <p>Client's address</p>
        </section>

        <article className="my-5 flex items-end justify-end">
          <ul>
            <li>
              <span className="font-bold">Invoice Number: </span>
              #99999
            </li>
            <li>
              <span className="font-bold">Invoice Date: </span>
              14/04/2023
            </li>
            <li>
              <span className="font-bold">Due Date: </span>
              23/04/2023
            </li>
          </ul>
        </article>
        {/* Table */}
        <div className="my-5 ">
          <Table
            list={[
              {
                id: 1,
                name: "Iphone 11 pro max",
                description: "Color: Silver",
                quantity: 1,
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
        {/* end Table */}
        <div className="flex justify-between">
          <section className="mt-5 mx-5 shadow-lg rounded-lg p-5 space-y-3">
            <h2 className="text-xl uppercase underline">Shipping Address: </h2>
            <ul>
              <li>
                <span className="font-bold">Full Name: </span>
                Haithem Ben Slama
              </li>
              <li>
                <span className="font-bold">Street Address: </span>
                Sahabi 4, AFH
              </li>
              <li>
                <span className="font-bold">City,ST ZIP Code: </span>
                Tunisia, Kairouan 3100
              </li>
              <li>
                <span className="font-bold">Phone: </span>
                +216 27 660 834
              </li>
            </ul>
          </section>
          <section className="mt-5 mx-5 shadow-lg rounded-lg p-5 space-y-3">
            <h2 className="text-xl uppercase underline">Billing Address: </h2>
            <ul>
              <li>
                <span className="font-bold">Full Name: </span>
                Haithem Ben Slama
              </li>
              <li>
                <span className="font-bold">Street Address: </span>
                Sahabi 4, AFH
              </li>
              <li>
                <span className="font-bold">City,ST ZIP Code: </span>
                Tunisia, Kairouan 3100
              </li>
              <li className="flex">
                <span className="font-bold mt-5 mr-5 ">Payment Method: </span>
                <PaymentMethod payment={"Visa"} />
              </li>
            </ul>
          </section>
        </div>
        {/* Footer */}
        <footer className="flex items-center justify-center -mb-10">
          <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center ">
            © 2023{" "}
            <a href="#" class="hover:underline">
              E-commerce
            </a>
            . All Rights Reserved.
          </span>
        </footer>
      </main>
    </Layout>
  );
};

export default Invoice;
