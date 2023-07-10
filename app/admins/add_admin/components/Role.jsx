"use client";
import React, { useState } from "react";
import CustomSelect from "@/components/CustomSelect";
const Role = ({ setActiveStep }) => {
  const [choice, setChoice] = useState(null);
  const handleSelect = (selectedValue) => {
    setChoice(selectedValue);
  };
  return (
    <div className="row-span-2 col-span-1 rounded-2xl shadow-xl bg-gray-200 p-5 px-10 mx-64 flex flex-col justify-between text-black">
      <div>
        <h6 className="text-xl font-bold underline mb-4">Role</h6>
      </div>
      <CustomSelect
        label={"Role"}
        options={[
          { value: "topAdmin", text: "Top Admin" },
          { value: "admin", text: "Admin" },
          { value: "moderator", text: "Moderator" },
        ]}
        defaultValue={"Choose Role"}
        setChoice={handleSelect}
      />
      <p class="my-3 mx-10 text-base font-normal text-gray-600">
        {choice === "topAdmin"
          ? "As a top admin, you have full control over the e-commerce website. You can manage all aspects of the platform, including user accounts, products, orders, and site settings. Your responsibilities include overseeing operations, managing other admins, and ensuring the smooth functioning of the website."
          : choice === "admin"
          ? "As an admin, you have administrative privileges on the e-commerce website. You can manage user accounts, update product information, handle orders, and perform various administrative tasks. Your role is crucial in maintaining the website's functionality and providing support to customers and other users."
          : choice === "moderator"
          ? "As a moderator, you play a vital role in maintaining a positive and safe environment on the e-commerce platform. You review user-generated content, moderate discussions and comments, and enforce community guidelines. Your focus is on ensuring that the website remains a respectful and enjoyable space for users to interact and engage."
          : null}
      </p>
      <div className="flex justify-between">
        <div className="px-5 py-1">
          <button
            type="button"
            className="text-gray-600 bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            onClick={() => setActiveStep(2)}
          >
            <svg
              className="w-3.5 h-3.5 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 5H1M4 1L1 5l3 4"
              />
            </svg>
            Back
          </button>
        </div>
        <div className="px-5 py-1">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => console.log("Adding admin")}
          >
            Finish
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Role;
