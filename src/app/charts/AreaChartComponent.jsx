"use client"
// import React, { useState } from 'react';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const AreaChartComponent = ({chartData}) => {
//   // const data = [
//   //   { name: 'Jan', value: 400 },
//   //   { name: 'Feb', value: 300 },
//   //   { name: 'Mar', value: 600 },
//   //   { name: 'Apr', value: 800 },
//   //   { name: 'May', value: 700 },
//   //   { name: 'Jun', value: 900 },
//   // ];

//   const views = ["monotone", "linear","step","stepAfter"]
//   const [viewIndex,setViewIndex] = useState(0);

//   return (
//     <ResponsiveContainer className="flex items-center mx-auto pt-4 p-3 m-2 mb-8 shadow-outline rounded-lg border shadow-md" width="100%" height={350}>
//       <AreaChart data={chartData}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="Date" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Area type={views[viewIndex]} dataKey="total_time" fill="#0976d8" />
//       </AreaChart>
//     </ResponsiveContainer>
//   );
// }

// export default AreaChartComponent;
// AreaChartComponent.js
// AreaChartComponent.js
// AreaChartComponent.js

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AreaChartComponent = ({ chartData }) => {
    console.log(chartData)
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="_id" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="count" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default AreaChartComponent;
