import React from "react";

const MessageReceived = () => {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="https://i.ibb.co/Pz4RbtH/309124236-5326592124105141-8747167939274630792-n-1.jpg" />
        </div>
      </div>
      <div className="chat-header">
        Haithem Ben Slama
        <time className="text-xs opacity-50"> 12:45</time>
      </div>
      <div className="chat-bubble">Hello my brother</div>
      <div className="chat-footer opacity-50">Delivered</div>
    </div>
  );
};

export default MessageReceived;
