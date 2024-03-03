"use client"

import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Button } from "flowbite-react";
import { Card } from "flowbite-react";

const LineChartComponent = () => {
  const data = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 600 },
    { name: "Apr", value: 800 },
    { name: "May", value: 700 },
    { name: "Jun", value: 900 },
  ];

  const views = ["monotone", "linear", "step", "stepAfter"];
  const [viewIndex, setViewIndex] = useState(0);

  return (
    <ResponsiveContainer className="flex items-center mx-auto pt-4 p-3 m-2 mb-8 shadow-outline rounded-lg border shadow-md" width="100%" height={350}>
        <div className="flex p-2 justify-end">
          {/* <p className="text-md text-bold underline mt-1 px-3 text-transform: capitalize">
            {views[viewIndex]}
          </p> */}
          {/* <Button
            className="h-8 w-16"
            onClick={() => setViewIndex((viewIndex + 1) % views.length)}
            color="blue"
          >
            <p className="text-sm">Toggle</p>
          </Button> */}
        </div>
        {/* <div className="items-center mx-auto pt-4 p-3 m-2 mb-8 shadow-outline rounded-lg border shadow-md"> */}
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type={views[viewIndex]} dataKey="value" stroke="#0976d8" />
        </LineChart>
        {/* </div> */}
    </ResponsiveContainer>
  );
};

export default LineChartComponent;