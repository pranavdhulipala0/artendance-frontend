// components/ELineChart.js
import React, { useEffect } from "react";
import * as echarts from "echarts";

const ELineChart = ({ chartData }) => {
  useEffect(() => {
    const chart = echarts.init(document.getElementById("line-chart"));
    const options = {
      title: {
        text: "Detailed Graph",
      },
      tooltip: {},
      xAxis: {
        type: "category",
        data: chartData.map((item) => item.date),
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Count",
          type: "line",
          data: chartData.map((item) => item.count),
          smooth: true,
        },
      ],
    };
    chart.setOption(options);
    return () => {
      chart.dispose();
    };
  }, [chartData]);

  return <div id="line-chart" style={{ width: "100%", height: "400px" }} />;
};

export default ELineChart;
