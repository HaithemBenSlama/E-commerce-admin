import React from "react";
import CustomInput from "@/components/CustomInput";
import CustomSelect from "@/components/CustomSelect";
const Role = ({ setActiveStep }) => {
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
      />
      <p class="my-4 mx-10 text-lg font-normal text-gray-600">text here</p>
      <div className="flex justify-end">
        <div className="px-5 py-1">
          <button
            type="button"
            class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => setActiveStep(3)}
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

export default Role;
