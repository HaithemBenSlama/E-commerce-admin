import React from "react";
import CustomInput from "@/components/CustomInput";
const AccountInfo = ({ setActiveStep }) => {
  return (
    <div className="row-span-2 col-span-1 rounded-2xl shadow-xl bg-gray-200 p-5 px-10 mx-28 flex flex-col justify-between">
      <div>
        <h6 className="text-xl font-bold underline mb-4">
          Account Information
        </h6>

        <div class="grid gap-6 md:grid-cols-2 mb-3">
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
        </div>
        <div class="grid gap-6 md:grid-cols-2 mb-3">
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
        </div>
        <div class="grid gap-6 md:grid-cols-2 mb-3">
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
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => setActiveStep(2)}
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

export default AccountInfo;
