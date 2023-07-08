import React from "react";
import PrimaryButton from "./PrimaryButton";
import { FiUploadCloud } from "react-icons/fi";

export const ProfileInfo = () => {
  return (
    <div className="col-auto row-auto rounded-md shadow-md bg-gray-100 h-[158px] flex items-center p-7">
      <div className="mx-6 ">
        <img
          className="w-24 h-24 rounded-full"
          src="https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/309124236_5326592124105141_8747167939274630792_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zNAJerit8EUAX-EH6OZ&_nc_ht=scontent.ftun8-1.fna&oh=00_AfBQKEuE6g250fg92aFpiLiWkPJSKTsJAuyFSHqOSsApHQ&oe=64A72556"
          alt="Default avatar"
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
