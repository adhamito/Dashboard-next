"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const totalRevenueData = [
  { month: "Jan", total: Math.floor(Math.random() * 500) + 1000, products: Math.floor(Math.random() * 200) + 50 },
  { month: "Feb", total: Math.floor(Math.random() * 500) + 1000, products: Math.floor(Math.random() * 200) + 50 },
  { month: "Mar", total: Math.floor(Math.random() * 500) + 1000, products: Math.floor(Math.random() * 200) + 50 },
  { month: "Apr", total: Math.floor(Math.random() * 500) + 1000, products: Math.floor(Math.random() * 200) + 50 },
  { month: "May", total: Math.floor(Math.random() * 500) + 1000, products: Math.floor(Math.random() * 200) + 50 },
  { month: "Jun", total: Math.floor(Math.random() * 500) + 1000, products: Math.floor(Math.random() * 200) + 50 },
  { month: "Jul", total: Math.floor(Math.random() * 500) + 1000, products: Math.floor(Math.random() * 200) + 50 },
  { month: "Aug", total: Math.floor(Math.random() * 500) + 1000, products: Math.floor(Math.random() * 200) + 50 },
  { month: "Sep", total: Math.floor(Math.random() * 500) + 1000, products: Math.floor(Math.random() * 200) + 50 },
  { month: "Oct", total: Math.floor(Math.random() * 500) + 1000, products: Math.floor(Math.random() * 200) + 50 },
  { month: "Nov", total: Math.floor(Math.random() * 500) + 1000, products: Math.floor(Math.random() * 200) + 50 },
  { month: "Dec", total: Math.floor(Math.random() * 500) + 1000, products: Math.floor(Math.random() * 200) + 50 },
];

const chartConfig = {
  barColors: ["#ff4c4c", "#4c8cff"],
  radius: [0,0,0,0],
  xAxisStroke: "#888888",
  yAxisStroke: "#888888",
  tickFontSize: 12,
};

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={totalRevenueData}>
        <XAxis
          dataKey="month"
          stroke={chartConfig.xAxisStroke}
          fontSize={chartConfig.tickFontSize}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke={chartConfig.yAxisStroke}
          fontSize={chartConfig.tickFontSize}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar
          dataKey="total"
          fill={chartConfig.barColors[0]}
          radius={chartConfig.radius as [number, number, number, number]}
        />
        <Bar
          dataKey="products"
          fill={chartConfig.barColors[1]}
          radius={chartConfig.radius as [number, number, number, number]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
