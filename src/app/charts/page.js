import React from 'react'
import AreaChartComponent from "./AreaChartComponent";
import BarChartComponent from "./BarChartComponent";
import LineChartComponent from "./LineChartComponent";
import PieChartComponent from "./PieChartComponent";

function Charts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center items-center">
      <LineChartComponent />
      <BarChartComponent />
      <AreaChartComponent />
      <PieChartComponent />
    </div>
  );
}

export default Charts