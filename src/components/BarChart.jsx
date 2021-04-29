/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  BarChart as Chart, Bar, YAxis, XAxis, CartesianGrid, Legend, ResponsiveContainer,
} from 'recharts';

function BarChart({ data }) {
  const {
    innerSize: { width, height },
  } = useSelector((state) => state.userReducer);
  return (
    <ResponsiveContainer height="80%">

      <Chart
        barGap={1}
        margin={{
          top: 0, right: 20, left: 0, bottom: 0,
        }}
        // width={document.documentElement.clientWidth * 0.43}
        // height={document.documentElement.clientHeight * 0.3}
        barSize={50}
        maxBarSize={50}
        data={data}
      >
        <CartesianGrid />
        <XAxis dataKey="name" />
        <Bar dataKey="value" fill="#8884d8" />
      </Chart>

    </ResponsiveContainer>

  );
}

export default BarChart;
