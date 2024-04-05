"use client";
import React, { useState } from "react";
import AreaChartComponent from "./AreaChartComponent";
import BarChartComponent from "./BarChartComponent";
import LineChartComponent from "./LineChartComponent";
import PieChartComponent from "./PieChartComponent";
import StackedAreaChart from "./StackedAreaChart";
import SyncChart from "./SyncChart";

function Charts({ chartData }) {
  return (
    <>
      {" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center items-center">
        <BarChartComponent chartData={chartData} />
        <AreaChartComponent chartData={chartData} />
      </div>
      {/* <ECalendarChart data={chartData} /> */}
      <div>
        <div className="flex items-center mx-auto pt-4 p-3 m-2 mb-8 shadow-outline rounded-lg border shadow-md">
          <div className="px-4 mx-auto text-center py-1">
            <p className="mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
              Compare batch attendance
            </p>
          </div>
          <StackedAreaChart />
        </div>

        <div className="flex items-center mx-auto pt-4 p-3 m-2 mb-8 shadow-outline rounded-lg border shadow-md">
          <SyncChart />
          <div className="px-6 mx-3 text-center py-1">
            <p className="mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
              Interactive Comparison of Elite & FSA.
            </p>
          </div>
        </div>
        <div className="my-4"></div>
        {/* <PieChartComponent /> */}
      </div>
    </>
  );
}

export default Charts;
