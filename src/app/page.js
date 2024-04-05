"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Dashboard from "./dashboard/page";
import Login from "./components/Login";
import { parseCookies } from "nookies";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const cookies = parseCookies();
    const token = cookies["JWT_AUTH"];

    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      )}
      ;
    </div>
  );
};
export default Home;
