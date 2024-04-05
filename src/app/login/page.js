"use client";

import { useContext } from "react";
import { setCookie } from "cookies-next";
import Login from "../components/Login";

export default function SignIn() {
  const handleLogin = () => {
    const jwtToken = "your_jwt_token_here";
    setUser("user");
    setCookie("JWT_AUTH", jwtToken);
  };

  return (
    <div>
      <Login />
    </div>
  );
}
