import React from "react";
import CustomInput from "@/components/CustomInput";
import PrimaryButton from "@/components/PrimaryButton";
import { FaRegSave } from "react-icons/fa";
const GeneralInfo = () => {
  return (
    <div className="row-span-2 col-span-1 rounded-2xl shadow-xl bg-gray-200 p-5 px-10 mx-28 flex flex-col justify-between">
      <div>
        <h6 className="text-lg font-bold underline mb-2">
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
      <div className="flex justify-end">
        <div className="px-5 py-1">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Next
            <svg
              class="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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
