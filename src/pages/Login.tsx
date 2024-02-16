import React from "react";
import Add from "../images/addAvatar.png";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Line?</span>
        <span className="title">登録</span>
        <form action="">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          
          <button>Sign in</button>
        </form>
        <p>
          アカウントを持っていませんか？ <span className="login">登録</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
