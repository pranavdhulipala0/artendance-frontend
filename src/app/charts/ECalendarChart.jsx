import React, { useEffect, useRef } from "react";
import * as echarts from "echarts/core";
import {
  TooltipComponent,
  TitleComponent,
  LegendComponent,
  DataZoomComponent,
} from "echarts/components";
import { BarChart, CustomSeries } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

// Register necessary components
echarts.use([
  TooltipComponent,
  TitleComponent,
  LegendComponent,
  DataZoomComponent,
  BarChart,
  CustomSeries,
  CanvasRenderer,
]);

const ECalendarChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);
    const option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      title: {
        text: "Error bar chart",
      },
      legend: {
        data: ["bar", "error"],
      },
      dataZoom: [
        {
          type: "slider",
          start: 50,
          end: 70,
        },
        {
          type: "inside",
          start: 50,
          end: 70,
        },
      ],
      xAxis: {
        type: "category", // Specify the type as 'category' for string-based x-axis data
        data: data.map((item) => item.date),
        axisLabel: {
          // Add axisLabel configuration to format the dates
          formatter: function (value) {
            return value.substring(0, 10); // Format the date to display only the first 10 characters (yyyy-MM-dd)
          },
        },
      },
      yAxis: {},
      series: [
        {
          type: "bar",
          name: "bar",
          data: data.map((item) => item.count),
          itemStyle: {
            color: "#77bef7",
          },
        },
        {
          type: "custom",
          name: "error",
          itemStyle: {
            borderWidth: 1.5,
          },
          renderItem: function (params, api) {
            var xValue = api.value(0);
            var highPoint = api.coord([xValue, api.value(1)]);
            var lowPoint = api.coord([xValue, api.value(2)]);
            var halfWidth = api.size([1, 0])[0] * 0.1;
            var style = api.style({
              stroke: api.visual("color"),
              fill: undefined,
            });
            return {
              type: "group",
              children: [
                {
                  type: "line",
                  transition: ["shape"],
                  shape: {
                    x1: highPoint[0] - halfWidth,
                    y1: highPoint[1],
                    x2: highPoint[0] + halfWidth,
                    y2: highPoint[1],
                  },
                  style: style,
                },
                {
                  type: "line",
                  transition: ["shape"],
                  shape: {
                    x1: highPoint[0],
                    y1: highPoint[1],
                    x2: lowPoint[0],
                    y2: lowPoint[1],
                  },
                  style: style,
                },
                {
                  type: "line",
                  transition: ["shape"],
                  shape: {
                    x1: lowPoint[0] - halfWidth,
                    y1: lowPoint[1],
                    x2: lowPoint[0] + halfWidth,
                    y2: lowPoint[1],
                  },
                  style: style,
                },
              ],
            };
          },
          encode: {
            x: 0,
            y: [1, 2],
          },
          data: data.map((item) => [
            item.date,
            item.count - Math.random() * 100,
            item.count + Math.random() * 80,
          ]),
          z: 100,
        },
      ],
    };
    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, [data]);

  return <div ref={chartRef} style={{ width: "100%", height: "500px" }} />;
};

export default ECalendarChart;
