import React, { useState, useEffect } from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
  PieChart,
  Pie,
  Legend,
} from "recharts";

const PieChartComponent = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/details/adv-details",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ college: "KMIT" }), // Replace 'YourCollegeName' with the actual college name
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setChartData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {" "}
      {!loading && chartData.length > 0 && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <PieChart width={400} height={400}>
            <Pie
              dataKey="EliteCount"
              data={chartData}
              cx={200}
              cy={200}
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Pie
              dataKey="FSACount"
              data={chartData}
              cx={200}
              cy={200}
              innerRadius={85}
              outerRadius={100}
              fill="#82ca9d"
              label
            />
            <Legend />
            <Tooltip />
          </PieChart>
        </div>
      )}
    </>
  );
};

export default PieChartComponent;
