"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/page.js';
import Artendance from '../artendance/page.js';
import Charts from '../charts/page.js';

const MainContent = () => {
  const college = 'KMIT';
  const batches = ["Elite", "FSA", "FSA2", "FSB"];
  const [selectedBatch, setSelectedBatch] = useState('Elite');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [chartData, setChartData] = useState(null); // State to hold chart data

  useEffect(() => {
    async function fetchData() {
      const apiUrl = '/api/details';
      const requestData = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          college: college,
          batch: selectedBatch,
          startDate: startDate,
          endDate: endDate,
        }),
      };

      try {
        const response = await fetch(apiUrl, requestData);
        const data = await response.json();
        console.log(data);
        setChartData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [selectedBatch, startDate, endDate]);

  return (
    <div className='flex flex-col mx-auto'>
      <Artendance />
      <Navbar setBatch={setSelectedBatch} setStartDate={setStartDate} setEndDate={setEndDate} batches={batches} />
      <Charts batch={selectedBatch} college={college} chartData={chartData} />
    </div>
  );
};

export default MainContent;
