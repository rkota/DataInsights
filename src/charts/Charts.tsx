import React from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";

interface DataPoint {
  name: string;
  value: number;
}

const data: DataPoint[] = [
  { name: "Jan", value: 10 },
  { name: "Feb", value: 20 },
  { name: "Mar", value: 15 },
  { name: "Apr", value: 25 },
  { name: "May", value: 30 },
  { name: "Jun", value: 35 },
];

const SimpleAreaChart: React.FC = () => {
  return (
    <AreaChart width={500} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
};

export default SimpleAreaChart;
