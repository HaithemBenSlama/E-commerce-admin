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

  return (
    <div className="p-6 h-screen bg-white z-20 fixed top-0 w-64 left-0 pt-12">
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
        <div className=" mt-10 w-full border-t-2">
          <div className="max-w-sm divide-y divide-gray-200">
            <div className="py-3 sm:py-4">
              <div class="flex items-center space-x-3">
                <div class="flex-shrink-0">
                  <img
                    class="w-10 h-10 rounded-full"
                    src="https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/309124236_5326592124105141_8747167939274630792_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zNAJerit8EUAX9c2poL&_nc_ht=scontent.ftun8-1.fna&oh=00_AfDT16UNPh6KXDAz900BHei0Tdsa667Vj3dgiQ4dQvgeqg&oe=64A72556"
                    alt="Neil image"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">
                    Haithem Ben Slama
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    Haithem@hotmail.fr
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
