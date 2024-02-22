import React from "react";
import Img from "../images/img.png"
import Attach from "../images/attach.png"


const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="文章を入力" />
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{ display: "none" }} id ="file"/>
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
