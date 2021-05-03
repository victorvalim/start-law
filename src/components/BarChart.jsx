/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  BarChart as Chart, Bar, YAxis, XAxis, CartesianGrid, Legend, ResponsiveContainer, Cell, Tooltip,
} from 'recharts';

const COLORS = ['#8884d8', '#00C49F', '#FFBB28', '#FF8042', '#0088FE'];

function BarChart({ data }) {
  return (
    <ResponsiveContainer height="70%" width="100%">

      <Chart
        barGap={0}
        margin={{
          top: 0, right: 22, left: 0, bottom: 0,
        }}
        barSize={30}
        maxBarSize={30}
        data={data}
      >
        <CartesianGrid />
        <Tooltip />

        <XAxis dataKey="name" />
        <Bar dataKey="value" fill="#8884d8">
          {
      data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index]} />

      ))
    }
        </Bar>
      </Chart>

    </ResponsiveContainer>

  );
}

export default BarChart;
