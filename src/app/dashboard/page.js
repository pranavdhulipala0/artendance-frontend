import React from 'react';
import MainContent from "../main-content/page.js";
import SideBar from "../sidebar/page.js"



const Dashboard = () => {
  return (
    <>
    <div className='flex flex-col-2 '>
    <SideBar />
    <MainContent />
    </div>
    </>
  );
}

export default Dashboard;
