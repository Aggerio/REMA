import React from "react";
import { PieChart, Pie, Cell } from "recharts";

export default function StatPieChart() {
  const data = [
    { name: "Group A", value: 200 },
    { name: "Group B", value: 122 },
    { name: "Group C", value: 264 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <PieChart width={300} height={200}>
        <Pie
          data={data}
          cx={150}
          cy={100}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
    </PieChart>
  );
}
