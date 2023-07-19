import React from "react";
import Image from "./Image";
import Description from "./Description";
import Box from "./Box";
import Stock from "../Stock";
import Rating from "../Rating";
import Sales from "../Sales";
import { GiPositionMarker } from "react-icons/gi";
export const Model = ({ data, isVisible, onClose }) => {
  const styleHidden =
    "overflow-y-auto overflow-x-hidden fixed top-0 left-0 right-0 z-50 hidden items-center justify-center w-full h-screen bg-opacity-75 backdrop-blur-sm";
  const styleShow =
    "overflow-y-auto overflow-x-hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-screen bg-opacity-75 backdrop-blur-sm";

  return (
    <div
      id="readProductModal"
      tabindex="-1"
      aria-hidden="true"
      className={isVisible ? styleShow : styleHidden}
    >
      <div className="relative p-4 w-full max-w-3xl h-full md:h-auto">
        <div className="relative p-4 bg-white rounded-lg shadow sm:p-5">
          <div className="felx flex-col">
            <div className="flex justify-between mb-4 rounded-t sm:mb-5">
              <div className="text-lg mt-5 text-gray-900 md:text-xl dark:text-white">
                <h3 className="font-semibold ">{data?.p_name}</h3>
                <p className="font-bold">{data?.p_price}</p>
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
            <div className="mt-5 grid grid-cols-4 gap-5">
              <Image srcImage={data?.p_photo} />
              <Image srcImage={data?.p_img2} />
              <Image srcImage={data?.p_img3} />
              <Image srcImage={data?.p_img4} />
            </div>
          </div>
          <dl>
            <Description desc={data?.p_desc} />
            <div className="grid grid-cols-4 gap-4 mb-5">
              <Box title={"Category"} text={data?.p_category} />
              <Box title={"Brand"} text={data?.p_brand} />
              <Box title={"Stock"} text={<Stock stock={data?.p_stock} />} />
              <Box title={"Rating"} text={<Rating rate={data?.p_rating} />} />
              <Box title={"Product SKU"} text={data?.p_sku} />
              <Box title={"Sales"} text={<Sales sales={data?.p_sales} />} />
              <Box title={"Sold by"} text={"E-commerce"} />
              <Box
                title={"Shipping"}
                text={
                  <span className="flex">
                    <GiPositionMarker className="-ml-1 mr-1 mt-1 w-4 h-4" />
                    Worldwide
                  </span>
                }
              />
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};
