"use client"
import React from 'react'
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { AiFillApi } from "react-icons/ai";


const SideBar = () => {
    return (
        <div>
           {/* <h1 className="text-xl pl-5 pt-3 font-extrabold tracking-tight leading-none text-gray-800  dark:text-white">Artendance</h1> */}
            <Sidebar aria-label="Default sidebar example">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiChartPie}>
                        Dashboard
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiViewBoards} labelColor="dark">
                        Requests
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiUser}>
                        Logout
                    </Sidebar.Item>
                    
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar></div>
    )
}

export default SideBar