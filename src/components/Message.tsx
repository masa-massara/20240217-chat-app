import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://ih1.redbubble.net/image.1259577480.8618/st,small,507x507-pad,600x600,f8f8f8.jpg"
          alt=""
        />
        <span>just now</span>
      </div>
      
      <div className="messageContent">
        <p>こんにちは</p>
        {/* <img src="https://ih1.redbubble.net/image.1259577480.8618/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="" /> */}
      </div>
    </div>
  );
};

export default Message;
