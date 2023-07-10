import React from "react";
import CustomInput from "@/components/CustomInput";
const GeneralInfo = ({ setActiveStep }) => {
  return (
    <div className="row-span-2 col-span-1 rounded-2xl shadow-xl bg-gray-200 p-5 px-10 mx-28 flex flex-col justify-between">
      <div>
        <h6 className="text-xl font-bold underline mb-4">
          General Information
        </h6>

        <div class="grid gap-6 md:grid-cols-2 mb-3">
          <CustomInput
            disabled={false}
            error={false}
            errorMessage={""}
            id={"admin_country"}
            label={"Country"}
            name={"admin_country"}
            placeholder={"e.g Tunisia"}
            required={true}
            type={"text"}
          />
          <CustomInput
            disabled={false}
            error={false}
            errorMessage={"Invalid adresse mail"}
            id={"admin_city"}
            label={"City"}
            name={"admin_city"}
            placeholder={"e.g Kairouan"}
            required={true}
            type={"text"}
          />
        </div>
        <div class="grid gap-6 md:grid-cols-2 mb-3">
          <CustomInput
            disabled={false}
            error={false}
            errorMessage={""}
            id={"admin_zip_code"}
            label={"Zip Code"}
            name={"admin_zip_code"}
            placeholder={"123456"}
            required={true}
            type={"number"}
          />
          <CustomInput
            disabled={false}
            error={false}
            errorMessage={""}
            id={"admin_phone_number"}
            label={"Phone Number"}
            name={"admin_phone_number"}
            placeholder={"e.g +216 25 365 142"}
            required={true}
            type={"number"}
          />
        </div>
        <div class="grid gap-6 md:grid-cols-2 mb-3">
          <CustomInput
            disabled={false}
            error={false}
            errorMessage={""}
            id={"admin_role"}
            label={"Role"}
            name={"admin_role"}
            placeholder={"e.g Marketing"}
            required={true}
            type={"text"}
          />
          <CustomInput
            disabled={false}
            error={false}
            errorMessage={""}
            id={"admin_organization"}
            label={"Organization"}
            name={"admin_organization"}
            placeholder={"Company Name"}
            required={true}
            type={"text"}
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="px-5 py-1">
          <button
            type="button"
            className="text-gray-600 bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            onClick={() => setActiveStep(1)}
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
            onClick={() => setActiveStep(3)}
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

export default GeneralInfo;
