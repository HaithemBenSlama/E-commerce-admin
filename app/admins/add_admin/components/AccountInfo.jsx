"use client";
import React, { useState } from "react";
import CustomInput from "@/components/CustomInput";
import { BiUser } from "react-icons/bi";

const AccountInfo = ({ setActiveStep }) => {
  const [uploadedPhoto, setUploadedPhoto] = useState(null);

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUploadedPhoto(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="row-span-2 col-span-1 rounded-2xl shadow-xl bg-gray-200 p-5 px-10 mx-28 flex flex-col justify-between">
      <div>
        <h6 className="text-xl font-bold underline mb-4">
          Account Information
        </h6>

        <div className="grid gap-6 md:grid-cols-2 mb-3">
          <div>
            <label
              htmlFor="newAdmin_uploadPhoto"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Photo
            </label>
            <div className="flex items-center">
              <label
                htmlFor="newAdmin_uploadPhoto"
                className="relative cursor-pointer rounded-full bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-14 h-14 flex items-center justify-center"
              >
                {uploadedPhoto ? (
                  <img
                    src={uploadedPhoto}
                    alt="Uploaded Photo"
                    className="rounded-full"
                  />
                ) : (
                  <BiUser className="w-8 h-8 text-white" />
                )}
                <input
                  type="file"
                  id="newAdmin_uploadPhoto"
                  className="sr-only"
                  onChange={handlePhotoUpload}
                  required
                />
              </label>
              <span className="font-medium text-sm p-[14px] ml-2">
                {uploadedPhoto ? "Photo Uploaded" : "Upload your photo"}
              </span>
            </div>
          </div>
          <CustomInput
            disabled={false}
            error={false}
            errorMessage={""}
            id={"newadmin_firstName"}
            label={"First Name"}
            name={"newadmin_firstname"}
            placeholder={"First Name"}
            required={true}
            type={"text"}
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2 mb-3">
          <CustomInput
            disabled={false}
            error={false}
            errorMessage={""}
            id={"newadmin_lastName"}
            label={"Last Name"}
            name={"newadmin_lastName"}
            placeholder={"Last Name"}
            required={true}
            type={"text"}
          />
          <CustomInput
            disabled={false}
            error={false}
            errorMessage={""}
            id={"newadmin_email"}
            label={"E-mail"}
            name={"newadmin_email"}
            placeholder={"E-mail"}
            required={true}
            type={"email"}
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2 mb-3">
          <CustomInput
            disabled={false}
            error={false}
            errorMessage={""}
            id={"newadmin_pass"}
            label={"Password"}
            name={"newadmin_pass"}
            placeholder={"••••••••"}
            required={true}
            type={"password"}
          />
          <CustomInput
            disabled={false}
            error={false}
            errorMessage={""}
            id={"newadmin_passConfirm"}
            label={"Confirm Password"}
            name={"newadmin_passConfirm"}
            placeholder={"••••••••"}
            required={true}
            type={"password"}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <div className="px-5 py-1">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => setActiveStep(2)}
          >
            Next
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

export default AccountInfo;
