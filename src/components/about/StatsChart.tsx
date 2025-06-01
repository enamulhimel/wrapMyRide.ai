// components/StatsChart.tsx
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "March", AI: 250000, Preview: 150000 },
  { name: "June", AI: 450000, Preview: 200000 },
  { name: "September", AI: 750000, Preview: 250000 },
  { name: "December", AI: 1000000, Preview: 300000 },
];

const StatsChart: React.FC = () => {
  return (
    <div className="bg-black text-white px-4 py-8 rounded-xl">
      <h2 className="text-2xl font-semibold mb-4 text-white">2024 WrapMyRide.ai Stats</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Legend />
          <Bar dataKey="AI" fill="#FFD700" name="AI Generation" />
          <Bar dataKey="Preview" fill="#FF5A5F" name="Previews" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatsChart;
