"use client"
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AreaChartComponent = () => {
  const data = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 700 },
    { name: 'Jun', value: 900 },
  ];

  const views = ["monotone", "linear","step","stepAfter"]
  const [viewIndex,setViewIndex] = useState(0);

  return (
    <ResponsiveContainer className="flex items-center mx-auto pt-4 p-3 m-2 mb-8 shadow-outline rounded-lg border shadow-md" width="100%" height={350}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type={views[viewIndex]} dataKey="value" fill="#0976d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default AreaChartComponent;