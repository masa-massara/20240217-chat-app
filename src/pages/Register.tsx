import React from "react";
import Add from "../images/addAvatar.png";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Line?</span>
        <span className="title">登録</span>
        <form action="">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="file" id="file" style={{ display: "none" }} />
          <label htmlFor="file">
            <img src={Add} alt="" />
			<span>プロフィール画像を追加</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>
          Already have an account? <span className="login">Login</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
