import React from "react";
import CustomInput from "@/components/CustomInput";
import PrimaryButton from "@/components/PrimaryButton";
import { FaRegSave } from "react-icons/fa";
export default function PasswordInfo() {
  return (
    <div className="row-auto col-auto rounded-md shadow-md bg-gray-100 p-5 -mt-14 ">
      <h6 className="text-lg font-bold underline mb-2">Password information</h6>
      <div className="mb-2">
        <CustomInput
          disabled={false}
          error={false}
          errorMessage={""}
          id={"admin_current_pass"}
          label={"Current Password"}
          name={"admin_current_pass"}
          placeholder={"••••••••"}
          required={true}
          type={"password"}
        />
      </div>
      <div className="mb-2">
        <CustomInput
          disabled={false}
          error={false}
          errorMessage={""}
          id={"admin_new_pass"}
          label={"New Password"}
          name={"admin_new_pass"}
          placeholder={"••••••••"}
          required={true}
          type={"password"}
        />
      </div>
      <div className="px-5 py-1">
        <PrimaryButton
          icon={<FaRegSave className="h-3.5 w-3.5 mr-2" />}
          text={"Save"}
        />
      </div>
    </div>
  );
}
