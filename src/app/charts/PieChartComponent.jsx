"use client"
// import React from 'react';
// import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

// const PieChartComponent = ({data}) => {
//   // const data = [
//   //   { name: 'Group A', value: 400 },
//   //   { name: 'Group B', value: 300 },
//   //   { name: 'Group C', value: 300 },
//   //   { name: 'Group D', value: 200 },
//   // ];

//   return (
//     <ResponsiveContainer className="flex items-center mx-auto pt-4 p-3 m-2 mb-8 shadow-outline rounded-lg border shadow-md" width="100%" height={350}>
//       <PieChart>
//         <Pie dataKey="value" isAnimationActive={true} data={data} cx="50%" cy="50%" outerRadius={150} fill="#0976d8" label />
//         <Tooltip />
//       </PieChart>
//     </ResponsiveContainer>
//   );
// }

// export default PieChartComponent;
    
import React, { useState } from 'react';
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PieChartComponent = ({ chartData }) => {
  return (
    <ResponsiveContainer className="flex items-center mx-auto pt-4 p-3 m-2 mb-8 shadow-outline rounded-lg border shadow-md" width="100%" height={350}>
      <PieChart>
        <Pie dataKey="count" data={chartData} fill="#0976d8" label />
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default PieChartComponent;
