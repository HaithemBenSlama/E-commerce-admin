import React from "react";

const MessageSent = () => {
  return (
    <div class="chat chat-end">
      <div class="chat-image avatar">
        <div class="w-10 rounded-full">
          <img src="https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-6/278379010_108857205133658_2458177458228774882_n.jpg?_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ntiR4ajyqY0AX-BpafT&_nc_ht=scontent.ftun10-1.fna&oh=00_AfAaoHb3m7tEjhny9jVRzOzQp3iAVPzvnYkbZnQTS6lVdw&oe=64AD9E15" />
        </div>
      </div>
      <div class="chat-header">
        Iheb
        <time class="text-xs opacity-50"> 12:46</time>
      </div>
      <div class="chat-bubble">I hate you!</div>
      <div class="chat-footer opacity-50">Seen at 12:46</div>
    </div>
  );
};

export default MessageSent;
