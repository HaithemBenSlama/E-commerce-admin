"use client";
import React from "react";
import FiltreButton from "./FiltreButton";
import TablePagination from "./TablePagination";
import Search from "./Search";

const TableOrders = ({ columns, data, categories }) => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-1/2">
              <Search />
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <div className="flex items-center space-x-3 w-full md:w-auto">
                <FiltreButton text={"Choose Status"} categories={categories} />
              </div>
            </div>
          </div>
          <TablePagination columns={columns} data={data} />
        </div>
      </div>
    </section>
  );
};

export default TableOrders;
