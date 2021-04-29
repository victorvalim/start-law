/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  BarChart as Chart, Bar, YAxis, XAxis, CartesianGrid, Legend,
} from 'recharts';

function BarChart({ data }) {
  const {
    innerSize: { width, height },
  } = useSelector((state) => state.userReducer);
  return (
    <Chart width={width * 0.3} height={height * 0.3} data={data}>
      <CartesianGrid />
      <XAxis dataKey="name" />
      <Bar barSize={20} dataKey="value" fill="#8884d8" />
    </Chart>
  );
}

export default BarChart;
