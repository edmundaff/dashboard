"use client";
import { BarChart, Bar, XAxis, YAxis, LineChart, Line } from "recharts";

export default function SalesChart({ data, type }: any) {
  if (type === "line") {
    return (
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Line dataKey="sales" stroke="#8884d8" />
      </LineChart>
    );
  }

  return (
    <BarChart width={400} height={300} data={data}>
      <XAxis dataKey="month" />
      <YAxis />
      <Bar dataKey="sales" fill="#8884d8" />
    </BarChart>
  );
}