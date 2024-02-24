import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Line?</span>
      <div className="user">
        <img
          src="https://ih1.redbubble.net/image.1259577480.8618/st,small,507x507-pad,600x600,f8f8f8.jpg"
          alt=""
        />
        <span>ペーター</span>
        <button
          onClick={() => {
            signOut(auth);
          }}
        >
          ログアウト
        </button>
      </div>
    </div>
  );
};

export default Navbar;
