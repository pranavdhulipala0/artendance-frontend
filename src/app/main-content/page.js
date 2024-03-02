import React from 'react'
import Navbar from "../navbar/page.js";
import Artendance from "../artendance/page.js";

const MainContent = () => {
    return (
        <div className='flex flex-col mx-auto'>
            <Artendance />
            <Navbar />
        </div>
    )
}

export default MainContent