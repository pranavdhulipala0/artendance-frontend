"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/page.js';
import Artendance from '../artendance/page.js';
import Charts from '../charts/page.js';
import transformChartData from "../helpers/transformData.js"

const MainContent = () => {
    const college = 'KMIT';
    const batches = ["Elite", "FSA", "FSA2", "FSB"]
    const [batch, setBatch] = useState('Elite');
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [chartData, setChartData] = useState(null); // State to hold chart data

    useEffect(() => {
        console.log(chartData)
        async function fetchData() {

            const apiUrl = '/api/details';
            const requestData = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    college: college,
                    batch: batch,
                    startDate: startDate,
                    endDate: endDate,
                }),
            };

            try {
                const response = await fetch(apiUrl, requestData);
                const data = await response.json();
                const simplifiedChartData = await transformChartData(data);
                setChartData(simplifiedChartData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [batch, startDate, endDate]);
    return (
        <div className='flex flex-col mx-auto'>
            <Artendance />
            <Navbar batch={batch} setBatch={setBatch} batches={batches} />
            <Charts batch={batch} college={college} chartData={chartData} />
        </div>
    );
};

export default MainContent;
