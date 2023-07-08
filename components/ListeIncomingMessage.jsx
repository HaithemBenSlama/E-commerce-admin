import React from "react";

const ListeIncomingMessage = ({ img, name, lastMessage, messageCount }) => {
  return (
    <li>
      <a href="#" className="items-center block p-3 sm:flex hover:bg-gray-100">
        <img
          className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0"
          src={img}
          alt="Jese Leos image"
        />
        <div className="text-gray-600 ">
          <div className="text-base font-normal">
            <span className="font-medium text-gray-900">{name}</span>
          </div>
          <div className="text-sm font-normal">{lastMessage}</div>
        </div>
        <div className="ml-auto text-sm font-semibold text-white bg-gray-500 w-6 h-6 text-center rounded-full flex justify-center items-center">
          {messageCount}
        </div>
      </a>
    </li>
  );
};

export default ListeIncomingMessage;
