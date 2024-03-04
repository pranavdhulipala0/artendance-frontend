// "use client"
// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const BarChartComponent = ({data}) => {
//   // const data = [
//   //   { name: 'Jan', value: 400 },
//   //   { name: 'Feb', value: 300 },
//   //   { name: 'Mar', value: 600 },
//   //   { name: 'Apr', value: 800 },
//   //   { name: 'May', value: 700 },
//   //   { name: 'Jun', value: 900 },
//   // ];

//   return (
//     <ResponsiveContainer className="flex items-center mx-auto pt-4 m-2 mb-8 shadow-outline rounded-lg border shadow-md" width="100%" height={350}>
//       <BarChart data={data}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Bar dataKey="value" fill="#0976d8" />
//       </BarChart>
//     </ResponsiveContainer>
//   );
// }

// export default BarChartComponent;

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartComponent = ({ chartData }) => {
  return (
    <ResponsiveContainer className="flex items-center mx-auto pt-4 p-3 m-2 mb-8 shadow-outline rounded-lg border shadow-md" width="100%" height={350}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="_id" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarChartComponent;
