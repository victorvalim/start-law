/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  PieChart as Chart, Pie, ResponsiveContainer, Cell, Tooltip, Legend,
} from 'recharts';

const COLORS = ['#8884d8', '#00C49F', '#FFBB28', '#FF8042'];

function PieChart({ data }) {
  const {
    innerSize: { width, height },
  } = useSelector((state) => state.userReducer);
  return (
    <ResponsiveContainer height="100%" width="100%">

      <Chart>
        <Tooltip />
        <Legend verticalAlign="top" height={30} />
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
