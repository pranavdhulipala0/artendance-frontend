"use client"
import React from 'react';
import { Sidebar } from 'flowbite-react';
import { HiChartPie, HiViewBoards, HiUser, HiTable } from 'react-icons/hi';
import Link from 'next/link';

const SideBar = () => {
    return (
        <div>
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
                            <Sidebar.Item href="/student" icon={HiTable}>
                               Search
                            </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    );
};

export default SideBar;
