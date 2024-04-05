import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import { setCookie } from "nookies";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if it's running on the client side
    if (typeof window !== "undefined" && isLoggedIn) {
      setCookie(null, "JWT_AUTH", "JWT_AUTH");
    }
  }, [isLoggedIn]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: employeeId,
          password: password,
        }
      );
      if (response.status === 200) {
        // Redirect to homepage on successful login
        // setCookie("JWT_AUTH", response.data.token);
        setCookie("JWT_AUTH", "JWT_AUTH");
        setIsLoggedIn(true);
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-center lg:w-[28rem] bg-white rounded-md py-5 shadow-md">
        <div className="flex mx-auto text-center py-5">
          <Image
            src="/kmitlogo.jpeg"
            alt="Keshav Memorial Institute of Technology"
            width={75} // Specify the width of the image
            height={75} // Specify the height of the image
          />
        </div>
        <p className="text-center mx-auto text-3xl font-bold md:text-left md:leading-tight">
          Smart Attendance
        </p>
        <p className="text-center mx-auto text-sm mt-2">
          Powered by KMIT, for KMIT.
        </p>
        <form className="flex flex-col mx-auto items-stretch">
          <div className="flex flex-col pt-7">
            <div className="relative flex overflow-hidden rounded-md transition">
              <input
                type="text"
                id="employeeId"
                placeholder="Teacher Email"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>
          <div className="mb-4 flex flex-col pt-4">
            <div className="relative flex overflow-hidden rounded-md transition">
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>
          <button
            className={`mt-6 flex mx-auto justify-center rounded-lg px-4 py-2 text-center text-base font-semibold shadow-md outline-none ring-offset-2 focus:ring-2 w-full ${
              loading
                ? "bg-blue-600 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            onClick={(e) => handleSubmit(e)}
            disabled={loading} // Disable the button when loading is true
          >
            {loading ? "Loading..." : "Login"}
          </button>
          <p className="mt-6 text-center font-medium">Not on FS Insights? </p>
          <p className="text-blue-700">Contact admin for registration.</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
