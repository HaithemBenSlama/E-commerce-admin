"use client";
import React from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import {
  BiSolidUserDetail,
  BiLogOut,
  BiShoppingBag,
  BiCategory,
} from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { CiShoppingBasket } from "react-icons/ci";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const inactiveLink =
    "flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto";
  const activeLink =
    "flex mb-2 justify-start items-center gap-4 px-5 bg-slate-400 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto";
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="p-6 h-screen bg-white z-20 fixed top-0 w-64 left-0">
      <div className="flex flex-col justify-start items-center">
        <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
          E-commerce Admin
        </h1>
        <div className="my-4 border-b border-gray-100 pb-4 w-full">
          <Link
            href={"/dashboard"}
            className={
              pathname.includes("/dashboard") ? activeLink : inactiveLink
            }
          >
            <MdOutlineSpaceDashboard
              className={
                pathname.includes("/dashboard")
                  ? "text-2xl"
                  : "text-2xl text-gray-600 group-hover:text-white"
              }
            />
            <h3
              className={
                pathname.includes("/dashboard")
                  ? "font-semibold"
                  : "text-base text-gray-800 group-hover:text-white font-semibold"
              }
            >
              Dashboard
            </h3>
          </Link>

          <Link
            href={"/products"}
            className={
              pathname.includes("/products") ? activeLink : inactiveLink
            }
          >
            <CiShoppingBasket
              className={
                pathname.includes("/products")
                  ? "text-2xl"
                  : "text-2xl text-gray-600 group-hover:text-white"
              }
            />
            <h3
              className={
                pathname.includes("/products")
                  ? "font-semibold"
                  : "text-base text-gray-800 group-hover:text-white font-semibold"
              }
            >
              Products
            </h3>
          </Link>

          <Link
            href={"/categories"}
            className={
              pathname.includes("/categories") ? activeLink : inactiveLink
            }
          >
            <BiCategory
              className={
                pathname.includes("/categories")
                  ? "text-2xl"
                  : "text-2xl text-gray-600 group-hover:text-white"
              }
            />
            <h3
              className={
                pathname.includes("/categories")
                  ? "font-semibold"
                  : "text-base text-gray-800 group-hover:text-white font-semibold"
              }
            >
              Categories
            </h3>
          </Link>

          <Link
            href={"/orders"}
            className={pathname.includes("/orders") ? activeLink : inactiveLink}
          >
            <BiShoppingBag
              className={
                pathname.includes("/orders")
                  ? "text-2xl"
                  : "text-2xl text-gray-600 group-hover:text-white"
              }
            />
            <h3
              className={
                pathname.includes("/orders")
                  ? "font-semibold"
                  : "text-base text-gray-800 group-hover:text-white font-semibold"
              }
            >
              Orders
            </h3>
          </Link>

          <Link
            href={"/messages"}
            className={
              pathname.includes("/messages") ? activeLink : inactiveLink
            }
          >
            <AiOutlineMessage
              className={
                pathname.includes("/messages")
                  ? "text-2xl"
                  : "text-2xl text-gray-600 group-hover:text-white"
              }
            />
            <h3
              className={
                pathname.includes("/messages")
                  ? "font-semibold"
                  : "text-base text-gray-800 group-hover:text-white font-semibold"
              }
            >
              Messages
            </h3>
          </Link>
        </div>

        {/* settings */}
        <div className="my-4 border-b border-gray-100 pb-4 w-full">
          <Link
            href={"/settings"}
            className={
              pathname.includes("/settings") ? activeLink : inactiveLink
            }
          >
            <FiSettings
              className={
                pathname.includes("/settings")
                  ? "text-2xl"
                  : "text-2xl text-gray-600 group-hover:text-white"
              }
            />
            <h3
              className={
                pathname.includes("/settings")
                  ? "font-semibold"
                  : "text-base text-gray-800 group-hover:text-white font-semibold"
              }
            >
              Settings
            </h3>
          </Link>

          <Link
            href={"/admins"}
            className={pathname.includes("/admins") ? activeLink : inactiveLink}
          >
            <BiSolidUserDetail
              className={
                pathname.includes("/admins")
                  ? "text-2xl"
                  : "text-2xl text-gray-600 group-hover:text-white"
              }
            />
            <h3
              className={
                pathname.includes("/admins")
                  ? "font-semibold"
                  : "text-base text-gray-800 group-hover:text-white font-semibold"
              }
            >
              Admins
            </h3>
          </Link>
        </div>
        <div className="my-4 w-full">
          <Link
            href="/login"
            className="flex mb-2 justify-start items-center gap-4 px-5 border border-gray-200 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
          >
            <BiLogOut className="text-2xl text-gray-600 group-hover:text-white" />
            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
              Logout
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
