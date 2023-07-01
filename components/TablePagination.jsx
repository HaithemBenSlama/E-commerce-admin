"use client";
import { useState } from "react";
import { useTable, usePagination } from "react-table";
import { ChevronRightIcon, ChevronLeftIcon } from "lucide-react";
import { FaFilter } from "react-icons/fa";
import Search from "./Search";
import { useRouter } from "next/navigation";
import PrimaryButton from "./PrimaryButton";
import { AiOutlinePlus } from "react-icons/ai";

const TablePagination = ({ columns, data, categories }) => {
  const [pageIndex, setPageIndex] = useState(0); // initialize pageIndex state
  const [filtreShow, setFiltreshow] = useState(false);
  const styleFiltreShow = "z-10 w-48 p-3 bg-white rounded-lg shadow";
  const styleFiltreHide = "z-10 hidden w-48 p-3 bg-white rounded-lg shadow";
  const router = useRouter();

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    pageSize,
    setPageSize,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: pageIndex, pageSize: 5 },
    },
    usePagination
  );

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-1/2">
              <Search />
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <PrimaryButton
                icon={<AiOutlinePlus className="h-3.5 w-3.5 mr-2" />}
                text={"Add new Product"}
                href={"/products/new_Product"}
              />
              <div className="flex items-center space-x-3 w-full md:w-auto"></div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table
              {...getTableProps()}
              className="w-full text-sm text-left text-gray-500"
            >
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        scope="col"
                        className="px-4 py-3"
                        {...column.getHeaderProps()}
                      >
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="border-b" {...getTableBodyProps()}>
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <tr className="border-b" {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td
                            scope="row"
                            {...cell.getCellProps()}
                            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between bg-gray-100 px-4 py-2">
            <div className="flex items-center">
              <span className="mr-2 text-sm">Rows per page: </span>
              <select
                className="rounded border px-2 py-1"
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                  gotoPage(0);
                }}
              >
                {[5, 10, 15, 20, 25].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center">
              <button
                className={`rounded px-2 py-1 ${
                  canPreviousPage
                    ? "cursor-pointer bg-gray-800 text-white hover:bg-gray-700"
                    : "cursor-not-allowed bg-gray-300 text-gray-500"
                }`}
                onClick={() => {
                  previousPage();
                  setPageIndex(pageIndex - 1);
                }}
                disabled={!canPreviousPage}
              >
                <ChevronLeftIcon className="h-4 w-4"></ChevronLeftIcon>
              </button>

              <span className="mx-4">
                <span>{`${pageIndex + 1}`}</span>
                <span className="text-gray-400">{` / ${pageCount}`}</span>
              </span>

              <button
                className={`rounded px-2 py-1 ${
                  canNextPage
                    ? "cursor-pointer bg-gray-800 text-white hover:bg-gray-700"
                    : "cursor-not-allowed bg-gray-300 text-gray-500"
                }`}
                onClick={() => {
                  nextPage();
                  setPageIndex(pageIndex + 1);
                }}
                disabled={!canNextPage}
              >
                <ChevronRightIcon className="h-4 w-4"></ChevronRightIcon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TablePagination;
