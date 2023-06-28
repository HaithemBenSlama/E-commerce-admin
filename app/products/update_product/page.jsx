import { Breadcrumbs } from "@/components/Breadcrumbs";
import Layout from "@/components/Layout";
import Title from "@/components/Title";
import CustomInput from "@/components/CustomInput";
import CustomSelect from "@/components/CustomSelect";
import CustomUploader from "@/components/CustomUploader";
import CustomTextArea from "@/components/CustomTextArea";
import React from "react";

export default function UpdateProduct() {
  const links = [{ text: "Products", href: "/products" }];
  return (
    <Layout>
      <Breadcrumbs path={links} terminalPath={"Update product"} />
      <Title text={"Update product"} />
      <div class="py-0 px-4 mx-10">
        <form action="">
          <div class="grid col-span-4 gap-6">
            <div class="col-span-4" />
            <div class="w-full">
              <CustomInput
                label={"Product Name"}
                placeholder={"Product Name"}
                type={"text"}
                name={"p_name"}
                id={"p_name"}
                required={true}
                disabled={false}
              />
            </div>
            <div class="w-full">
              <CustomInput
                label={"Product SKU"}
                placeholder={"Code SKU"}
                type={"text"}
                name={"p_sku"}
                id={"p_sku"}
                required={true}
                disabled={false}
              />
            </div>

            <div class="w-full">
              <CustomSelect
                label={"Category"}
                id={"p_category"}
                required={true}
                options={[{ text: "haithem", selected: true, value: "h" }]}
              />
            </div>

            <div class="w-full">
              <CustomInput
                label={"Stock Quantity"}
                placeholder={"12"}
                type={"number"}
                name={"p_stock"}
                id={"p_stock"}
                required={true}
                disabled={false}
              />
            </div>

            <div class="w-full">
              <label
                for="price"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="$2999"
                required=""
              />
              <label class="relative inline-flex items-center cursor-pointer mt-3">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Discount
                </span>
              </label>
            </div>

            <div class="w-full">
              <CustomInput
                label={"Discount Rate"}
                placeholder={"25%"}
                type={"number"}
                name={"d_rate"}
                id={"d_rate"}
                required={false}
                disabled={true}
              />
            </div>

            <div class="w-full">
              <CustomInput
                label={"Start Date"}
                type={"datetime-local"}
                name={"d_start"}
                id={"d_start"}
                required={true}
                disabled={false}
              />
            </div>

            <div class="w-full">
              <CustomInput
                label={"End Date"}
                type={"datetime-local"}
                name={"d_end"}
                id={"d_end"}
                required={true}
                disabled={false}
              />
            </div>

            <div className="sm:col-span-2">
              <label
                for="item-weight"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Photos
              </label>

              <div class="flex gap-3">
                <CustomUploader />
                <CustomUploader />
                <CustomUploader />
                <CustomUploader />
                <CustomUploader />
              </div>
            </div>
            <div class="sm:col-span-2">
              <CustomTextArea />
            </div>
          </div>
          <button
            type="submit"
            class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-900 hover:bg-gray-800"
          >
            Add product
          </button>
        </form>
      </div>
    </Layout>
  );
}
