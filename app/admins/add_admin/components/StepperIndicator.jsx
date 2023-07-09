import React from "react";

export const StepperIndicator = ({ activeStep, totalSteps }) => {
  return (
    <ol className="flex items-center min-w-full">
      {[...Array(totalSteps)].map((_, index) => (
        <li
          key={index}
          className={`relative w-full mb-6 ${
            index < activeStep - 1 ? "opacity-50" : ""
          }`}
        >
          <div className="flex items-center">
            <div
              className={`z-10 flex items-center justify-center w-10 h-10 rounded-full ring-0 ring-white shrink-0 ${
                index < activeStep - 1
                  ? "bg-blue-600"
                  : "bg-gray-200 dark:bg-gray-700"
              } ${index === activeStep - 1 ? "bg-blue-600" : ""}`}
            >
              <svg
                className={`w-3 h-3 ${
                  index < activeStep - 1 ? "text-blue-100" : "text-gray-800"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            </div>
            {index < totalSteps - 1 && (
              <div
                className={`flex w-full h-0.5 ${
                  index < activeStep - 1 ? "bg-blue-600" : "bg-gray-200"
                }`}
              ></div>
            )}
          </div>
          <div className="mt-3">
            <h3 className="font-medium text-gray-900 -ml-1">
              STEP {index + 1}
            </h3>
          </div>
        </li>
      ))}
    </ol>
  );
};
