import React from "react";
import CustomInput from "@/components/CustomInput";
import PrimaryButton from "@/components/PrimaryButton";
import { FaRegSave } from "react-icons/fa";

export const GeneralInfo = () => {
  return (
    <div className="row-span-2 col-span-1  rounded-lg shadow-md bg-gray-100 p-5">
      <h6 className="text-lg font-bold underline mb-2">General information</h6>
      <div className="grid gap-6 md:grid-cols-2 mb-3">
        <CustomInput
          disabled={false}
          error={false}
          errorMessage={"Full name must be alphabetique"}
          id={"admin_name"}
          label={"Full Name"}
          name={"admin_name"}
          placeholder={"Full Name"}
          required={true}
          type={"text"}
        />
        <CustomInput
          disabled={false}
          error={false}
          errorMessage={"Invalid adresse mail"}
          id={"admin_mail"}
          label={"Email"}
          name={"admin_mail"}
          placeholder={"exemple@company.com"}
          required={true}
          type={"email"}
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2 mb-3">
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
      <div className="grid gap-6 md:grid-cols-2 mb-3">
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
      <div className="grid gap-6 md:grid-cols-2 mb-3">
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
      <div className="px-5 py-1">
        <PrimaryButton
          icon={<FaRegSave className="h-3.5 w-3.5 mr-2" />}
          text={"Save"}
        />
      </div>
    </div>
  );
};
