/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  PieChart as Chart, Pie,
} from 'recharts';

function PieChart({ data }) {
  const {
    innerSize: { width, height },
  } = useSelector((state) => state.userReducer);
  return (
    <Chart width={width * 0.3} height={height * 0.3}>
      <Pie data={data} dataKey="value" nameKey="name" fill="#8884d8" />
    </Chart>
  );
}

export default PieChart;
