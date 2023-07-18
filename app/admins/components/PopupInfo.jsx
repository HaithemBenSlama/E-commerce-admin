import React from "react";

const PopupInfo = ({ data, isVisible, onClose }) => {
  const styleHidden =
    "overflow-y-auto overflow-x-hidden fixed top-0 left-0 right-0 z-50 hidden items-center justify-center w-full h-screen bg-opacity-75 backdrop-blur-sm";
  const styleShow =
    "overflow-y-auto overflow-x-hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-screen bg-opacity-75 backdrop-blur-sm";

  return (
    <div
      id="adminInformation"
      tabindex="-1"
      aria-hidden="true"
      className={isVisible ? styleShow : styleHidden}
    >
      <div className="relative p-4 w-full max-w-3xl h-full md:h-auto">
        <div className="relative p-4 bg-white rounded-lg shadow sm:p-5">
          <div className="felx flex-col">
            <div className="flex justify-between mb-4 rounded-t sm:mb-5">
              <div className="text-lg mt-5 text-gray-900 md:text-xl dark:text-white">
                <h3 className="font-semibold ">Admin Information</h3>
              </div>
              <div>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="readProductModal"
                  onClick={onClose}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
            </div>
            <table className="w-full table-fixed">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="bg-gray-200 px-4 py-2 font-bold">
                    First Name:
                  </td>
                  <td className="px-4 py-2">{data?.a_firstName}</td>
                </tr>
                <tr>
                  <td className="bg-gray-200 px-4 py-2 font-bold">
                    Last Name:
                  </td>
                  <td className="px-4 py-2">{data?.a_lastName}</td>
                </tr>
                <tr>
                  <td className="bg-gray-200 px-4 py-2 font-bold">E-mail:</td>
                  <td className="px-4 py-2">{data?.a_email}</td>
                </tr>
                <tr>
                  <td className="bg-gray-200 px-4 py-2 font-bold">Country:</td>
                  <td className="px-4 py-2">{data?.a_country}</td>
                </tr>
                <tr>
                  <td className="whitespace-no-wrap w-full bg-gray-200 px-4 py-2 font-bold">
                    City:
                  </td>
                  <td className="px-4 py-2">{data?.a_city}</td>
                </tr>
                <tr>
                  <td className="bg-gray-200 px-4 py-2 font-bold">Zip Code:</td>
                  <td className="px-4 py-2">{data?.a_zipCode}</td>
                </tr>
                <tr>
                  <td className="bg-gray-200 px-4 py-2 font-bold">
                    Phone Number
                  </td>
                  <td className="px-4 py-2">{data?.a_phone}</td>
                </tr>
                <tr>
                  <td className="bg-gray-200 px-4 py-2 font-bold">Position:</td>
                  <td className="px-4 py-2">{data?.a_position}</td>
                </tr>
                <tr>
                  <td className="bg-gray-200 px-4 py-2 font-bold">
                    Organization:
                  </td>
                  <td className="px-4 py-2">{data?.a_organization}</td>
                </tr>
                <tr>
                  <td className="bg-gray-200 px-4 py-2 font-bold">Role:</td>
                  <td className="px-4 py-2">{data?.a_role}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupInfo;
