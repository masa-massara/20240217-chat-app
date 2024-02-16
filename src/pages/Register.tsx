import React from "react";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">らいん</span>
        <span className="title">Register</span>
        <form action="">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="file" placeholder="file" />
          <button>Sign up</button>
        </form>
		<p>Already have an account? <span className="login">Login</span></p>
      </div>
    </div>
  );
};

export default Register;
