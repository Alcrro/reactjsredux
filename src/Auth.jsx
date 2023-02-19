import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./features/auth/authSlice";

const Auth = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const test = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    console.log(email, password);
  };
  return (
    <div>
      <h1>Auth</h1>
      <form onClick={test}>
        <div>
          <label htmlFor="email">E-Mail</label>
          <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
