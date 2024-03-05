import React, { useState } from 'react'
import AreaChartComponent from "./AreaChartComponent";
import BarChartComponent from "./BarChartComponent";
import LineChartComponent from "./LineChartComponent";
import PieChartComponent from "./PieChartComponent";

function Charts({chartData}) {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center items-center">
      <LineChartComponent chartData={chartData}/>
      <BarChartComponent chartData={chartData}/>
      <AreaChartComponent chartData={chartData}/>
      {/* <PieChartComponent chartData={chartData}/> */}
    </div>
  );
}

export default Charts