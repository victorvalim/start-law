/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  PieChart as Chart, Pie, ResponsiveContainer, Cell, Tooltip, Legend,
} from 'recharts';

const COLORS = ['#8884d8', '#00C49F', '#FFBB28', '#FF8042'];

function PieChart({ data }) {
  return (
    <ResponsiveContainer height="90%" width="90%">

      <Chart margin={{
        top: 0, right: 0, left: 0, bottom: 0,
      }}
      >
        <Tooltip />
        <Legend verticalAlign="top" height={50} />
        <Pie data={data} dataKey="value" nameKey="name" fill="#8884d8">
          {
      data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index]} />
      ))
    }
        </Pie>
      </Chart>
    </ResponsiveContainer>
  );
}

export default PieChart;
