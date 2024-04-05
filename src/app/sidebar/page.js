"use client";
import React from "react";
import { Sidebar } from "flowbite-react";
import { destroyCookie } from "nookies";
import { HiChartPie, HiViewBoards, HiUser, HiTable } from "react-icons/hi";

const SideBar = () => {
  const deleteMyCookie = () => {
    destroyCookie(null, "JWT_AUTH", {
      path: "/", // Path of the cookie to be deleted
    });
  };
  return (
    <div className="h-screen">
      <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="dashboard" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            {/* <Sidebar.Item href="#" icon={HiViewBoards} labelColor="dark">
              Requests
            </Sidebar.Item> */}

            <Sidebar.Item href="/search-content" icon={HiTable}>
              Student Analytics
            </Sidebar.Item>
            <Sidebar.Item href="/" icon={HiUser} onClick={deleteMyCookie()}>
              Logout
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SideBar;
