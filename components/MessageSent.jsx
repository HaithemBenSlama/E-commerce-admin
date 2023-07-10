import React from "react";

const MessageSent = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-6/278379010_108857205133658_2458177458228774882_n.jpg?_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ntiR4ajyqY0AX-BpafT&_nc_ht=scontent.ftun10-1.fna&oh=00_AfAaoHb3m7tEjhny9jVRzOzQp3iAVPzvnYkbZnQTS6lVdw&oe=64AD9E15" />
        </div>
      </div>
      <div className="chat-header">
        Iheb
        <time className="text-xs opacity-50"> 12:46</time>
      </div>
      <div className="chat-bubble">I Love you!</div>
      <div className="chat-footer opacity-50">Seen at 12:46</div>
    </div>
  );
};

export default MessageSent;
