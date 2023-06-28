import React from "react";

const CustomInput = ({
  label,
  placeholder,
  type,
  name,
  id,
  required,
  disabled,
}) => {
  return (
    <div>
      <label
        for={name}
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
    </div>
  );
};

export default CustomInput;
