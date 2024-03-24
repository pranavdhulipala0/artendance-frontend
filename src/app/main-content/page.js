"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../navbar/page.js";
import Artendance from "../artendance/page.js";
import Charts from "../charts/page.js";
import { Spinner } from "flowbite-react";

const MainContent = () => {
  const college = "KMIT";
  const batches = ["Elite", "FSA"];
  const [selectedBatch, setSelectedBatch] = useState("Elite");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [chartData, setChartData] = useState(null); // State to hold chart data

  const [data, setData] = useState(null);

  function regularizeData() {
    // Sort the chartData by date
    const sortedData = chartData.sort(
      (a, b) => new Date(a._id) - new Date(b._id)
    );

    // Map and return the sorted data
    return sortedData.map(({ _id, presentees }) => ({
      date: _id,
      count: presentees,
    }));
  }

  useEffect(() => {
    if (chartData) {
      const tempData = regularizeData();
      setData(tempData);
      console.log(tempData);
    }
  }, [chartData]);

  useEffect(() => {
    async function fetchData() {
      const apiUrl = "http://localhost:5000/api/details/details";
      const requestData = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
        // console.log(data);
        setChartData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [selectedBatch, startDate, endDate]);

  return data ? (
    <div className="px-5 mx-auto pt-10 w-full">
      <Artendance />
      <Navbar
        setBatch={setSelectedBatch}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        batches={batches}
      />
      <Charts batch={selectedBatch} college={college} chartData={data} />
    </div>
  ) : (
    <div className="flex items-center flex-col mx-auto justify-center mt-5 pt-5">
      <Spinner />
      <p className="pt-5">Fetching details...</p>
    </div>
  );
};

export default MainContent;
