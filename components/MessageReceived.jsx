import React from "react";

const MessageReceived = () => {
  return (
    <div class="chat chat-start">
      <div class="chat-image avatar">
        <div class="w-10 rounded-full">
          <img src="https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/309124236_5326592124105141_8747167939274630792_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zNAJerit8EUAX9c2poL&_nc_ht=scontent.ftun8-1.fna&oh=00_AfDT16UNPh6KXDAz900BHei0Tdsa667Vj3dgiQ4dQvgeqg&oe=64A72556" />
        </div>
      </div>
      <div class="chat-header">
        Haithem Ben Slama
        <time class="text-xs opacity-50"> 12:45</time>
      </div>
      <div class="chat-bubble">Hello my brother</div>
      <div class="chat-footer opacity-50">Delivered</div>
    </div>
  );
};

export default MessageReceived;
