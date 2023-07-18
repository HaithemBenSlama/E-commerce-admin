import React from "react";
import PrimaryButton from "./PrimaryButton";
import { FiUploadCloud } from "react-icons/fi";

export const ProfileInfo = () => {
  return (
    <div className="col-auto row-auto rounded-md shadow-md bg-gray-100 h-[158px] flex items-center p-7">
      <div className="mx-6 ">
        <img
          className="w-24 h-24 rounded-full"
          src="https://i.ibb.co/Pz4RbtH/309124236-5326592124105141-8747167939274630792-n-1.jpg"
          alt="avatar"
        />
      </div>
      <div className="-mr-10">
        <h6 className="text-lg font-bold mb-1">Haithem Ben Slama</h6>
        <p className="text-gray-500 mb-3">Haithem.Benslama@hotmail.fr</p>
        <PrimaryButton
          text={"Change"}
          icon={<FiUploadCloud className="h-3.5 w-3.5 mr-2" />}
        />
      </div>
    </div>
  );
};
