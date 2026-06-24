"use client";

import { useState } from "react";
import { salesData } from "../data/salesData";
import SalesChart from "../components/organisms/SalesChart";

export default function Dashboard() {
  const [year, setYear] = useState(2024);
  const [type, setType] = useState<"bar" | "line">("bar");

  const selectedData = salesData.find((item) => item.year === year) || null;

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>

      <select onChange={(e) => setYear(Number(e.target.value))}>
        <option value={2022}>2022</option>
        <option value={2023}>2023</option>
        <option value={2024}>2024</option>
      </select>

      <button onClick={() => setType("bar")}>Bar</button>
      <button onClick={() => setType("line")}>Line</button>

      <SalesChart data={selectedData} type={type} />
    </div>
  );
}