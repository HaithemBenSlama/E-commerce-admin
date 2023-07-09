"use client";
import { useState } from "react";
import { useTable, usePagination } from "react-table";
import { ChevronRightIcon, ChevronLeftIcon } from "lucide-react";
import { FaFilter } from "react-icons/fa";
import Search from "./Search";
import PrimaryButton from "./PrimaryButton";
import { AiOutlinePlus } from "react-icons/ai";
import FiltreButton from "./FiltreButton";

const TablePagination = ({ columns, data }) => {
  const [pageIndex, setPageIndex] = useState(0); // initialize pageIndex state

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
    <div>
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
          <tbody className="border-b text-gray-800" {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr className="border-b" {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        scope="row"
                        {...cell.getCellProps()}
                        className="w-4 px-4 py-3"
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
  );
};

export default TablePagination;
